import { useState, useEffect } from "react";
export const Input = (props) => {
    const [enteredValue,setEnteredValue] = useState(""); //no initial value for input so we pass empty string
    const [isValid,setIsValid] = useState(true);

    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    };
    const handleSumbit = (event) =>{
        event.preventDefault();
        props.onAddTask(enteredValue);
        setEnteredValue("");
    };
    console.log(enteredValue);
        useEffect(()=>{
            if(enteredValue.trim().length > 3){
                setIsValid(true);
            }else{
                setIsValid(false);
            }
        },[enteredValue]);
        return(
        <form onSubmit={handleSumbit}>
            <input value={enteredValue} placeholder="Enter Your Task" onChange={handleChange} />
            <button disabled={!isValid } className="add-task-button">Create</button>
        </form>
    );
};