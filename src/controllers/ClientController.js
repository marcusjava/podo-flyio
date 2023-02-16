const Client = require("../models/Client");
const Consult = require("../models/Consult");
const ValidateClient = require("../validation/client");

const create = async (req, res, next) => {
  const { errors, isValid } = ValidateClient(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const {
    name,
    instagram,
    cpf,
    rg,
    email,
    address,
    occupation,
    contact,
    nasc,
    sex,
    etnia,
  } = req.body;
  const newClient = new Client({
    avatar: req.file === undefined ? "no-img.png" : req.file.key,
    name,
    instagram,
    cpf,
    rg,
    email,
    address: JSON.parse(address),
    occupation,
    contact,
    nasc,
    sex,
    etnia,
    createdBy: req.user,
  });

  newClient
    .save()
    .then((response) => res.status(201).json(response))
    .catch((error) => {
      return next(error);
    });
};

const update = async (req, res, next) => {
  const { errors, isValid } = ValidateClient(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }

  const { id } = req.params;

  const {
    name,
    instagram,
    cpf,
    rg,
    email,
    address,
    occupation,
    contact,
    nasc,
    sex,
    etnia,
  } = req.body;

  let oldAvatar;

  Client.findById(id)
    .then((doc) => {
      if (!doc) {
        res
          .status(404)
          .json({ path: "name", message: "Cliente não localizado!" });
      }

      oldAvatar = doc.avatar;

      doc.avatar = typeof req.file === "undefined" ? oldAvatar : req.file.key;
      doc.name = name;
      doc.instagram = instagram;
      doc.cpf = cpf;
      doc.rg = rg;
      doc.email = email;
      doc.address = JSON.parse(address);
      doc.occupation = occupation;
      doc.contact = contact;
      doc.nasc = nasc;
      doc.sex = sex;
      doc.etnia = etnia;
      doc.updatedBy = req.user;
      return doc.save();
    })
    .then((doc) => {
      return res.json(doc);
    })
    .catch((error) => {
      return next(error);
    });
};

const retrieve = async (req, res, next) => {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return next({
        status: 404,
        message: { path: "name", message: "Cliente não localizado" },
      });
    }

    return res.send(client);
  } catch (error) {
    return next(error);
  }
};

const list = async (req, res) => {
  const { start, end, name, email, cpf, contact, id, limit = 100 } = req.query;

  const condition = {};
  let list = [];

  if (name != undefined) {
    condition.name = { $regex: name, $options: "i" };
  }

  if (email != undefined) {
    condition.email = { $regex: email, $options: "i" };
  }

  if (cpf != undefined) {
    condition.cpf = { $regex: cpf, $options: "i" };
  }
  if (contact != undefined) {
    condition.contact = { $regex: contact, $options: "i" };
  }

  if (start !== undefined && end !== undefined) {
    condition.createdAt = {
      $gte: new Date(new Date(start).setHours(00, 00, 00)),
      $lte: new Date(new Date(end).setHours(23, 59, 59)),
    };
  }

  list = await Client.find(condition)
    .populate("consults")
    .sort({ createdAt: -1 })
    .limit(parseInt(limit));

  return res.json(list);
};

const getStats = async (req, res, next) => {
  const { startDate, endDate } = req.query;
  //...(includeB && { b: 2 } )

  Client.aggregate([
    {
      $match: {
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%d-%m-%Y", date: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
  ])
    .exec()
    .then((clients) => {
      return res.send(clients);
    })
    .catch((error) =>
      next({
        status: 500,
        message: {
          path: "error",
          message: "Erro ao consultar os clientes",
        },
      })
    );
};

module.exports = { create, update, list, retrieve, getStats };
