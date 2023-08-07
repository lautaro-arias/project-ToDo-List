import  { ChangeEvent, FormEvent, useState } from 'react';

import Form from '../../tareas/components/Form';
import Tareas from '../../tareas/components/Tareas';
import MainMenu from '../../menu/MainMenu';
import './tareas.css'

type Tarea = {
  id: number;
  tarea: string;
  completado: boolean;
  nombre:string
};

function Main() {

  const [tarea, setTarea] = useState('');
  const [listadoTareas, setListadoTareas] = useState<Tarea[]>([]);
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (tarea === '') {
      alert('Ingresa una tarea por favor');
      return;
    }

    const nuevaTarea: Tarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false,
      nombre:nombre,
    }

    const temp = [nuevaTarea, ...listadoTareas];
    setListadoTareas(temp);
    setTarea('');

    console.log(listadoTareas);
  };

  const handleChangeTarea = (e: ChangeEvent<HTMLInputElement>) => {
    setTarea(e.target.value);
    console.log(tarea);
  };

  const handleChangeNombre = (e: ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
    console.log(nombre);
  };


  const onActualizarTarea = (objEditarTarea: Tarea) => {
    const { id, tarea } = objEditarTarea;
    const temp = listadoTareas.map((item) =>
      item.id === id ? { ...item, tarea: tarea } : item
    );

    setListadoTareas(temp);

  };


  const onBorrarTarea = (id: number) => {
    const temp = listadoTareas.filter(item => item.id !== id);
    setListadoTareas(temp);
  };

  return (
    <div >
        <MainMenu />
      <div className="row m-4">
        <div className="col-md-6">
        <button type="button" className=" agregar-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Tarea
        </button>
          <Form
            nombre={ nombre }
            tarea={ tarea }
            handleSubmit={ handleSubmit }
            handleChangeNombre={ handleChangeNombre }
            handleChangeTarea={ handleChangeTarea }
          />
        </div>
      </div>
      <div>
        { listadoTareas.map((tarea) => (
          <Tareas
            key={ tarea.id } 
            tarea={ tarea }
            onActualizarTarea={ onActualizarTarea }
            onBorrarTarea={ onBorrarTarea }
          />
        ))}
      </div>
    </div>
  );
}

export default Main;