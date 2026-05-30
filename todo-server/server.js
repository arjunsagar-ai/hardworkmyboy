const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const {createActivity} = require("./controllers/activityController");
const mongoose = require("mongoose");

const mongo_url = "your mongodb connection string here";
mongoose.connect(mongo_url).then(()=>
    console.log("Connected to MongoDB")).catch((err) => console.log("Unable to connect to MongoDB"));

app.post("/create", createActivity);
app.get("/");

app.listen(8080,() =>{
    console.log("Server is listening at port 8080");
});
