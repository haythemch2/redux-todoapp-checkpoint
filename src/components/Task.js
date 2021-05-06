import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/TodoSlice";
import { doneTask } from "../redux/TodoSlice";
import { editTask } from "../redux/TodoSlice";

function Task({ id, description, isDone }) {
  console.log(id);
  const dispatch = useDispatch();

  const deltask = () => {
    dispatch(deleteTask({ id }));
  };
  const dontask = () => {
    dispatch(doneTask({ id, isDone: !isDone }));
  };
  const edtask = () => {
    var descriptionalert = prompt("Please enter new Task", "write here!");
    dispatch(editTask({id,description:descriptionalert}))
  };
  return (
    <div>
      <h1>{description}</h1>
      {isDone ? <p>done</p> : <p>not done</p>}
      <Button onClick={deltask}>delete</Button>
      <Button onClick={dontask}>done</Button>
      <Button onClick={edtask}>edit</Button>
    </div>
  );
}

export default Task;
