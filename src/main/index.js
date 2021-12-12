require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("./middlewares/cors");
const contentType = require("./middlewares/content-type");
const { port } = require("./config/env");

const app = express();

app.get("/healthcheck", (req, res) => {
  res.json({
    success: true,
    message: "System up and running",
  });
});

/**
 * TODO: Connect to Database
 * */
// DATABASE CONNECTION

/**
 * Setup
 */
app.disable("x-powered-by");
app.use(express.json());
app.use(cors);
app.use(contentType);

const timeFrameInMinutes = 10;
const timeFrameInMiliseconds = timeFrameInMinutes * 60 * 1000;
const requestsPerMinutes = 100;
const limiter = rateLimit({
  windowMs: timeFrameInMiliseconds,
  max: requestsPerMinutes,
});

app.use(limiter);
app.set("trust proxy", 1);

/**
 * Static Folder
 */
app.use(express.static("public"));

/**
 * Routes
 */
app.use("/login", require("./routes/login-route"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
