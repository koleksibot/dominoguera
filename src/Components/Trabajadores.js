import React, {Component} from 'react';
import img from '../assets/DSC_0237.jpg'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Trabajadores extends Component{
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
                    
                <div title='imagen' className='relative w-1/2 pr-16' >
                        <Img src={img} alt='' className='object-contain h-full w-full object-right pt-8 pb-8' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>

                    <div className='flex flex-column justify-center items-center w-1/2'>
                        
                    <div title='texto de la descripción' className=' p-20 pl-0 pr-24 center '>
                    <h2 className='text-left font-sans font-bold text-5xl'>NUESTROS</h2>
                        <h2 className='mb-5 text-left font-sans font-bold text-5xl'>EMPLEADOS</h2>
                        <p className='mb-3 text-justify'>
                           Nuestro equipo de trabajo en la atualidad se compone de 8 personas, las cuales hay un administrador, 4 personas estan dedicadas exclusivamente al tema de manejo de vacas en el ordeño, 2 personas operarias en el tema de fertilización, manejo de potreros, mantenimiento de cercas y actividades varias y un trabajador supernumerario encargado de los reemplazos en los turnos de descanso, suplementación alimenticia a los animales y refuerzo en las actividades generales de la finca.
                        </p>
                        <p className='mb-3 text-justify'>
                           Adicional, a este personal de planta contamos con la valiosa asistencia técnica de un veterinario especializado en pastos y reproducción bovina.   
                        </p>
                    </div>  
                    </div>
                    
                </section>
            </div>
        )}
        else{
            return(
                <div>
                    <section title='Descripción de la hacienda' className = 'flex flex-col items-center mb-8 mt-32'>
               
                            <h2 className='text-left font-sans font-bold text-3xl'>NUESTROS</h2>
                            <h2 className='mb-5 text-left font-sans font-bold text-3xl'>EMPLEADOS</h2>
                            <div title='texto de la descripción' className=' pr-8 pl-8 '>
                            <p className='mb-3 text-justify'>
                               Nuestro equipo de trabajo en la actualidad se compone de 8 personas, las cuales hay un administrador, 4 personas estan dedicadas exclusivamente al tema de manejo de vacas en el ordeño, 2 personas operarias en el tema de fertilización, manejo de potreros, mantenimiento de cercas y actividades varias y un trabajador supernumerario encargado de los reemplazos en los turnos de descanso, suplementación alimenticia a los animales y refuerzo en las actividades generales de la finca.
                            </p>
                            <p className='mb-3 text-justify'>
                               Adicional, a este personal de planta contamos con la valiosa asistencia técnica de un veterinario especializado en pastos y reproducción bovina.   
                            </p>
                      
                    </div>
                   
    
                        
                         
                       
                        <div title='imagen' className='w-full pr-4 pl-4' >
                        
                        <Img src={img} alt='' className='object-contain' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                    </section>
                </div>
            )
        }
    }
}

export default Trabajadores