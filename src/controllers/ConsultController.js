const Consult = require("../models/Consult");
const Client = require("../models/Client");
const ConsultHistory = require("../models/ConsultHistory");
const ValidateConsult = require("../validation/consult");
const ObjectToString = require("../utils/ObjectToString");
const dayjs = require("dayjs");
const path = require("path");
const pdf = require("html-pdf");
const puppeteer = require("puppeteer");
const ejs = require("ejs");
const { getList, getDoc } = require("../services/consult");

const create = async (req, res, next) => {
  const { errors, isValid } = ValidateConsult(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const {
    date,
    client,
    procedures,
    price,
    type_consult,
    status,
    observations,
  } = req.body;

  let consult = await Consult.findOne({ date });

  if (consult) {
    return next({
      status: 400,
      message: {
        path: "date",
        message: "Já existe consulta marcada nesta data/hora",
      },
    });
  }

  try {
    const newConsult = await Consult.create({
      date,
      client,
      procedures,
      price,
      type_consult,
      status,
      observations,
      createdBy: req.user,
    });
    return res.status(201).json(newConsult);
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  const { errors, isValid } = ValidateConsult(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const {
    date,
    client,
    procedures,
    price,
    type_consult,
    end_date,
    anamnese,
    observations,
    status,
  } = req.body;

  const { id } = req.params;

  const consult = await Consult.findById(id);

  if (!consult) {
    return next({
      status: 404,
      message: { path: "error", message: "Consulta não localizada" },
    });
  }

  Consult.findByIdAndUpdate(
    { _id: id },
    {
      date,
      end_date: !consult.end_date ? end_date : consult.end_date,
      client,
      procedures,
      price,
      type_consult,
      anamnese,
      observations,
      status,
      updatedBy: req.user,
    },
    { new: true, omitUndefined: true }
  )
    .then((doc) => {
      return res.json(doc);
    })
    .catch((error) => {
      return next(error);
    });
};

const retrieve = async (req, res, next) => {
  const { id } = req.params;

  const consult = await Consult.findById(id);

  if (!consult) {
    return next({
      status: 404,
      message: { path: "error", message: "Consulta não localizada" },
    });
  }

  return res.json(consult);
};

const list = async (req, res, next) => {
  const { start, end, status, client, client_id, all, limit = 200 } = req.query;
  getList(
    { start, end, status, client, client_id, all, limit },
    (error, consults) => {
      if (error) {
        return next({
          status: 400,
          message: {
            path: "error",
            message: "Sem resultados",
          },
          originalError: error,
        });
      }

      return res.json(consults);
    }
  );
};

const generateDoc = async (req, res, next) => {
  const { id } = req.params;

  getDoc(id, (err, doc) => {
    if (err) {
      return next({
        status: 500,
        message: {
          path: "error",
          message: "Ocorreu um erro ao gerar a ficha de consulta",
        },
      });
    }
    return res.json(doc);
  });
};

const log = async (req, res, next) => {
  const { start, end } = req.query;
  const { id } = req.params;
  let condition = {};

  if (start !== undefined && end !== undefined) {
    condition.t = {
      $gte: new Date(new Date(start).setHours(00, 00, 00)),
      $lte: new Date(new Date(end).setHours(23, 59, 59)),
    };
  }

  if (id !== undefined) {
    condition.docId = id;
  }

  ConsultHistory.find(condition)
    .sort({ t: 1 })
    .limit(200)
    .exec((error, logs) => {
      if (error) {
        next({
          status: 400,
          originalError: error,
          message: {
            path: "error",
            message: "Erro ao recuperar os logs da consulta",
          },
        });
      }
      return res.json(logs);
    });
};

const getStats = async (req, res, next) => {
  const { startDate, endDate, status = "Realizada" } = req.query;
  //...(includeB && { b: 2 } )

  Consult.aggregate([
    {
      $match: {
        date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        status,
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%d-%m-%Y", date: "$date" },
        },
        status: { $first: "$status" },
        count: { $sum: 1 },
      },
    },
  ])
    .exec()
    .then((consults) => {
      return res.send(consults);
    })
    .catch((error) =>
      next({
        status: 500,
        message: {
          path: "error",
          message: "Erro ao recuperar as consultas",
        },
      })
    );
};

const getConsultsHTML = async (req, res) => {
  const { start, end, status, client, client_id, all, limit = 200 } = req.query;
  getList(
    { start, end, status, client, client_id, all, limit },
    (error, consults) => {
      if (error) {
        return next({
          status: 400,
          message: {
            path: "error",
            message: "Sem resultados",
          },
          originalError: error,
        });
      }

      const file = path.join(__dirname, "..", "ejs", "consult", "consults.ejs");
      ejs.renderFile(file, { consults, dayjs }, (err, html) => {
        if (err) {
          console.log("error", err);
          return res.send("Ocorreu um erro ao gerar relatorio");
        }
        res.send(html);
      });
    }
  );
};

const generateDocHTML = async (req, res) => {
  const { id } = req.params;

  getDoc(id, (err, consult) => {
    if (err) {
      return next({
        status: 500,
        message: {
          path: "error",
          message: "Ocorreu um erro ao gerar a ficha de consulta",
        },
      });
    }
    const file = path.join(__dirname, "..", "ejs", "consult", "anamnese.ejs");
    ejs.renderFile(file, { consult, dayjs }, (err, html) => {
      if (err) {
        console.log("error", err);
        return res.send("Ocorreu um erro ao gerar relatorio");
      }
      res.send(html);
    });
  });
};

/* {
  _id: { 
    $dateToString: { format: "%d-%m-%Y", date: "$date" } 
  },
  count: {$sum:1}
} */

module.exports = {
  create,
  update,
  retrieve,
  list,
  log,
  generateDoc,
  getStats,
  getConsultsHTML,
  generateDocHTML,
};
