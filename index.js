const express = require('express');
const path = require('path');
const app = express();
const env = require('dotenv');
env.config({path: './.env'});
app.use(express.json());
const Database= require('./database/connect');
Database();
const Routes=require("./Routes/routes")
app.use(express.json())
app.use(Routes)
app.listen(3000, () => {
       console.log(process.env.DP);
       console.log(process.env.USER);
       
    console.log("Server is running on port 3000");
});