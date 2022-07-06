const express = require("express");
const app = express();
const api_router = require("./routes/tasks");
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/v1/tasks', api_router);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}....`)
})