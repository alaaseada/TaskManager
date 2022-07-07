// TO BE USED IN THE APP.JS
//==========================

// Because our application has nothing to do if the connection to the database fails 
// We will invoke the function that connect to the database in app.js and start the
// server if and only if the connection to the database works.

const mongoose = require('mongoose');

const connectToDB = (url) => {
    // returns a promise
    mongoose.connect(url)
}

module.exports = connectToDB;
