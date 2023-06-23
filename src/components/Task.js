import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todo';
const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewTask = () => {
    const task = inputRef.current.value.trim();
    if (task !== '') {
      dispatch(addTodo(task));
      inputRef.current.value = '';
    }
  };
  return (
    <div>
      <div>
        <input type='text' placeholder='Add task here...' ref={inputRef} />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export default Task;
