import React from 'react';
import "./styles.css";
import { Todo } from "../todoModel";
import OneToDo from './OneToDo';

interface Props{
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        <OneToDo 
        todo={todo} 
        key={todo.id} 
        todos={todos} 
        setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList