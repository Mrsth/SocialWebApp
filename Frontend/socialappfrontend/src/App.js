import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {browserHistory} from 'react-router';

//---------------COMPONENTS IMPORTING STARTS HERE---------------------
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

import Demo from './AntComponents/Ant_Login'
import AntDash from './AntComponents/Ant_Dashboard'
import AntHome from './AntComponents/Ant_Home'
import AntRegister from './AntComponents/Ant_Register'

//---------------COMPONENTS IMPORTING ENDS HERE ---------------------


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          
          <Switch>
            <Route exact path='/login' to="login" component={Login}/>
            <Route exact path='/home' to="home" component={Home}/>
            <Route exact path='/reg' to="reg" component={Register}/>
            <Route exact path='/antlogin' to="antlogin" component={Demo}/>
            <Route exact path='/antdash' to="antdash" component={AntDash}/>
            <Route exact path='/anthome' to="anthome" component={AntHome}/>
            <Route exact path='/antreg' to="antreg" component={AntRegister}/>
          </Switch>
        </BrowserRouter>
      </div>

  );
}

export default App;
