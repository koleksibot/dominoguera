import React, {Component} from 'react';
import img from '../assets/DSC_0264.jpg'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Mejoramiento extends Component{
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
                <section title='Descripción de la hacienda' className = 'flex flex-row justify-between max-h-screen mb-8 mt-24'>
                    <div className='flex flex-column justify-center w-1/2'>
                    <div title='texto de la descripción' className=' p-20 pr-0 pl-24 center '>
                        <h2 className='text-left font-sans font-bold text-5xl'>MEJORAMIENTO</h2>
                        <h2 className='text-left font-sans font-bold text-5xl'>DE PASTOS Y </h2>
                        <h2 className='mb-5 text-left font-sans font-bold text-5xl'>UNIDAD DE CARGA</h2>
                        <p className='mb-3 text-justify'>
                            Durante los primeros 5 años se realizaron obras de tecnificación en pastos, realizando labores de arado, mediante el uso de bueyes que trabajan en curva de nivel evitando así la erosión y pérdida de materia orgánica cuando está labor se hace con tractores; se aplicó materia orgánica y roca fosfórica a todos los potreros y se procedió a la siembra de pasto estrella en surcos distanciados a 50cm.
                        </p>
                        <p className='mb-3 text-justify'>
                            Al realizar esta labor, se mejoró considerablemente la capacidad de carga a tal punto que pasamos a una unidad de carga de 3 animales por plaza para un total de 300 animales en 100 plazas, el resto del área de la finca, es decir 38 plazas se encuentran en bosques naturales, carreteras y casas de habitación.   
                        </p>
                    </div>  
                    </div>
                    
                    <div title='imagen' className='flex flex-row-reverse w-1/2' >
                        <Img src={img} className='object-contain h-full pl-12 object-right' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                </section>
            </div>
        )}
        else{
            return(
                <div>
                    <section title='Descripción de la hacienda' className = 'flex flex-col justify-between mb-8 mt-32'>
                        <div className='flex flex-column justify-center w-full'>
                        <div title='texto de la descripción' className=' pr-8 pl-8 '>
                            <h2 className='text-center font-sans font-bold text-3xl'>MEJORAMIENTO</h2>
                            <h2 className='text-center font-sans font-bold text-3xl'>DE PASTOS Y </h2>
                            <h2 className='mb-5 text-center font-sans font-bold text-3xl'>UNIDAD DE CARGA</h2>
                            <p className='mb-3 text-justify'>
                                Durante los primeros 5 años se realizaron obras de tecnificación en pastos, realizando labores de arado, mediante el uso de bueyes que trabajan en curva de nivel evitando así la ersión y pérdida de materia orgánica cuando está labor se hace con tractores; se aplicó materia orgánica y roca fosfórica a todos los potreros y se prcedió a la siembra de pasto estrella en surcos distanciados a 50cm.
                            </p>
                            <p className='mb-3 text-justify'>
                                Al realizar esta labor, se mejoró considerablemente la capacidad de carga a tal punto que pasamos a una unidad de carga de 3 animales por plaza para un total de 300 animales en 100 plazas, el resto del área de la finca, es decir 38 plazas se encuentran en bosques naturales, carreteras y casas de habitación.   
                            </p>
                        </div>  
                        </div>
                        
                        <div title='imagen' className='' >
                            <Img src={img} className='object-contain w-full pl-4 pr-4 mb-8' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

export default Mejoramiento