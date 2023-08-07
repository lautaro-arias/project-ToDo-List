import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from '../modules/tareas/components/Main';
import Calculadora from '../modules/calculadora/Calculadora';
import Dashboard from '../modules/dashboard/Dashboard';

const Urls = () => {
    return (
        <Router>
            <Routes>
            <Route
                path="/"
                element={ <Dashboard /> }
              />
            <Route
                path="/calculadora"
                element={ <Calculadora />}
              />
           <Route
              path="/main"
              element={ <Main />}
            />
            </Routes>

            
        </Router>
    );
};

export default Urls;