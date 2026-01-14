const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DP_URL)
        console.log(process.env.DB_URL);
        console.log(process.env.USER);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
};

module.exports = connectDB;
