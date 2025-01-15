const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


// start listing  app routes

router.get('/', mainController.home); // 
router.get('/about', mainController.about); // create new rout for about page


module.exports = router; // export router