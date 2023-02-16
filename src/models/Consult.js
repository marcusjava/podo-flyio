const mongoose = require("mongoose");
const mongoose_populate = require("mongoose-autopopulate");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const History = require("./ConsultHistory");

dayjs.extend(utc);

const ConsultSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, "Campo obrigatorio"],
    },
    end_date: {
      type: Date,
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "Client",
      autopopulate: true,
    },
    procedures: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Procedure",
        autopopulate: true,
      },
    ],
    observations: {
      type: String,
    },
    price: {
      type: String,
    },
    //0 - Agendada 1 - Retorno 2 - Urgencia
    type_consult: {
      type: String,
      enum: ["Agendada", "Retorno", "Urgencia"],
      default: "Agendada",
    },
    anamnese: mongoose.Schema.Types.Mixed,
    status: {
      type: String,
      enum: ["Marcada", "Realizada", "Cancelada", "Remarcada"],
      default: "Marcada",
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

ConsultSchema.post("save", async (doc) => {
  await History.create({
    o: "i",
    docId: doc._id,
    d: doc,
  });
});

ConsultSchema.post("findOneAndUpdate", async (doc) => {
  await History.create({
    o: "u",
    docId: doc._id,
    d: doc,
  });
});

ConsultSchema.plugin(mongoose_populate);

module.exports = mongoose.model("Consult", ConsultSchema);
