const express = require('express');
const path = require('path');
const app = express();
const deleteExpiredData = require('./cleanup');
const cron = require('node-cron');
const env = require('dotenv');
const cors = require('cors');
app.use(cors());
env.config({path: './.env'});
app.use(express.json());
const Database= require('./database/connect');
Database();
const Routes=require("./Routes/routes")
app.use(express.json())
app.use(Routes)
Database().then(()=>{  cron.schedule("*/5 * * * *", () => {
        console.log("Running cleanup job...");
        deleteExpiredData();
    })}
)
app.listen(3000, () => {
       console.log(process.env.DP);
    //    console.log(process.env.USER);
       
    console.log("Server is running on port 3000");
});