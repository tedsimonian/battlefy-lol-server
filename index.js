const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/routes");

require("dotenv").config();

const allowedOrigins = [process.env.CLIENT_ORIGIN, process.env.SERVER_ORIGIN];

const app = express();

const corsOptions = {
  origin: function(origin, callback) {
    // allow requests from whitelisted origins or any REST or server-to-server requests
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      return callback(null, true);
    } else {
      // do not allow access if site isn't apart of allowed origins
      return callback(new Error(`Invalid origin: ${origin}`));
    }
  }
};

app.use(cors(corsOptions));

// api router
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
