const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const History = require("./ConsultHistory");
const aws = require("aws-sdk");

const s3 = new aws.S3();

const PhotoSchema = new mongoose.Schema(
  {
    name: String,
    owner: {
      type: mongoose.Types.ObjectId,
      refPath: "onModel",
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Consult", "Client"],
    },
    size: Number,
    key: String,
    url: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

PhotoSchema.pre("save", function () {
  if (!this.url) {
    this.url =
      STORAGE_TYPE === "s3"
        ? `${process.env.S3_URL}/${file.key}`
        : `${process.env.APP_URL}/files/${this.key}`;
  }
});

PhotoSchema.pre("remove", function () {
  if (process.env.STORAGE_TYPE === "s3") {
    return s3
      .deleteObject({
        Bucket: "podobucketv2",
        Key: this.key,
      })
      .promise();
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, "..", "..", "uploads", this.key)
    );
  }
});

PhotoSchema.post("save", async function (doc) {
  await History.create({
    o: "i",
    docId: doc.owner,
    d: doc,
  });
});

PhotoSchema.post("remove", async function (doc) {
  await History.create({
    o: "r",
    docId: doc.owner,
    d: doc,
  });
});

module.exports = mongoose.model("Photo", PhotoSchema);
