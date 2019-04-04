const express = require("express");
const cors = require("cors");

const allowedOrigins = ["http://localhost:3000", "http://localhost:5000"];

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
        return callback(null, false);
      }

      return callback(null, true);
    }
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
