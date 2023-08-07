import  { ChangeEvent, FormEvent } from 'react';

type FormProps = {
  tarea: string;
  nombre: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChangeTarea: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeNombre: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ tarea, nombre, handleSubmit, handleChangeTarea, handleChangeNombre, }: FormProps) =>  {
  return (

     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5 " id="staticBackdropLabel">Tarea</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <form className="bg-white"onSubmit={ handleSubmit }> 
                  <div className="modal-body bg-white">
                  <div className="input-group input-group-sm mb-3 ">
                      <div className="input-group mb-3 ">
                            <input placeholder="Titulo" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"
                            type="text" 
                            name="nombre"
                            className="form-control border border-primary"
                            onChange={ handleChangeNombre} 
                            value={ nombre }  
                            />
                          </div>
                       <div className="input-group mb-3">
                            <input type="text"  placeholder="Descripcion" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"
                            name="tarea"
                            className="form-control border border-primary"
                            onChange={ handleChangeTarea }
                            value={ tarea }
                            />
                          </div>
                      </div>
                  </div>
                    <div className="modal-footer bg-white">
                        <button type="button" className="close-button" data-bs-dismiss="modal">Cerrar</button>
                        <button className="guardar-button" 
                                type="submit" 
                                value="AGREGAR"
                                id="button-addon2"
                                data-bs-dismiss="modal">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form