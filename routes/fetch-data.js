const express = require("express");
const router = express.Router();

const fetchController = require("../controllers/fetch-data")

router.get("/api/configurations/:id", fetchController.getData);

router.put("/api/configurations/update/:id", fetchController.updateData);


module.exports = router;