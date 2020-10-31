import React, { useState } from 'react';
import './app.css';
import ToDoItem from './ToDoItem';


const App = () =>{
    const [itemValue,getItemValue] = useState("");
    const [value,setItemValue] = useState([]);

    const getItem = (e) =>{
        getItemValue(e.target.value);
    }

    const addItem = ()=>{
        setItemValue((oldItems)=>{
            return[...oldItems,itemValue];
        })
        getItemValue("");
    }

    const deleteItem = (id) =>{
        setItemValue((oldItems)=>{
            return oldItems.filter( (delItem, delItemId)=>{
                return delItemId !== id
            })
        })
    }



    return(
        <div className = "container">
            <div className = "box">
                <h1>ToDo List</h1>
                <div className = "input">
                    <input type = "text" placeholder ="Enter an Item" value = {itemValue} onChange = {getItem} />

                    <button onClick = {addItem}><span className="add">+</span></button>
                </div>

                <ul className="listItem">
                    {
                        value.map((addedItem, index)=>{
                           return <ToDoItem text = {addedItem}
                            id ={index}
                            key = {index}
                            onSelect = {deleteItem}
                           />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;
