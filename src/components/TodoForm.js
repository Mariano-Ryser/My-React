import React, { useState }  from "react";

const initialFormValues = {
    title:"",
    description:"",
}

const TodoForm = ({todoAdd}) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const {title, description} = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changedFormValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim() === "") {  //.trim() significa toma como error los espacios en blanco
            setError("Debes indicar un titulo")
            return;
        }
        if(description.trim() === "") {
            setError("Debes indicar un description")
            return;
        }
        
        
        console.log("submit")
        // Agregar tarea
        todoAdd(formValues);
        setFormValues(initialFormValues)
        setSuccessMessage("Agregado con Exito!!")

        setTimeout( ()=> {setSuccessMessage(null)}, 2000)

        setError(null);
    }
    return (
        <div>
            <h1>Nueva Tarea</h1>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                  placeholder="Titulo"
                   className="form-control"
                   value={title}
                   name="title" 
                   onChange={handleInputChange}/>

                   
                <textarea
                 placeholder="Descripcion"
                  className="form-control mt-2"
                  value={description}
                  name="description"
                  onChange={handleInputChange}>
                    
                  </textarea>
                  
                  <button 
                        className="btn btn-primary btn-block mt-2">
                            Agregar Tarea
                        </button>
            </form>
            {
                error && 
                (
                    <div className="alert alert-danger mt-2">
                        { error }
                    </div>
                ) 
                
            }
            {
                successMessage && 
                (
                    <div className="alert alert-success mt-2">
                        { successMessage }
                    </div>
                ) 
                
            }
            
        </div>
    );
}

export default TodoForm