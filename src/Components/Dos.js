import React, {Component} from 'react';
import './style.css'
import Slider from './Slider'
import Mejoramiento from './Mejoramiento'
import Sobre from './Sobre';
import Valores from './Valores'
import Trabajadores from './Trabajadores'
class Dos extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    //falta hacer el de empleados, número de animales y valores de la empresa.
    render(){
        return(<div>
            <Slider />
            <Sobre />
            <Mejoramiento/>
            <Valores/>
            <Trabajadores/>
         </div>)
    }
}

export default Dos 