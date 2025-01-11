require('dotenv').config();
 
// create express server
const express = require('express');
// allows to create reusable layouts for app
// so dont have to copy and paste pages all of the time
const expressLayouts = require('express-ejs-layouts');

// create new express application
const app = express();
// create PORT app will be running on
const port = 9000 || process.env.PORT;