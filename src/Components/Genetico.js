import React, {Component} from 'react';
import img from '../assets/HOME/MEJORAMIENTO GENETICO/Fotos_Vacasssss-03.jpg'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class Genetico extends Component{
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
            <div >
                <div className='flex flex-row h-auto max-w-full mt-4'>
                    <section title='Descripción de la hacienda' className = 'w-1/2 flex flex-col justify-center'>
                    <Img src={img} alt='' className='object-contain' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                </section>
                <section className = 'w-1/2 flex flex-col justify-center p-24'>
                    <h2 className = 'text-right font-sans font-bold text-5xl'>MEJORAMIENTO</h2>
                    <h2 className= 'text-right font-sans font-bold text-5xl mb-5'>GENÉTICO</h2>
                    <p className='text-right m-0 p-0 tracking-wide'>Iniciamos con vacas criollas de promedio de producción de leche de 8 litros día por vaca y en la actualidad de acuerdo a mejoramiento genético por inseminación y transplante de embriones, tenemos vacas de alta producción que en sus picos están por encima de 40 litros.</p>
                </section>
                </div>
        </div>
        )
    }
    else{
        return(
            <div >
                <div className='flex flex-col max-w-full mt-4  mb-12'>
                    
                <section className = 'w-full flex flex-col justify-center xl:pl-0 xl:pr-0 lg:pl-32 lg:pr-32 md:pl-24 md:pr-24 pl-8 pr-8'>
                    <h2 className = 'text-center font-sans font-bold text-3xl'>MEJORAMIENTO</h2>
                    <h2 className= 'text-center font-sans font-bold text-3xl mb-5'>GENÉTICO</h2>
                    <p className='mb-3 text-justify '>Iniciamos con vacas criollas de promedio de producción de leche de 8 litros día por vaca y en la actualidad de acuerdo a mejoramiento genético por inseminación y transplante de embriones, tenemos vacas de alta producción que en sus picos están por encima de 40 litros.</p>
                </section>
                <section title='Descripción de la hacienda' className = 'w-full flex flex-col justify-center lg:pl-8 lg:pr-8 md:pl-6 md:pr-6 pl-2 pr-2'>
                    <Img src={img} alt='' className='object-contain' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                </section>
                </div>
        </div>
        )
    }
    }
}

export default Genetico