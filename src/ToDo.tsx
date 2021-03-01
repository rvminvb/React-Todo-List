import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

export type item = {
    name: string;
    priority: boolean;
    id: string;
};

function ToDo() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState<Array<item>>([]);
    const [idCounter, setIdCounter] = useState(1);

    function addItem() {
        if (input.trim()) {
            setItems(prevData => {
                return [...prevData, { name: input, priority: false, id: '' + idCounter }];
            });
            setIdCounter(counter => ++counter);
            setInput('');
        }
    }

    function removeItem(id: string) {
        setItems(prevData => {
            return prevData.filter(item => {
                return item.id !== id;
            });
        });
    }

    function markAsImportant(id: string) {
        setItems(prevData => prevData.map(item => (item.id === id ? { ...item, priority: !item.priority } : item)));
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items') || '');
        if (items) {
            setItems(items);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        const idCounter = JSON.parse(localStorage.getItem('idCounter') || '');
        if (idCounter) {
            setIdCounter(idCounter);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('idCounter', JSON.stringify(idCounter));
    }, [idCounter]);

    function onKeyPressHandler(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            addItem();
        }
    }

    function onDragEnd(result: DropResult) {
        const { destination, source } = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const newItems = Array.from(items);
        const item = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, ...item);
        setItems(newItems);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='todolist'>
                <div className='heading'>
                    <h1 className='title'>Планер</h1>
                </div>
                <input
                    type='text'
                    value={input}
                    onKeyPress={onKeyPressHandler}
                    onChange={event => {
                        setInput(event.target.value);
                    }}
                />
                <button onClick={addItem}>Добавить</button>
                <Droppable droppableId='text'>
                    {provided => (
                        <div className='items' ref={provided.innerRef} {...provided.droppableProps}>
                            {items.map((item, index) => (
                                <TodoItem key={item.id} index={index} item={item} onCheck={removeItem} onMark={markAsImportant} />
                            ))}
                            {provided.placeholder}
                            {items.length === 0 && <span>Нет задач</span>}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default ToDo;
