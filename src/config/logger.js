const winston = require("winston");
const path = require("path");
const SentryTransport = require("@synapsestudios/winston-sentry");
const Sentry = require("@sentry/node");

Sentry.init({ dsn: process.env.SENTRY_DSN });

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;

    return `${timestamp} [${level}]: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ""
    }`;
  })
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: formatter,
      handleExceptions: true,
      json: true,
      colorize: true,
    }),
    new winston.transports.File({
      level: "error",
      filename: path.join(__dirname, "..", "..", "logs", "access.log"),
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      colorize: true,
    }),
    new SentryTransport({ Sentry }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: (info) => {
    logger.info(info);
  },
};

module.exports = logger;
