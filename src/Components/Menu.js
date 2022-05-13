import React, {Component} from 'react';
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Uno from './Uno'
import Dos from './Dos'
import Tres from './Tres'
import Cuatro from './Cuatro'
import Cinco from './Cinco'
class Menu extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(
            <div className='w-full z-10 fixed h-16 other flex flex-row justify-around'>
                <div className='w-1/4 '>
                    <p>logo</p>
                </div>
               
                <Router className='w-3/4 flex flex-row justify-around'>
                    <div>
                        <nav>
                        <ul>
                            <li>
                            <Link to="/">Inicio</Link>
                            </li>
                            <li>
                            <Link to="/Empresa">Empresa</Link>
                            </li>
                            <li>
                            <Link to="/Vacas">Vacas</Link>
                            </li>
                            <li>
                            <Link to="/Leche">Leche</Link>
                            </li>
                            <li>
                            <Link to="/Contáctenos">Contáctenos</Link>
                            </li>
                        </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Switch>
                        <Route path="/">
                            <Uno />
                        </Route>
                        <Route path="/Empresa">
                            <Dos />
                        </Route>
                        <Route path="/Vacas">
                            <Tres />
                        </Route>
                        <Route path="/Leche">
                            <Cuatro />
                        </Route>
                        <Route path="/Contáctenos">
                            <Cinco />
                        </Route>
                        </Switch>
                    </div>
                    </Router>         
            </div>
        )
    }
}

export default Menu