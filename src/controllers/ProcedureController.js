const Procedure = require("../models/Procedure");
const Dedos = require("../utils/DedosJSON");

const ValidateProcedure = require("../validation/procedure");

const create = async (req, res, next) => {
  const { errors, isValid } = ValidateProcedure(req.body);
  let procedures = [];

  if (!isValid) {
    return next({ status: 400, message: errors });
  }

  const { service, name, price, description } = req.body;

  procedures = Dedos.map((item) => ({
    service,
    name: `${name} em ${item}`,
    price,
    description,
  }));

  const procedure = await Procedure.findOne({ name });

  if (procedure) {
    return next({
      status: 400,
      message: { path: "name", message: "Procedimento ja cadastrado" },
    });
  }

  Procedure.insertMany(procedures)
    .then((items) => res.status(201).json(items))
    .catch((error) => next(error));
};

const update = async (req, res, next) => {
  const { errors, isValid } = ValidateProcedure(req.body);

  if (!isValid) {
    next({ status: 400, message: errors });
  }

  const { service, name, price, description } = req.body;
  const { id } = req.params;

  Procedure.findById({ _id: id })
    .then((doc) => {
      if (!doc) {
        return next({
          status: 404,
          message: {
            path: "procedure",
            message: "Procedimento não localizado",
          },
        });
      }
      doc.service = service;
      doc.name = name;
      doc.price = price;
      doc.description = description;
      doc.updatedBy = req.user;

      return doc.save();
    })
    .then((doc) => res.json(doc))
    .catch((error) => next(error));
};

const list = async (req, res) => {
  const list = await Procedure.find({}).sort({ createdAt: -1 }).limit(100);
  return res.json(list);
};

module.exports = { create, update, list };
