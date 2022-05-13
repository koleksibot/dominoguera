import React, {Component} from 'react';
import './style.css'
import Slider from './Slider'
import Empresa from './Empresa'
import img from '../assets/HOME/EMPRESA/Vaca_1.png'
import footer from '../assets/HOME/FOOTER/Vaca_3.png'
import Genetico from './Genetico'
import Produccion from './Produccion'
import NuestraRep from './NuestraRep'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Uno extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(<div>
                <Slider />
                <Empresa />
                <div className='w-full'>
                    <Img src={img} className='w-full xl:h-screen h-halfScreen md:h-scren sm:h-screen' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                </div>
                <Genetico />
                <Produccion/>
                <NuestraRep />
                <div className='w-full'>
                    <img src={footer} className='footer'/>
                </div>
             </div>)
    }
}


export default Uno