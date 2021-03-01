import React from 'react';
import ToDo from './ToDo';
import About from './About';
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <div className='App'>
                <ul className='header'>
                    <li>
                        <NavLink to='/'>Планер</NavLink>{' '}
                    </li>
                    <li>
                        <NavLink to='/about'>О проекте</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={ToDo} />
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
