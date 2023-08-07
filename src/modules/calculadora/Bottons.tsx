import  './bottons.css'

interface BottonsProps {
  texto: string;
  clase: string;
  handlerClick?: (event: React.MouseEvent<HTMLDataElement, MouseEvent>) => void; 
}

const Bottons:React.FC<BottonsProps> = ({texto,clase,handlerClick}) => {
  return (
    <>
       <button className={ clase } onClick={ handlerClick } >{ texto }</button>
    </>
  )
}

export default Bottons