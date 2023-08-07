import React from 'react'
import MainMenu from '../menu/MainMenu'
import style  from'./dashboard.module.css'

const Dashboard:React.FC = () => {
  return (
    <div> 
        <MainMenu />
        <div > 
            <div className="container"> 
                    <h1 className={ style.title }>Programer.junior "Hello World!" </h1>
                 </div>
            </div>
        </div>
  )
}

export default Dashboard  