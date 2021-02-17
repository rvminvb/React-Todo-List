import React from "react";
import logo from "./icons/dump.svg";
import flag from "./icons/flag.svg";

function TodoItem({ id, item, onCheck, onMark }) {

    const liStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: item.priority === 1 ? '#FFCBDB' : "#f1f5f8"
    };

   return (
        <>
        <li style={liStyle}>
            {item.name}  
            <img src={flag} alt="flag" width='25px' onClick={() => {onMark(id)}}/>
            <img src={logo} alt="trash bin" width='25px' onClick={() => {onCheck(id)}}/>
        </li>
        </>
    )
}


export default TodoItem;