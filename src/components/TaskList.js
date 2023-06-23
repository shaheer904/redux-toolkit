import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todo';
const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <div>
        <h3>Your tasks:</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleDelete(task.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
