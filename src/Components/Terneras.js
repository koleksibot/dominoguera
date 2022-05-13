import React, {Component} from 'react';
import img from '../assets/VACAS/LEVANTAMIENTO DE TERNERAS/DSC_0265.jpg';
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Terneras extends Component{
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
            <section title='Descripción de la hacienda' className = 'flex flex-row justify-between max-h-screen mt-32'>
                <div title='imagen' className='flex flex-row w-1/2 items-center' >
                    <Img src={img} alt=''className='w-full pr-4 pb-8' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                </div>
                <div title='texto de la descripción' className='w-1/2 p-20 pr-24'>
                    <h2 className='text-right font-sans font-bold text-5xl'>LEVANTAMIENTO</h2>
                    <h2 className='mb-5 text-right font-sans font-bold text-5xl'>DE TERNERAS</h2>
                    <p className='mb-3 text-justify'>Es de vital importancia el cuidado y dedicación que se tenga en el levantamiento de las terneras, dado que estas son las futuras vacas en producción para el sostenimiento de la empresa, es decir, que tenemos que ofrecer total dedicación, excelente alimentación para que alcancen un desarrollo corporal y de su sistema mamario óptimo para cumplir su función dentro de la empresa.</p>
                    <p className='mb-3 text-justify'>
                       En los primeros 3-4 meses utilizamos el sistema de crianza llamado balde estaca, durante el cual se le suministran 6 litros de leche por día, concentrado a libre disposición hasta alcanzar 2 kilogramos por día; suplementos de minerales, vitamínas y controles de paracitos externos e internso y plan de vacunación requerido; así es como al final de este periodo pasan a la etapa de levante que se desarrolla en los potreros con una suplementación diaria de 2 kilogramos de concentrado por día, hasta completar un año de edad.
                    </p>
                    <p className='mb-3 text-justify'>
                  A partir del primer año hasta los 18 meses se suplementan con 1 kilogramo de concentrado por día, al cabo del cual deben estar en un peso aproximado de 350 kilogramos, peso reglamentario para ser inseminadas o servidas, es decir que su primer parto es entre los 27 y 30 meses de edad.
                   </p>
                </div>
            </section>
        </div>
        )}
        else{
            return(
                <div>
                <section title='Descripción de la hacienda' className = 'flex flex-col justify-between mt-32'>
                   
                    <div title='texto de la descripción' className='w-full pl-8 pr-8'>
                        <h2 className='text-center font-sans font-bold text-3xl'>LEVANTAMIENTO</h2>
                        <h2 className='mb-5 text-center font-sans font-bold text-3xl'>DE TERNERAS</h2>
                        <p className='mb-3 text-justify'>Es de vital importancia el cuidado y dedicación que se tenga en el levantamiento de las terneras, dado que estas son las futuras vacas en producción para el sostenimiento de la empresa, es decir, que tenemos que ofrecer total dedicación, excelente alimentación para que alcancen un desarrollo corporal y de su sistema mamario óptimo para cumplir su función dentro de la empresa.</p>
                        <p className='mb-3 text-justify'>
                           En los primeros 3-4 meses utilizamos el sistema de crianza llamado balde estaca, durante el cual se le suministran 6 litros de leche por día, concentrado a libre disposición hasta alcanzar 2 kilogramos por día; suplementos de minerales, vitamínas y controles de paracitos externos e internso y plan de vacunación requerido; así es como al final de este periodo pasan a la etapa de levante que se desarrolla en los potreros con una suplementación diaria de 2 kilogramos de concentrado por día, hasta completar un año de edad.
                        </p>
                        <p className='mb-3 text-justify'>
                      A partir del primer año hasta los 18 meses se suplementan con 1 kilogramo de concentrado por día, al cabo del cual deben estar en un peso aproximado de 350 kilogramos, peso reglamentario para ser inseminadas o servidas, es decir que su primer parto es entre los 27 y 30 meses de edad.
                       </p>
                    </div>
                    <div title='imagen' className='flex flex-row w-full items-center mb-8' >
                        <Img src={img} alt='' className='pr-4 pl-4' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                </section>
            </div>
            )
        }
    }
}

export default Terneras