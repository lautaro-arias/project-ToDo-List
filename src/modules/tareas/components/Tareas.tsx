import React, { ChangeEvent, useState } from 'react';

type TareaProps = {
  tarea: { id: number; tarea: string; completado: boolean; nombre: string };
  onActualizarTarea: (objEditarTarea: { id: number; tarea: string; completado: boolean; nombre: string }) => void;
  onBorrarTarea: (id: number) => void;
};

const Tareas = ({ tarea, onActualizarTarea, onBorrarTarea }: TareaProps) => {
  
  const [edit, setEdit] = useState(false);
  const [valor, setValor] = useState(tarea.tarea);
  const [completada, setCompletada] = useState(false);
  const [nombre, setNombre] = useState(tarea.nombre);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'tarea') {
      setValor(value);
    } else if (name === 'nombre') {
      setNombre(value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onActualizarTarea({
      id: tarea.id,
      tarea: valor,
      completado: tarea.completado,
      nombre: nombre,
    });
    setEdit(false);
  };

  const ModoEdicionActivado = () => {

    return(
      <> 
           <div className="list-group mb-2 tarea">
                <div className="justify-content-between mb-2">
                  <h5 className="mb-1 p-2 fw-bold modal-header rounded-top ">{ nombre }</h5>
                  <input
                      className='form-control mt-2 '
                      name="nombre" 
                      type="text"
                      value={ nombre }
                      onChange={(e) => handleChange(e)}
                    />
                  <input
                  className='form-control mt-2'
                    name="tarea"
                    type="text"
                    value={ valor } 
                    onChange={(e) => handleChange(e)}
                    />
                <div className=" mx-1 mt-4 text-end"> 
                    <button
                      className="guardar-button  mt-2 mx-1" data-bs-dismiss="list" onClick={(e) => handleClick(e)} >
                        Guardar
                    </button> 
                    <button
                      className="delete-button  mt-2 mx-1"onClick={() => onBorrarTarea(tarea.id)} >
                        Borrar
                    </button>  
                </div>
             </div>
         </div>
      </>
    )

  }


  const ModoEdicionDesactivado = () => {
    return(
      <>
         <div className="list-group mb-4 tarea">
                <div className="justify-content-between mb-2 ">
                  <h5 className="mb-1 pb-2 fw-bold modal-header rounded-top p-2">{ nombre} </h5>
                <input
                  type="checkbox"
                  className={completada ? 'todoTarea spanSubrayada' : 'todoTarea'}
                  onClick={() => setCompletada(!completada)}
                  /> <span className={completada ? 'spanSubrayada' : ''}>{ tarea.tarea } </span>
               </div>
              <div className=" mx-1 mt-4 text-end p-3"> 
                <button className="actualizar-button mt-2 mx-1" onClick={() => setEdit(true)}>Actualizar</button>
                <button className="delete-button  mt-2 mx-2" onClick={() => onBorrarTarea(tarea.id)}>Borrar</button> 
              </div>    
         </div>
         
        
      </>
    )

  }

  return (
         <div className="container " id={ tarea.id.toString() }>
            {
              edit
              ? ModoEdicionActivado()
              : ModoEdicionDesactivado()
            }
         </div>
  );
}

export default Tareas;