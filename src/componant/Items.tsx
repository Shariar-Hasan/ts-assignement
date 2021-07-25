import React, { useState } from 'react';
import Item from './Item';


interface ITodo {
    name: string,
    desc: string
}



const Items = () => {

    const [todo, setTodo] = useState<ITodo>({
        name: '',
        desc: ''
    })
    const [todolist, setTodolist] = useState<ITodo[]>([])


    const handleSubmit = () => {
        if (todo.name && todo.desc) {
            setTodolist([...todolist, todo])
            setTodo({
                name: '',
                desc: ''
            })
        }


    }
    const handleRemove = (name: string) => {
        const newTodolist = todolist.filter(todo => todo.name !== name)
        setTodolist(newTodolist)
    }
    return (
        <div className="container">
            <div className="row w-100">
                <h2 className='text-center'>To Do App</h2>
                <div className="col-md-6 p-0">
                    <input className="form-control" placeholder="Enter your name" type="text" value={todo.name} onChange={(e) => setTodo({ ...todo, name: e.target.value })} />
                </div>
                <div className="col-md-6 p-0">
                    <input className="form-control" placeholder="Enter your desc" type="text" value={todo.desc} onChange={(e) => setTodo({ ...todo, desc: e.target.value })} />
                </div>
                <button className="btn btn-primary w-50 mx-auto btn-block" onClick={handleSubmit}>Add Todo</button>
            </div>
            <div className="row">
                {
                    todolist.map(todo => <Item key={todo.name} name={todo.name} desc={todo.desc} handleRemove={handleRemove}></Item>)
                }
            </div>

        </div>
    );
};

export default Items;