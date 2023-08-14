import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from '../modules/tareas/components/Main';
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
              path="/main"
              element={ <Main />}
            />
            </Routes>

            
        </Router>
    );
};

export default Urls;