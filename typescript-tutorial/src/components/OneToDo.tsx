import React, { useState } from 'react';
import { Todo } from '../todoModel';
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteSweep, MdOutlineDoneOutline } from 'react-icons/md';
import "./styles.css";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const OneToDo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
        todos.map((todo) =>
        todo.id === id ? {...todo, isDone: !todo.isDone}:todo))
    };

    const handleDelete = (id: number) => {
        setTodos(
        todos.filter((todo) =>
        todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map(
            (todo) => (
                todo.id === id ? 
                {...todo, todo: editTodo} :
                todo
            )
        ));
        setEdit(false);
    }

  return (
    <form className='todos-single' onSubmit={(e) => handleEdit(e, todo.id)}>
        
        {
            edit ? (
                <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos-single--text" />
            ) : (
                todo.isDone ? (
                        <s className='todos-single--text'>{ todo.todo }</s>
                    ) : (
                        <span className='todos-single--text'>{ todo.todo }</span>
                    )
                
            )
        }
        
        <div>
            <span className="icon" 
            onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit);    
                }    
            }}>
                <FiEdit3 />
            </span>
            <span className="icon"  onClick={() => handleDelete(todo.id)}>
                <MdDeleteSweep />
            </span> 
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdOutlineDoneOutline />
            </span>     
        </div>
    </form>
  )
}

export default OneToDo