const { Router } = require("express");

const routes = Router();

const PdfController = require("../../controllers/PdfController");

routes.get("/", PdfController.getPDF);

module.exports = routes;
