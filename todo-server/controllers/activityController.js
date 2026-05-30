const Activity = require("../models/activity");

const createActivity =(req,res) =>{
    Activity.create({
    activity_id: req.body.activity_id,
    todo_description: req.body.todo_description
})
.then((activity) => {res.status(201).send(
    "Activity created successfully")})
.catch((err) => {res.status(500).send(err)});
};
const getActivity = () =>{
    Activity.find({}
        .then((data)=>{
            res.json(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        })
    )
};
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
