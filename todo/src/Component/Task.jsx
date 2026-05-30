import { Card } from "./Card";
import {  useEffect, useState } from "react";
import { Input } from "./Input";
import axios  from "axios";

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const fetchTasks = async () => {
    try {
        const response = await axios.get("http://localhost:8080");
        setTasks(response.data);
    }
    catch (error){
            console.log(error);
    }
};

useEffect(() => {
    fetchTasks();
},[]);

    const addTaskHandler = async (newTask) => {
        try{
            const body={
                activity_id: Math.random(),
                todo_description: newTask,
            };
           await axios.post("http://localhost:8080/create", body)
           fetchTasks();
        }
        catch{

        }
    };
    const deleteTaskHandler = async (completedId) => {
    try {
        await axios.delete(`http://localhost:8080/${completedId}`);

        setTasks((prev) =>
            prev.filter(
                (task) => task.activity_id !== completedId
            )
        );
    }
    catch(error){
        console.log(error);
    }
};
    return(
        <div className="tasks">   
        <h1>Tasks</h1>
        <Input onAddTask={addTaskHandler} />
        {tasks.map((task)=>{
                return <Card key={task.activity_id} text={task.todo_description} id={task.activity_id} onTaskComplete={deleteTaskHandler} />
            })}
        </div>
    );
}   