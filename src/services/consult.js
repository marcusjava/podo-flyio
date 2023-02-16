const Consult = require("../models/Consult");
const Photo = require("../models/Photo");
const ObjectToString = require("../utils/ObjectToString");
const dayjs = require("dayjs");

const getList = async (params, callback) => {
  const { start, end, status, client, client_id, all, limit } = params;
  let condition = {};
  let clients;

  if (!all) {
    condition.date = {
      $gte: new Date(new Date().setHours(00, 00, 00)),
    };
  }

  if (start !== undefined && end !== undefined) {
    condition.date = {
      $gte: new Date(new Date(start).setHours(00, 00, 00)),
      $lte: new Date(new Date(end).setHours(23, 59, 59)),
    };
  }

  if (status !== undefined) {
    condition.status = status;
  }

  if (client !== undefined) {
    clients = await Client.find({ name: { $regex: client, $options: "i" } });
    condition.client = { $in: clients };
  }
  if (client_id !== undefined) {
    condition.client = { _id: client_id };
  }

  Consult.find(condition)
    .sort({ date: 1 })
    .limit(limit)
    .exec((error, consults) => {
      if (error) {
        return callback(error, null);
      }

      return callback(null, consults);
    });
};

const getDoc = async (id, callback) => {
  try {
    const {
      _id,
      date,
      client: { avatar, address, name, cpf, contact },
      procedures,
      anamnese,
      price,
      type_consult,
      updatedAt,
    } = await Consult.findById(id);
    const photos = await Photo.find({ owner: id, onModel: "Consult" });
    const doc = {
      _id,
      date,
      avatar,
      name,
      cpf,
      contact,
      address,
      procedures: procedures.map((item) => ({
        name: item.name,
        price: item.price,
      })),
      anamnese: {
        ...anamnese,
        unhas_formato: ObjectToString(anamnese.unhas_formato),
        orto_lesoes: ObjectToString(anamnese.orto_lesoes),
        pele_lesoes: ObjectToString(anamnese.pele_lesoes),
        unhas_lesoes: ObjectToString(anamnese.unhas_lesoes),
      },
      price,
      type_consult,
      updatedAt,
      photos,
    };
    return callback(null, doc);
  } catch (err) {
    return callback(err, null);
  }
};

module.exports = { getList, getDoc };
