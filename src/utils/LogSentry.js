const logger = require("../config/logger");
const dayjs = require("dayjs");

function LogToSentry(error, req) {
  logger.error(
    `${dayjs(Date.now()).format("DD-MM-YYYYTHH:mm")} - ${
      error.status || 500
    } - ${error.error || "Internal Error"} - ${error.toString()}  - ${
      req.originalUrl
    } - ${req.method} - ${req.ip}`
  );
}

module.exports = LogToSentry;
