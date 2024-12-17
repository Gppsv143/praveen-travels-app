const express = require('express');
const router = express.Router();
const BusController = require('../controllers/BusController');

router.get('/', BusController.getBuses);

module.exports = router;
