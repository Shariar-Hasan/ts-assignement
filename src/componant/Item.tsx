import React from 'react';

interface ITodo {
    name: string,
    desc: string,
    handleRemove: (name: string) => void
}



const Item = ({ name, desc, handleRemove }: ITodo) => {
    return (
        <div className="card col-md-5 my-3 mx-auto p-2 ">
            <div>
                <p>
                    <strong>User: </strong> {name}
                </p>
                <p>
                    <strong>Todo:</strong> {desc}
                </p>
            </div>
            <button className="btn btn-block btn-primary" onClick={() => handleRemove(name)}>Delete</button>
        </div>
    );
};

export default Item;