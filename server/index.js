const express = require("express");
const bodyParser=require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const db=require("./dbconnections")
dotenv.config();
const router=require("./routers")
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up CORS middleware
app.use(cors({ origin: '*' }));

app.use("/",router)
//app.use(express.static('uploads'));

app.listen(port,()=>{
    console.log(`${port} running`)
})