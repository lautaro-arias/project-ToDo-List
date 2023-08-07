import React from 'react';
import styles from './MainMenu.module.css';
import { Link } from 'react-router-dom';


const MainMenu: React.FC = () => {
  return (
    <>
        <div className={ styles.nav }>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <img src={ "logo.png" } alt="Logo" width="200" height="65" />
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                      <Link to="/" className="mx-4 navbar-brand justify-content-center" >Dashboard</Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/main" className="mx-4 navbar-brand justify-content-center" >Tareas</Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/calculadora" className="mx-4 navbar-brand justify-content-center">Calculadora</Link>
                      </li>
                    </ul>
                  </div>
              </div>
          </nav>
      </div>
   </>
  )
};

export default MainMenu;