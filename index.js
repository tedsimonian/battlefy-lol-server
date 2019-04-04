const express = require("express");
const cors = require("cors");

require("dotenv").config();

const allowedOrigins = [process.env.CLIENT_ORIGIN, process.env.SERVER_ORIGIN];

const app = express();

app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      if (!origin) {
        return callback(null, true);
      }
      // do not allow access if site isn't apart of allowed origins
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error(`Invalid origin: ${origin}`), false);
      }

      return callback(null, true);
    }
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
