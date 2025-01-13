const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


// start listing  app routes

router.get('/', mainController.home);


module.exports = router; // export router