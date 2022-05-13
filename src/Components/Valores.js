import React, {Component} from 'react';
import img3 from '../assets/EMPRESA/VALORES/Fotos_Vacas_Web-12.jpg'
import img2 from '../assets/EMPRESA/VALORES/Fotos_Vacas_Web2-11.jpg'
import img from '../assets/EMPRESA/VALORES/Fotos_Vacas_Web4-06.jpg'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Valores extends Component{
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
                <section title='Descripción de la hacienda' className = 'flex flex-row justify-between max-h-screen mb-8'>
                    <div className='flex flex-column justify-center w-1/2'>
                    <div title='texto de la descripción' className=' p-20 pr-0 pl-24 center '>
                        <h2 className='text-left font-sans font-bold text-5xl'>VALORES DE</h2>
                        <h2 className='mb-5 text-left font-sans font-bold text-5xl'>LA EMPRESA</h2>
                        <p className='mb-3 text-justify'>
                            Es muy importante y fundamental el valor del <b>recurso humano</b>; nuestros colaboradores estan en capacitaciones permanentes, son personas que se interesan y estan comprometidas en el buen desarrollo de todos los programas y acciones que se reflejan en los buenos resultados y éxitos obtenidos.
                        </p>
                        <p className='mb-3 text-justify'>
                           Otro valor importante es haber logrado un <b>bienestar animal</b> mediante el sistema silvopastoril, dado que el desarrollo de los pastos tecnificados y el suministro de agua permanente en los potreros es de vital importancia.
                        </p>
                        <p className='mb-3 text-justify'>
                           La <b>conservación de los recursos naturales</b> como los bosques, la renovación de vegetación en las cañadas, el aumento de agua en los causes o en las vertientes naturales.
                        </p>
                        <p className='mb-3 text-justify'>
                           El <b>bienestar social</b> de nuestros trabajadores, es un punto importante para el buen desarrollo humano, donde se les da un trato amable; ellos cuentan con todas las prestaciones sociales de ley y requisitos legales, además de tener una vivienda dentro de la finca para prestar un servicio excelente frente a nuestra empresa.
                        </p>
                    </div>  
                    </div>

                    <div title='imagen' className='flex flex-col w-1/2 pl-8' >
                        <div className='flex flex-row justify-between mt-16 mb-2 pr-8'>
                            <Img alt='' src={img2} className='object-scale  w-1/2 pr-4 pt-40 h-halfScreen ' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            <Img alt='' src = {img3} className='object-scale  w-1/2 pt-40 h-halfScreen' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        </div>
                        <div>
                         <Img alt='' src={img} className='object-scale  w-full pr-8 h-halfScreen pb-40' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        </div>
                        
                    </div>
                    
                </section>
            </div>
        )}
        else{
            return(
                <div>
                    <section title='Descripción de la hacienda' className = 'flex flex-col justify-between  mb-8 mt-20'>
                        <div className='flex flex-column justify-center w-full'>
                        <div title='texto de la descripción' className=' pl-4 pr-4 center '>
                            <h2 className='text-center font-sans font-bold text-5xl'>VALORES DE</h2>
                            <h2 className='mb-5 text-center font-sans font-bold text-5xl'>LA EMPRESA</h2>
                            <p className='mb-3 text-justify'>
                                Es muy importante y fundamental el valor del <b>recurso humano</b>; nuestros colaboradores estan en capacitaciones permanentes, son personas que se interesan y estan comprometidas en el buen desarrollo de todos los programas y acciones que se reflejan en los buenos resultados y éxitos obtenidos.
                            </p>
                            <p className='mb-3 text-justify'>
                               Otro valor importante es haber logrado un <b>bienestar animal</b> mediante el sistema silvopastoril, dado que el desarrollo de los pastos tecnificados y el suministro de agua permanente en los potreros es de vital importancia.
                            </p>
                            <p className='mb-3 text-justify'>
                               La <b>conservación de los recursos naturales</b> como los bosques, la renovación de vegetación en las cañadas, el aumento de agua en los causes o en las vertientes naturales.
                            </p>
                            <p className='mb-3 text-justify'>
                               El <b>bienestar social</b> de nuestros trabajadores, es un punto importante para el buen desarrollo humano, donde se les da un trato amable; ellos cuentan con todas las prestaciones sociales de ley y requisitos legales, además de tener una vivienda dentro de la finca para prestar un servicio excelente frente a nuestra empresa.
                            </p>
                        </div>  
                        </div>
    
                        <div title='imagen' className='flex flex-col w-full pl-1' >
                            <div className='flex flex-row max-w-full justify-between mt-8 pr-3'>
                            <Img alt='' src={img2} className='object-scale   pr-1 md:h-halfScreen sm:h-1/2 sm:w-1/2 lg:h-haflScreen lg:w-1/2 w-48 h-48' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            <Img alt='' src = {img3} className='object-scale md:h-halfScreen sm:h-1/2 sm:w-1/2 lg:h-haflScreen lg:w-1/2 w-48 h-48' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            </div>
                            <div>
                             <Img alt='' src={img} className='object-contain w-full pt-4 pb-40 pr-1' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            </div>
                            
                        </div>
                        
                    </section>
                </div>)
        }
    }
}

export default Valores