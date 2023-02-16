const mongoose = require("mongoose");

const mongooseHistory = require("mongoose-history");

const mongoose_populate = require("mongoose-autopopulate");

const ProcedureSchema = mongoose.Schema(
  {
    service: {
      type: mongoose.Types.ObjectId,
      ref: "Service",
      autopopulate: true,
    },
    name: {
      type: String,
      required: [true, "Campo obrigatorio"],
    },
    price: {
      type: String,
    },
    description: {
      type: String,
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

ProcedureSchema.plugin(mongooseHistory);

ProcedureSchema.plugin(mongoose_populate);

module.exports = mongoose.model("Procedure", ProcedureSchema);
