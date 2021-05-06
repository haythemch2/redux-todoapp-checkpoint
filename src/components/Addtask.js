import React from "react";
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch } from 'react-redux'
import {addTask} from '../redux/TodoSlice'

function Addtask() {
    const [newTask,setNewtask]=useState('');
    const dispatch=useDispatch();
    const onSubmit = (evt) => {
      if (!newTask) {
        alert("Please add a task description.");
        return;
      }
      dispatch(addTask({id:Math.random(),description:newTask,isDone:false}));
      setNewtask("");
    };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="task." value={newTask} onChange={e=>setNewtask(e.target.value)} />
          <Button onClick={onSubmit}>Add</Button>
        </Form.Group>
      </Form>
    </div>
  );
}




export default Addtask
