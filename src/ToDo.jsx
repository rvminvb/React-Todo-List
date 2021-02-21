import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import './App.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


function ToDo() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [idCounter, setIdCounter] = useState(1);

    function addItem() {
          if (input.trim()) {
            setItems(prevData => {
                return [...prevData, {name: input, priority: 2, id: '' + idCounter}];
                });
                setIdCounter(prevData => ++prevData);
            setInput("");
        }
    }

  

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item) => {
                return item.id !== id;
            })
        });
    }

    function markAsImportant(id) {
        setItems(prevData =>  {
            return prevData.map((item) => {
                if (item.id === id) {
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
    
    function onDragEnd(result) {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return; 
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newItems= Array.from(items);
        const item = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, ...item);
        console.log(items, newItems);
        setItems(() => newItems);
    };

    return (
        <DragDropContext
        onDragEnd={onDragEnd}>

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
        <Droppable droppableId='text'>
            {provided => (
                <div className="items">
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item, index) => (
                            <TodoItem
                                key={item.id}
                                index={index}
                                item={item}
                                onCheck={removeItem}
                                onMark={markAsImportant}
                            />
                        ))}
                        {provided.placeholder}
                    </ul>
                    {items.length===0 &&
                    <span>Нет задач</span> 
                    }
                </div>
            )}
          </Droppable>
      </div>
      </DragDropContext>
    );
}

export default ToDo;