import React, {Component} from 'react';
import './style.css'
import Vacas from './Vacas'
import Leche from './Leche'
import Terneras from './Terneras'
import Slider from './Slider'
class Tres extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(<div>
           <Slider/>
           <Vacas/>
            <Leche/>
            <Terneras/>
         </div>)
    }
}

export default Tres