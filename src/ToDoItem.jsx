import React from 'react';
import "./todoItem.css"

const ToDoItem = (props)=>{
    return (
        <div className = "listItemStyle">
            <i className="fa fa-times" onClick = {()=> {
                props.onSelect(props.id)
                }
            }></i>
            <li>{props.text}</li>
        </div>
        );
}

export default ToDoItem;