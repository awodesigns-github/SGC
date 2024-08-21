const express = require('express');
const {gpaController} = require("../controllers/gpaController");
const router = express.Router();

router.post('/gpaCalculator', gpaController);

module.exports = router;
