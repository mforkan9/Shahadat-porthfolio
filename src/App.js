import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/LoginPage/Login';

export const ContextUser = createContext()
function App() {
  return (
    <ContextUser.Provider>
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
        
        </Switch>
      </Router>
      
    </ContextUser.Provider>
  );
}

export default App;
