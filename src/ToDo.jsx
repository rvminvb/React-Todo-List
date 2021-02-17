import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import './App.css';

function ToDo() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
          if (input.trim()) {
            setItems(prevData => {
                return [...prevData, {name: input, priority: 2}];
                });
            
            setInput("");
        }
    }

  

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    function markAsImportant(id) {
        setItems(prevData =>  {
            return prevData.map((item, index) => {
                if (index === id) {
                item.priority = 1;
                } 
                return item;
            })
        });       
    }

    function onKeyPressHandler(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    }
    
  
    return (
      <div className="todolist">
          <div className="heading">
              <h1 className="title">Планер</h1>
          </div>
              <input
                  type="text"
                  value={input}
                  onKeyPress={onKeyPressHandler}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <button onClick={addItem}>Добавить</button>

          <div className="items">
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                        onMark={markAsImportant}
                    />
                ))}
            </ul>
            {items.length===0 &&
            <span>Нет задач</span> 
            }
          </div>
      </div>
    );
}

export default ToDo;