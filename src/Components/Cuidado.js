import React, {Component} from 'react';
import img from '../assets/A.jpg'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Cuidado extends Component{
    constructor(props){
        super(props)
        this.props = props 
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    render(){
        if(this.state.width >= 1280){
        return(
            <div>
            <section title='Descripción de la hacienda' className = 'flex flex-row justify-between max-h-screen mb-8 mt-40'>
                <div className='flex flex-column justify-center w-1/2'>
                <div title='texto de la descripción' className=' p-20 pl-24 center '>
                    <h2 className='text-left font-sans font-bold text-5xl'>CUIDADO DE</h2>
                    <h2 className='mb-5 text-left font-sans font-bold text-5xl'>ANIMALES</h2>
                    <p className='mb-3 text-justify'>
                        Nuestras vacas, aparte de la suplementación con alimentos concentrados, los cuales se suministran de acuerdo a su producción en proporciones adecuadas de acuerdo al volumen de producción y tercio de lactancia en que se encuentre, se les ofrece forraje suculento en los potreros, efectuando una rotación a 30 días, lo que permite el consumo de pasto fresco y nutritivo día a día; también se suministra silo de maíz en el potrero para complementar la ración de forraje.
                    </p>
                </div>  
                </div>
                
                <div title='imagen' className='w-1/2' >
                    <Img src={img} className='object-contain h-full w-full object-right' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                </div>
            </section>
        </div>
        )}
        else{
            return(
                <div>
                <section title='Descripción de la hacienda' className = 'flex flex-col justify-between mb-8 mt-32'>
                    <div className='flex flex-column  w-full pl-4 pr-4'>
                   
                        <h2 className='text-center font-sans font-bold text-3xl'>CUIDADO DE</h2>
                        <h2 className='mb-5 text-center font-sans font-bold text-3xl'>ANIMALES</h2>
                        <p className='mb-3 text-justify'>
                            Nuestras vacas, aparte de la suplementación con alimentos concentrados, los cuales se suministran de acuerdo a su producción en proporciones adecuadas de acuerdo al volumen de producción y tercio de lactancia en que se encuentre, se les ofrece forraje suculento en los potreros, efectuando una rotación a 30 días, lo que permite el consumo de pasto fresco y nutritivo día a día; también se suministra silo de maíz en el potrero para complementar la ración de forraje.
                        </p>
                    </div>  
                
                    
                    <div title='imagen' className='w-full pr-4 pl-4' >
                        <Img src={img} className='object-contain' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                </section>
            </div>
            )
        }
    }
}

export default Cuidado