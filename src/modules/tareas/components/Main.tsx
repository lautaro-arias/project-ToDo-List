
import Form from '../../tareas/components/Form';
import Tareas from '../../tareas/components/Tareas';
import MainMenu from '../../menu/MainMenu';
import MainHandlers from '../handlers/MainHandlers';

import '../styles/tareas.css'

const Main = () => {

  const{
    tarea, 
    listadoTareas, 
    nombre,
    handleSubmit,
    handleChangeTarea,
    handleChangeNombre,
    onActualizarTarea,
    onBorrarTarea,

  } = MainHandlers()

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