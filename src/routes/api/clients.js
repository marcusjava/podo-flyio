const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../../config/upload");

const routes = Router();
const upload = multer(uploadConfig);
const passport = require("passport");

const ClientController = require("../../controllers/ClientController");

// @route POST api/clients/register
// @desc Register Client
// @access Private
routes.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  upload.single("thumbnail"),
  ClientController.create
);

// @route PUT api/clients/:id
// @desc Update Client
// @access Private
routes.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("thumbnail"),
  ClientController.update
);

// @route GET api/clients
// @desc GET Clients
// @access Private
routes.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  ClientController.list
);

// @route GET api/clients
// @desc GET Clients
// @access Private
routes.get(
  "/stats/clients",
  passport.authenticate("jwt", { session: false }),
  ClientController.getStats
);

// @route GET api/clients
// @desc GET Client by ID
// @access Private
routes.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  ClientController.retrieve
);

module.exports = routes;
