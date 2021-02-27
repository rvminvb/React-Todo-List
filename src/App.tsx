import React from 'react';
import Home from './Home';
import ToDo from './ToDo';
import About from './About';
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';


function App () {
    return (
        
        <HashRouter>
            <div className="App">
                <ul className="header"> 
                    <li><NavLink to='/'>Главная</NavLink> </li>
                    <li><NavLink to='/todo'>Планер</NavLink></li>
                    <li><NavLink to='/about'>О проекте</NavLink></li>
                </ul>
            <Switch> 
                <Route path="/" exact component={Home}/>
                <Route path="/todo" component={ToDo} />
                <Route path="/about" component={About}/>
            </Switch>
            </div>
        </HashRouter>
    );
}



export default App;