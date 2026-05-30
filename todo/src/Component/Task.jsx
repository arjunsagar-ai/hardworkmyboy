import { Card } from "./Card";
import { useState } from "react";
import { Input } from "./Input";

const initialTasks = [
    {id:1, text: "This is the first task"},
    {id:2, text: "This is the second task"},
    {id:3, text: "This is the third task"},
    {id:4, text: "This is the fourth task"}
]; //array with multiple objects

export const Tasks = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const addTaskHandler = (newTask) => {
        setTasks((prev)=>{
            return [
                ...prev, 
                {
                    id:Math.random(), 
                    text: newTask,
                },
            ];
        })};

    const deleteTaskHandler = (completedId) => {
        setTasks((prev)=>{
            return prev.filter((task) => task.id !== completedId);
        })
    };
    return(
        <div className="tasks">   
        <h1>Tasks</h1>
        <Input onAddTask={addTaskHandler} />
        {tasks.map((task)=>{
                return <Card key={task.id} text={task.text} id={task.id} onTaskComplete={deleteTaskHandler} />
            })}
        </div>
    );
}   