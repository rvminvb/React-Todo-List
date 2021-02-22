import React from "react";
import logo from "./icons/dump.svg";
import flag from "./icons/flag.svg";
import { Draggable } from 'react-beautiful-dnd';
import './ToDoItem.css'

function TodoItem({ index, item, onCheck, onMark }) {
    return (
        <>
        <Draggable draggableId={item.id} index={index}>
            {provided =>(
        <li className={"item" + (item.priority === 1 ? " priority" : "")} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >  
            {item.name}  
            <img src={flag} alt="flag" width='25px' onClick={() => {onMark(item.id)}}/>
            <img src={logo} alt="trash bin" width='25px' onClick={() => {onCheck(item.id)}}/>
        </li>
            )}
        </Draggable>
        </>
    )
}


export default TodoItem;