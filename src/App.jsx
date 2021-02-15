import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import './App.css';

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
          if (input.trim()) {
            setItems(prevData => {
                return [...prevData, input];
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

export default App;