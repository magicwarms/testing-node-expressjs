/**
 * Required External Modules
 */
const express = require("express");

const router = require("./router/route");

/**
 * Set timezone
 */
process.env.TZ = "Asia/Jakarta";

// define var for current server time
const currentTime =
  new Date().toJSON().slice(0, 10).replace(/-/g, "/") +
  " " +
  new Date(Date.now()).toTimeString();

const PORT = process.env.PORT || 9000;
const app = express();

/**
 *  App Configuration
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", router);

app.get("/", (_req, res) =>
  res.status(200).json({
    success: true,
    data: {},
    message: "Hello Test framework",
  })
);

// handle 500 Any error
app.use((err, _req, res, _next) => {
  return res.status(500).json({
    success: false,
    data: {},
    message: `Error! (${err.message})`,
  });
});

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.info(
    `⚡️[server]: Server is running at http://localhost:${PORT} - ${currentTime}`
  );
});

module.exports = app;
