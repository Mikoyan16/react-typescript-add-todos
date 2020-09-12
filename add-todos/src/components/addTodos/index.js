import React, {useState, useEffect} from 'react';
import './index.css';

export const addTodos = (props) => {
    let [todo, setTodo] = useState('');
    let [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))||[]);
    let [remainingTodos, setRemainingTodos] = useState(todos.length);
    const fillTodos = (todo) => {
        if(todo !== ''){
            setTodos([...todos, { text: todo, completed: false }]);
            setTodo('');
        }
    };
    const toggleTodos = (index)=> {
        let updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };
    useEffect(() => {
        setRemainingTodos(todos.filter(todo=>{return !todo.completed}).length);
        localStorage.setItem('todos', JSON.stringify(todos));
        return () => {
            setRemainingTodos(0);
        }
    }, [todos]);
    return (
        <div className='section-add-todos'>
            <div className='section-add-todo'>
                <input className='input-add-todo' type='text' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                <input className='button-add-todo' type='button' value='Add Todo' onClick={()=>{fillTodos(todo)}}/>
            </div>
            <div className='section-todos-label'>
                {todos.length>0 && <div className='label-todos-counter'>Total todos remaining: {remainingTodos} out of {todos.length}.</div>}
            </div>
            <div className='section-todos'>
                <ul className='list-todos'>
                    {todos.map((todo, index)=>{
                        return (
                        <li key={index} className='list-item-todo' onClick={()=>{toggleTodos(index);}} style={{cursor: 'pointer', textDecoration: todos[index].completed ? 'line-through' : ''}}>{todo.text}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}