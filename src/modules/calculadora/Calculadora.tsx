import React,{useState} from 'react'

import MainMenu from '../menu/MainMenu'
import Bottons from './Bottons'
import styles from './Calculadora.module.css'


const Calculadora:React.FC = () => {

  const[data,setData] = useState({operacion:'',resultado:''})

  const touch = (event: React.MouseEvent<HTMLDataElement, MouseEvent>) => {
    const valor = event.currentTarget.innerText 
    const esOperacion = valor === '+'||valor === '-'||valor === '+'||valor === '/'||valor === '+/-'||valor === '%'

    if( data.operacion.length >= 10 ) return
    if(valor === '+/-' && data.operacion === '')return
    if(valor === '%' && data.operacion.includes('%')) return

    if (data.operacion.includes('Error sintaxis')){
      setData({...data,operacion:valor})
    } else if (data.resultado !== '' && data.operacion === '' && esOperacion){
      setData({...data,operacion:`${data.resultado}` +  valor})
    } else if (valor === '+/-' && data.operacion !== '') {

      if (data.operacion.slice(0,1) === '-') {
        setData({ ...data,operacion: `${data.operacion.slice(1,data.operacion.length)}`})
      } else{
        setData({...data,operacion: `-${data.operacion}`})
      }
    } else {
      setData({...data,operacion:`${data.operacion}`+ valor})
    }

  }


  const eliminar = ( ) => {
    setData({ ...data,operacion:data.operacion.slice(0,data.operacion.length -1 )})
  }

  const limpiar = () => {
    setData({ operacion:'',resultado:''})
  }
  const resultado = () => { 

    try {
      let resultado = ''

      if(data.operacion.includes('%')){
        const valores = data.operacion.split('%')
        resultado = eval(`${valores[1]}*(${valores[0]}/100)`)
      } else {
        resultado = eval(data.operacion)
      }

      setData({...data,resultado,operacion:''})
    } catch (error) {
    setData({...data,operacion:'Error sintaxis'})
      
    }
  }

  return (
    <>
      <MainMenu />
      <div className={ styles.main }> 
            <div className={styles.calculadora}>
                <span className={ styles.resultado }>{ data.resultado }</span>
                <span className={ styles.display } >{ data.operacion }</span>
                <Bottons texto="C" clase="gris"handlerClick={ limpiar }/>
                <Bottons texto="+/-" clase="gris" handlerClick={ touch }/>
                <Bottons texto="%" clase="gris" handlerClick={ touch }/>
                <Bottons texto="/" clase="operation"handlerClick={ touch }/>
                <Bottons texto="7" clase="numero"handlerClick={ touch }/>
                <Bottons texto="8" clase="numero"handlerClick={ touch }/>
                <Bottons texto="9" clase="numero"handlerClick={ touch }/>
                <Bottons texto="*" clase="operation"handlerClick={ touch }/>
                <Bottons texto="4" clase="numero"handlerClick={ touch }/>
                <Bottons texto="5" clase="numero"handlerClick={ touch }/>
                <Bottons texto="6" clase="numero"handlerClick={ touch }/>
                <Bottons texto="-" clase="operation"handlerClick={ touch }/>
                <Bottons texto="1" clase="numero"handlerClick={ touch }/>
                <Bottons texto="2" clase="numero"handlerClick={ touch }/>
                <Bottons texto="3" clase="numero"handlerClick={ touch }/>
                <Bottons texto="+" clase="operation"handlerClick={ touch }/>
                <Bottons texto="." clase="numero" handlerClick={ touch }/>
                <Bottons texto="0" clase="numero" handlerClick={ touch }/>
                <Bottons texto="<=" clase="numero"handlerClick={ eliminar }/>
                <Bottons texto="=" clase="operation"handlerClick={ resultado }/>
            </div>
      </div>
   </>

  )
}

export default Calculadora