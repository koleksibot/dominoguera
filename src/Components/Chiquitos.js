import React, {Component} from 'react';
import img from '../assets/Imagenes_Pagina-25.png'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Chiquitos extends Component{
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
                    <Img src={img} className='w-full pr-4 pb-8' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                </div>
                <div title='texto de la descripción' className='w-1/2 p-20 pr-24'>
                    <h2 className='text-right font-sans font-bold text-5xl'>CANTIDAD DE</h2>
                    <h2 className='text-right font-sans font-bold text-5xl'>ANIMALES Y</h2>
                    <h2 className='mb-5 text-right font-sans font-bold text-5xl'>PRODUCCIÓN</h2>
                    <p className='mb-3 text-justify'>En la actualidad contamos con 300 animales entre vacas, novillas y terneras de las cuales 120 animales se encuentran en producción. De los 120 animales en producción 20 estan en el estado de preparto y 100 directamente en el ordeño, con una producción de leche total por día de 2100lts. Para un promedio de producción por vaca día de 21 lts.</p>
                </div>
            </section>
        </div>
        )}
        else{
            return(
                <div>
                <section title='Descripción de la hacienda' className = 'flex flex-col justify-between mt-32'>
                   
                    <div title='texto de la descripción' className='w-full pl-8 pr-8'>
                        <h2 className='text-center font-sans font-bold text-3xl'>CANTIDAD DE</h2>
                        <h2 className='text-center font-sans font-bold text-3xl'>ANIMALES Y</h2>
                        <h2 className='mb-5 text-center font-sans font-bold text-3xl'>PRODUCCIÓN</h2>
                        <p className='mb-3 text-justify'>En la actualidad contamos con 300 animales entre vacas, novillas y terneras de las cuales 120 animales se encuentran en producción. De los 120 animales en producción 20 estan en el estado de preparto y 100 directamente en el ordeño, con una producción de leche total por día de 2100lts. Para un promedio de producción por vaca día de 21 lts.</p>
                    </div>
                    <div title='imagen' className='flex flex-row w-full items-center mb-8' >
                        <Img src={img} className='pr-4 pl-4' title='Imagen de arbol hacienda' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                </section>
            </div>
            )
        }
    }
}

export default Chiquitos