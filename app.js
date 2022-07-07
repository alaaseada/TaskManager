const express = require("express");
const app = express();
const api_router = require("./routes/tasks");
const path = require('path');
require("dotenv").config();
const connectToDB = require("./db/connection");
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/api/v1/tasks', api_router);
app.use('*', notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try{
        await connectToDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}....`)
        })
    } catch(err){

    }
}

start();