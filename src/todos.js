import React from 'react'

const Todos = ({todos,deletetodofunc,donetodofunc}) => { 

  const todolist = todos.length ? (
      todos.map(todo => {
            return (
                <div key={todo.id}  className="m-2  border ">
                    <input type="checkbox" onChange={() => {donetodofunc(todo.id)}} checked={todo.iscompleted}  />
                   {/* <span className="strikethrough" > {todo.content} </span> */}
                   <span className= {`border ${todo.iscompleted ? "strikethrough" : ""}`}> {todo.content} </span>
                   

                   {/* <span className={`${todo.iscompleted ? "strikethrough" : ""}`} > {todo.content} </span> */}
                   <a onClick={() => {deletetodofunc(todo.id)}} className="btn btn-secondary"> delete </a>
                 </div>
            )
        } )
    ) : (
        <h3>Nothing left</h3>
    ) 

    return (
        <div className="container">
            {todolist}
        </div>

    );
}

export default Todos