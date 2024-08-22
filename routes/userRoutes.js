const express = require('express');
const {gpaController} = require("../controllers/gpaController");
const router = express.Router();

// Route with endpoint - http://localhost/{PORT}/api/v1/users/gpaCalculator
router.post('/gpaCalculator', gpaController);

module.exports = router;
