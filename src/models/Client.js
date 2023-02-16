const mongoose = require("mongoose");
const mongooseHistory = require("mongoose-history");
const mongoose_populate = require("mongoose-autopopulate");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const ClientSchema = new mongoose.Schema(
  {
    avatar: { type: String },
    name: {
      type: String,
      required: [true, "Campo obrigatorio"],
    },
    instagram: {
      type: String,
      default: "",
    },
    cpf: {
      type: String,
    },
    rg: { type: String, default: "" },
    email: {
      type: String,
      default: "",
    },
    address: {
      street: { type: String, required: [true, "Campo obrigatorio"] },
      neighborhood: { type: String, required: [true, "Campo obrigatorio"] },
      city: {
        type: String,
        required: [true, "Campo obrigatorio"],
      },
      state: {
        type: String,
        required: [true, "Campo obrigatorio"],
      },
      cep: { type: String, default: "49000000" },
    },

    occupation: { type: String, default: "" },
    contact: { type: String, default: "" },
    nasc: { type: String, default: "" },
    sex: {
      type: String,
      default: "",
    },
    etnia: {
      type: String,
      default: "",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
    updatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

ClientSchema.virtual("avatar_url").get(function () {
  return process.env.STORAGE_TYPE == "s3"
    ? `${process.env.S3_URL}/${this.avatar}`
    : `${process.env.APP_URL}/${this.avatar}`;
});

ClientSchema.virtual("consults", {
  ref: "Consult",
  localField: "_id",
  foreignField: "client",
});

ClientSchema.plugin(mongooseHistory);

ClientSchema.plugin(mongoose_populate);

ClientSchema.plugin(beautifyUnique);

module.exports = mongoose.model("Client", ClientSchema);
