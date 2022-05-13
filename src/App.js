import React, { useState } from 'react';
import logo from './logo.svg';
import Menu from './Components/Menu'
import Empresa from './Components/Empresa'
import Contactenos from './Components/Contactenos'
import Cuidado from './Components/Cuidado'
import Leche from './Components/Leche'
import Slider from './Components/Slider'
import Terneras from './Components/Terneras'
import Vacas from './Components/Vacas'
import Trabajadores from './Components/Trabajadores'
import Sobre from './Components/Sobre'
import Mejoramiento from './Components/Mejoramiento'
import Genetico from './Components/Genetico'
import Uno from './Components/Uno'
import Dos from './Components/Dos'
import Tres from './Components/Tres'
import Cuatro from './Components/Cuatro'
import Cinco from './Components/Cinco'
import img from './assets/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import Chiquitos from './Components/Chiquitos'
import './Components/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Valores from './Components/Valores';
function App() {
  const [menu, setMenu] = useState(
    false
  );

  const [ other, setOther] = useState(false);
  const [otrino, setOtrino] = useState(false)
  const [navExpanded, setNavExpanded] = useState(false);
  if(otrino === true){
    return(
<Router className='w-full  '>
                    <div>
                      <Navbar className='other linearGrad' expand="lg" variant='dark' fixed='top' 
                expanded={navExpanded}>
                      <div className='w-4 xl:w-12 lg:w-8 md:w-4 sm:w-2 hidden xl:block lg:block sm:block md:block'/>
                        <Navbar.Brand>
                         <img src={img} className='object-fill h-12 xl:h-24 lg:h-20 md:h-16 sm:h-12' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {setOtrino(!otrino); setNavExpanded(!navExpanded);}}/>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={'basic-navbar-nav'}>
                        <li className='nav-item' data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to="/" className='nav-link' onClick={() => {setNavExpanded(false); setOtrino(!otrino)}}>Inicio</Link>
                        </li>
                        <NavDropdown title="Empresa" id="basic-nav-dropdown" data-toggle="dropdown" show={menu} onClick={() => {setMenu(!menu)}}>                          
                          
                          <Link aria-controls="basic-navbar-nav" to="/sobre" className='dropdown-item'  onClick= {() => {
                                setMenu(!menu); setOther(false); setNavExpanded(false); setOtrino(!otrino);
                           }}>Nosotros</Link>
                            <Link to="/Trayectoria" className='dropdown-item' onClick= {() => {
                                setMenu(!menu); setOther(false); setNavExpanded(false); setOtrino(!otrino);
                           }}>Trayectoria</Link>
                            <Link to="/Trabajadores" className='dropdown-item' onClick= {() => {
                                setMenu(!menu); setOther(false); setNavExpanded(false); setOtrino(!otrino);
                           }}>Empleados</Link>
                            <Link to="/Cantidad" className='dropdown-item' onClick= {() => {
                                setMenu(!menu); setOther(false); setNavExpanded(false); setOtrino(!otrino);
                           }}>Animales <br></br>y Producción</Link>
                            <Link to="/Valores" className='dropdown-item' onClick= {() => {
                                setMenu(!menu); setOther(false); setNavExpanded(false); setOtrino(!otrino);
                           }}>Valores</Link>
                          
                        </NavDropdown>
                        <NavDropdown title="Vacas" id="basic-nav-dropdown" show={other} onClick={()=> {setOther(!other);}}>    
                            <Link to='/Vacas' className='dropdown-item' onClick={()=> {setOther(!other); setMenu(false); setNavExpanded(false); setOtrino(!otrino);}}>Genetica de vacas </Link>
                            <Link to="/Terneras" className='dropdown-item' onClick={()=> {setOther(!other); setMenu(false); setNavExpanded(false); setOtrino(!otrino);}}>Terneras</Link>
                            <Link to="/Cuidado" className='dropdown-item' onClick={()=> {setOther(!other); setMenu(false); setNavExpanded(false); setOtrino(!otrino);}}>Cuidado de animales</Link>
                        </NavDropdown>
                            <li className='nav-item'>
                            <Link to="/Leche" className='nav-link' onClick={() => {setNavExpanded(false); setOtrino(!otrino);}}>Leche</Link>
                            </li>
                            <li className='nav-item'>
                            <Link to="/Contáctenos" className='nav-link' onClick={() => {setNavExpanded(false); setOtrino(!otrino);}}>Contáctenos</Link>
                            </li>
                            <div className='w-16'/>
                            
                        </Nav>
                        </Navbar.Collapse>
                      </Navbar>

                     

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Switch>
                        <Route path exact ="/" component={Uno} />
                        <Route path="/Empresa" component={Dos} />
                        <Route path='/Trayectoria' component={Mejoramiento} />
                        <Route path='/sobre' component={Sobre} />
                        <Route path="/Vacas" component={Vacas} />
                        <Route path="/Leche" component={Cuatro} />
                        <Route path="/Contáctenos" component={Cinco}/>
                        <Route path='/Trabajadores' component={Trabajadores}/>
                        <Route path="/Valores" component={Valores}/>
                        <Route path='/Genetica' component={Genetico} />
                        <Route path='/Terneras' component={Terneras} />
                        <Route path='/Cuidado' component={Cuidado} />
                        <Route path='/Cantidad' component={Chiquitos} />
                        </Switch>
                    </div>
                    </Router>     
  );
  }
  if(otrino === false){
    return(<Router className='w-full  '>
    <div>
      <Navbar className='other' expand="lg" variant='dark' fixed='top' expanded={navExpanded}>
      <div className='w-4 xl:w-12 lg:w-8 md:w-4 sm:w-2  xl:block lg:block sm:block md:block'/>
        <Navbar.Brand>
         <img src={img} className='object-fill h-12 xl:h-24 lg:h-20 md:h-16 sm:h-12' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {setOtrino(!otrino); setNavExpanded(!navExpanded);}}/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={'basic-navbar-nav'}>
        <li className='nav-item'>
            <Link to="/" className='nav-link' onClick={() => {setOtrino(!otrino); setNavExpanded(!navExpanded)}}>Inicio</Link>
        </li>
        <NavDropdown title="Empresa" id="basic-nav-dropdown" data-toggle="dropdown" show={menu} onClick={() => {setMenu(!menu)}}>                          
          
          <Link to="/sobre" className='dropdown-item' onClick= {() => {
                setMenu(!menu); setOther(false); setOtrino(!otrino); setNavExpanded(!navExpanded);
           }}>Nosotros</Link>
            <Link to="/Trayectoria" className='dropdown-item' onClick= {() => {
                setMenu(!menu); setOther(false); setOtrino(!otrino); setNavExpanded(!navExpanded);
           }}>Trayectoria</Link>
            <Link to="/Trabajadores" className='dropdown-item' onClick= {() => {
                setMenu(!menu); setOther(false); setOtrino(!otrino); setNavExpanded(!navExpanded);
           }}>Empleados</Link>
            <Link to="/Cantidad" className='dropdown-item' onClick= {() => {
                setMenu(!menu); setOther(false); setOtrino(!otrino); setNavExpanded(!navExpanded);
           }}>Animales <br></br>y Producción</Link>
            <Link to="/Valores" className='dropdown-item' onClick= {() => {
                setMenu(!menu); setOther(false); setOtrino(!otrino); setNavExpanded(!navExpanded);
           }}>Valores</Link>
          
        </NavDropdown>
        <NavDropdown title="Vacas" id="basic-nav-dropdown" show={other} onClick={()=> {setOther(!other); setMenu(false);}}>    
            <Link to='/Vacas' className='dropdown-item' onClick={()=> {setOther(!other); setMenu(false);}}>Genética de vacas </Link>
            <Link to="/Terneras" className='dropdown-item' onClick={()=> {setOther(!other); setMenu(false);}}>Terneras</Link>
            <Link to="/Cuidado" className='dropdown-item' onClick={()=> {setOther(!other); setMenu(false);}}>Cuidado de animales</Link>
        </NavDropdown>
            <li className='nav-item'>
            <Link to="/Leche" className='nav-link' onClick={()=> {setNavExpanded(!navExpanded); setOtrino(!otrino)}}>Leche</Link>
            </li>
            <li className='nav-item'>
            <Link to="/Contáctenos" className='nav-link' onClick={()=> {setNavExpanded(!navExpanded); setOtrino(!otrino)}}>Contáctenos</Link>
            </li>
            <div className='w-16'/>
            
        </Nav>
        </Navbar.Collapse>
      </Navbar>

     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path exact ="/" component={Uno} />
        <Route path="/Empresa" component={Dos} />
        <Route path='/Trayectoria' component={Mejoramiento} />
        <Route path='/sobre' component={Sobre} />
        <Route path="/Vacas" component={Vacas} />
        <Route path="/Leche" component={Cuatro} />
        <Route path="/Contáctenos" component={Cinco}/>
        <Route path='/Trabajadores' component={Trabajadores}/>
        <Route path="/Valores" component={Valores}/>
        <Route path='/Genetica' component={Genetico} />
        <Route path='/Terneras' component={Terneras} />
        <Route path='/Cuidado' component={Cuidado} />
        <Route path='/Cantidad' component={Chiquitos} />
        </Switch>
    </div>
    </Router>     
);
  }
  
    
            
                
}

export default App;
