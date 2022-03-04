import React from "react";

const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit })=>{

   
    return(
        <div className="card mt-2 p-3">
                <div className="car-body">
                    <h3 className="card-title mt-2 d-inline">
                        {todo.title}
                    </h3>
                    <button onClick={() => todoToogleCompleted(todo.id)}
                    className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success' } m-2`}>
                        
                        { todo.completed ? "Terminado" : "Terminar"}
                        </button>
                    <p className="card-text m-2">
                        {todo.description}
                    </p>
                    <hr></hr>
                    <div className="d-flex justify-content-end">
                            <button 
                            onClick={()=>setTodoEdit(todo)}
                            className="btn btn-sm btn-primary m-1">
                                Editar
                            </button>
                            <button onClick={() => todoDelete(todo.id)}
                            className="btn btn-sm btn-danger m-1">
                                Eliminar
                            </button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Todo;