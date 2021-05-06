import {React,useState} from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "./Task";

function Tasklist() {
    const [donefilter, setDonefilter] = useState(false)
  const list = useSelector((state) => state.todo.todolist);
  console.log(list);
  return (
    <div>
      <ButtonGroup toggle>
        <ToggleButton type="radio" variant="secondary" checked={donefilter==true} onChange={()=>setDonefilter(true)}>Done</ToggleButton>
        <ToggleButton type="radio" variant="secondary" checked={donefilter==false} onChange={()=>setDonefilter(false)}>notDone</ToggleButton>
      </ButtonGroup>
      {(donefilter)?list.filter(el=>el.isDone===true).map((el) => (
        <Task id={el.id} description={el.description} isDone={el.isDone} />
      )):
      list.filter(el=>el.isDone===false).map((el) => (
        <Task id={el.id} description={el.description} isDone={el.isDone} />
      ))}
    </div>
  );
}

export default Tasklist;
