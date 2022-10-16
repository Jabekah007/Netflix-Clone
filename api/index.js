const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8800
const authRoute = require("./routes/auth")
dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('mongodb is connected successfully!!!')}).catch((err) => console.log(err))
app.use(express.json());
app.use("/api/auth",authRoute)
app.listen(PORT,() =>{
    console.log("Backend server is running")
});
