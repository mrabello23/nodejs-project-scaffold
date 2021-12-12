const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const apiCache = require("apicache");

router.get("/", apiCache.middleware("5 minutes"), (req, res) => {
  res.json({ success: true });
});

module.exports = router;
