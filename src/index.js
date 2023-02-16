require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const logger = require("./config/logger");
const passport = require("passport");
var fs = require("fs");
const dayjs = require("dayjs");
const serveIndex = require("serve-index");

const users = require("./routes/api/users");
const clients = require("./routes/api/clients");
const procedures = require("./routes/api/procedures");
const services = require("./routes/api/services");
const consults = require("./routes/api/consults");
const photos = require("./routes/api/photos");
const pdf = require("./routes/api/pdf");
const ErrorController = require("./controllers/ErrorController");

// URI mongodb atlas mongodb+srv://omnistack:omnistack@cluster0-kjbyd.mongodb.net/semana09?retryWrites=true&w=majority
/* process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV */
mongoose.connect(process.env.MONGO_URI_PROD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
//mongoose.set('debug', true);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//passport
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);

//Handle errors to log
app.use(
  morgan("combined", {
    skip: (req, res) => res.statusCode < 400,
    interval: "7d",
    stream: logger.stream,
  })
);

// Routes

app.use("/api/users", users);
app.use("/api/clients", clients);
app.use("/api/procedures", procedures);
app.use("/api/services", services);
app.use("/api/consults", consults);
app.use("/api/photos", photos);
app.use("/api/pdf", pdf);

//fazendo com que as imagens fiquem acessiveis
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

//salvando o log!!!
app.use(
  "/logs",
  express.static(path.resolve(__dirname, "..", "logs")),
  serveIndex(path.resolve(__dirname, "..", "logs"), { icons: true })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
  app.get("/", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

//Handle errors to log
app.use(ErrorController);

// process.on uncaught and unhandled exceptions

app.use("/api", (req, res) => {
  return res.send("Server running!!!!");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started at port 8080`);
});
