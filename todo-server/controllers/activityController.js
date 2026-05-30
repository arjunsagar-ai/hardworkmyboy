const Activity = require("../models/activity");

const createActivity = (req, res) => {
    Activity.insertMany(req.body)
        .then(() => {
            res.status(201).send("Activities created successfully");
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
const getActivity = (req,res)=>{
    Activity.find()
    .then((data)=>{res.json(data)})
    .catch((error)=>{res.send(error)})
}
const deleteActivity = (req,res) =>{
    Activity.findOneAndDelete({
        activity_id: req.params.id
    })
    .then((data)=>{
        res.send("Deleted Successfully")
    })
    .catch((error)=>{
        res.send(error)
    })
}

module.exports = { createActivity, getActivity, deleteActivity}; 
