import React, {Component} from 'react';
import './style.css'
import Leche from './Leche'
import Slider from './Slider'
import SistemaOrdeno from './SistemaOrdeno'
class Cuatro extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){ //en leche falta hacer sistema de ordeño.
        return(<div>
        
        
            <SistemaOrdeno/>
         </div>)
    }
}

export default Cuatro