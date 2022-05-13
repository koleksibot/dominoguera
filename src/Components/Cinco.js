import React, {Component} from 'react';
import './style.css'
import Contactenos from './Contactenos'
class Cinco extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }

    render(){
        return(<div>
            <Contactenos />
         </div>)
    }
}

export default Cinco 