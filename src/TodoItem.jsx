import React from "react";
import logo from "./icons/dump.svg";
import flag from "./icons/flag.svg";
import { Draggable } from 'react-beautiful-dnd';

function TodoItem({ index, item, onCheck, onMark }) {

    const liStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: item.priority === 1 ? '#FFCBDB' : "#f1f5f8"
    };

   return (
        <>
        <Draggable draggableId={item.id} index={index}>
            {provided =>(
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >  
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