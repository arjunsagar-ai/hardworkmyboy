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

module.exports = { createActivity, getActivity };
