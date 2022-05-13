import React, {Component} from 'react';
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
import img1 from '../assets/VACAS/GENETICA DE VACAS/DSC_0012.jpg'
import img2 from '../assets/VACAS/GENETICA DE VACAS/DSC_0375.jpg'
import img3 from '../assets/VACAS/GENETICA DE VACAS/DSC_0380.jpg'
import img4 from '../assets/VACAS/GENETICA DE VACAS/DSC_0394.jpg'
class Vacas extends Component{
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
                <div className='flex flex-row h-screen max-w-full mt-32'>
                <section className='flex flex-col w-2/5 p-16 pl-24'>
                    <h2 className='text-left font-sans font-bold text-5xl'>GENÉTICA DE</h2>
                    <h2 className='text-left font-sans font-bold text-5xl mb-5'>VACAS</h2>
                    <p className='mb-3 text-justify'>Permanentemente se ha realizado mejoramiento genético mediante una asesoría tecnica de parte de las asociciones que existen en el país para cada raza lechera utilizada en nuestro programa; así es como por intermedio de ellos, hemos adquirido semen y realizado transferencia de embriones mediante el uso de los mejores toros para cada caso que existen en el mundo.</p>
                    <p className='mb-3 text-justify'>Nuestras vacas, aparte de la suplementación con alimentos concentrados, el cual se suministra de acuerdo a su producción en proporciones adecuadas de acuerdo al volumen de producción y tercio de lactancia en que se encuentre, se les ofrece forraje suculento en los potreros, efectuando una rotación a 30 días, lo que permite el consumo de pasto fresco y nutritivo día a día; también se suministra silo de maíz en el potrero para complementar la ración de forraje.</p>
                </section>
                <section className='flex flex-col w-3/5'>
                    <div className='flex flex-row'>
                        <Img alt='' src={img1} alt='' className='object-contain p-2 w-1/2' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        <Img alt='' src={img2} alt='' className='object-contain p-2 w-1/2' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                    <div className='flex flex-row'>
                        <Img alt='' src={img3} alt='' className='object-contain p-2 w-1/2' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        <Img alt='' src={img4} alt='' className='object-contain p-2 w-1/2' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                </section>
                </div>
            </div>
        )}
        else{
            return(
                <div >
                    <div className='flex flex-col w-full mt-32'>
                    <section className='flex flex-col w-full'>
                        <h2 className='text-center font-sans font-bold text-3xl'>GENÉTICA DE</h2>
                        <h2 className='text-center font-sans font-bold text-3xl mb-5'>VACAS</h2>
                        <p className='mb-3 text-justify mr-4 ml-4'>Permanentemente se ha realizado mejoramiento genético mediante una asesoría tecnica de parte de las asociciones que existen en el país para cada raza lechera utilizada en nuestro programa; así es como por intermedio de ellos, hemos adquirido semen y realizado transferencia de embriones mediante el uso de los mejores toros para cada caso que existen en el mundo.</p>
                        <p className='mb-3 text-justify mr-4 ml-4'>Nuestras vacas, aparte de la suplementación con alimentos concentrados, el cual se suministra de acuerdo a su producción en proporciones adecuadas de acuerdo al volumen de producción y tercio de lactancia en que se encuentre, se les ofrece forraje suculento en los potreros, efectuando una rotación a 30 días, lo que permite el consumo de pasto fresco y nutritivo día a día; también se suministra silo de maíz en el potrero para complementar la ración de forraje.</p>
                    </section>
                    <section className='flex flex-col w-full mb-8'>
                            <Img alt='' src={img1} alt='' className='object-contain p-2' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            <Img alt='' src={img2} alt='' className='object-contain p-2'loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            <Img alt='' src={img3} alt='' className='object-contain p-2'loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                            <Img alt='' src={img4} alt='' className='object-contain p-2' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                       
                    </section>
                    </div>
                </div>
            )
        }
    }
}

export default Vacas