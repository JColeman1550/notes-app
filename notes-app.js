
// securely stores sensitive info like API keys etc. 
require('dotenv').config();
 
// create express server
const express = require('express');

// imports express-ejs-layoutys module
// allows us to create reusable layouts for app
// so dont have to copy and paste  html structure across all pages
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const session = require('express-session');// store sessions in DB, user kept logged in
const passport = require('passport');
const MongoStore = require('connect-mongo');


// create new express application, creates instance of express app, works as our web server
const app = express();
// create PORT app will be running on, reverts tp 9000 if process.env is undefined
const port = 9000 || process.env.PORT;

app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}));


// initialize passport
app.use(passport.initialize());
app.use(passport.session());

/////////////////////1/11/25//////////////////////////
// add middlewares
// middleware = function runs requests and responses back and forth, modifies reqs and res, handles authentication, logging, errors, 
app.use(express.urlencoded({extended: true})); // tells app to use express.urlencoded middleware
app.use(express.json()); // tells app to use express.json middleware

// connect to DB
connectDB();

// create static files
app.use(express.static('public')); // link files inside html documents or ejs, link images/styles

// templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main'); 
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/auth')); // authentication route
app.use('/', require('./server/routes/index')); // goes to main route
app.use('/', require('./server/routes/dashboard')); // dashboard route

// handle 404
app.get('*', function(req,res){
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})