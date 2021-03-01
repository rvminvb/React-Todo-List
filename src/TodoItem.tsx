import React from 'react';
import logo from './icons/dump.svg';
import flag from './icons/flag.svg';
import flagFill from './icons/flag-fill.svg';
import { Draggable } from 'react-beautiful-dnd';
import './ToDoItem.css';
import { item } from './ToDo';

type functionProps = {
    index: number;
    item: item;
    onCheck(id: string): void;
    onMark(id: string): void;
};

function TodoItem({ index, item, onCheck, onMark }: functionProps) {
    return (
        <>
            <Draggable draggableId={item.id} index={index}>
                {provided => (
                    <div className='item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {item.name}
                        <div className='actions-group'>
                            <img
                                src={item.priority ? flagFill : flag}
                                alt='flag'
                                width='25px'
                                onClick={() => {
                                    onMark(item.id);
                                }}
                            />
                            <img
                                src={logo}
                                alt='trash bin'
                                width='25px'
                                onClick={() => {
                                    onCheck(item.id);
                                }}
                            />
                        </div>
                    </div>
                )}
            </Draggable>
        </>
    );
}

export default TodoItem;
