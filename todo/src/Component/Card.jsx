export const Card = (props) => {
    const handleComplete = () => {
        props.onTaskComplete(props.id);//call the function passed from Task.jsx and pass the id of the task to be deleted
    };
    return(
        <div className="card">
            <p>{props.text}</p>
            <button onClick={handleComplete}>Complete</button>
        </div>
    );

}