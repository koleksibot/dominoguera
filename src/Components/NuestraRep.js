import React, {Component} from 'react';
import img from '../assets/DSC_0267.jpg'
import './style.css'
import Img from 'react-image'
import Img2 from '../assets/spinner.gif'
class NuestraRep extends Component{
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
                <div className=' h-auto max-w-full'>
                    <section title='Descripción de la hacienda' className = 'w-full relative text-center'>
                        <Img src={img} alt='' className=' relative w-full h-screen p-16' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        <section className = 'centered h-screen p-16 bg-white pl-4 pr-4 w-1/3'>
                                <h2 className = 'text-left font-sans font-bold text-5xl mt-32'>NUESTRA</h2>
                                <h2 className= 'text-left font-sans font-bold text-5xl mb-5'>REPUTACIÓN</h2>
                                <p className='mb-3 text-justify italic'>La hacienda la dominguera en el momento es conocida y renombrada por la calidad genética de sus vacas, como lo aseguran todos nuestros clientes que han adquirido los ejemplares, así como las empresas pasteurizadoras compradoras de la leche que manifiestan y nos felicitan por la calidad de la misma.</p>
                            </section>
                    </section>
                 
                </div>
        )}
        else{
            return(
                <div >
                    <div className='flex flex-col max-w-full mt-4  mb-12'>
                        <section className = 'pl-4 pr-4 w-full '>
                            <h2 className= 'text-center font-sans font-bold text-3xl mb-5'>NUESTRA REPUTACIÓN</h2>
                            <p className='mb-3 text-justify'>La hacienda la dominguera en el momento es conocida y renombrada por la calidad genética de sus vacas, como lo aseguran todos nuestros clientes que han adquirido los ejemplares, así como las empresas pasteurizadoras compradoras de la leche que manifiestan y nos felicitan por la calidad de la misma.</p>
                        </section>
                        <section title='Descripción de la hacienda' className = 'w-full flex flex-col justify-center'>
                            <Img src={img} alt=''className='object-cover' loader={<img src={Img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                        </section>    
                    </div>
                </div>
            )
        }
    }
}

export default NuestraRep