const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const {createActivity, getActivity ,deleteActivity} = require("./controllers/activityController");

const mongo_url = "your_mongodb_connection_string_here";
mongoose.connect(mongo_url).then(()=>
    console.log("Connected to MongoDB")).catch((err) => console.log("Unable to connect to MongoDB"));

app.post("/create", createActivity);
app.get("/", getActivity);  
app.delete("/:id", deleteActivity);

app.listen(8080,() =>{
    console.log("Server is listening at port 8080");
});
