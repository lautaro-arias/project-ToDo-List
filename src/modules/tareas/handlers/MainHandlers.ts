import  { ChangeEvent, FormEvent, useState } from 'react';

type Tarea = {
    id: number;
    tarea: string;
    completado: boolean;
    nombre:string
  };


  const MainHandlers= () => {

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

 


 return{
    tarea, 
    setTarea,
    listadoTareas, 
    setListadoTareas,
    nombre,
    setNombre,
    handleSubmit,
    handleChangeTarea,
    handleChangeNombre,
    onActualizarTarea,
    onBorrarTarea,

    



 }


}

export default MainHandlers