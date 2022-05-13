import React, {Component} from 'react';
import img from '../assets/HOME/HACIENDA LA DOMINGUERA/Fotos_Varios-10.png'
import Img from 'react-image'
import img2 from '../assets/spinner.gif'

class Empresa extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(
            <div>
                <section title='Descripción de la hacienda' className = 'flex xl:flex-row flex-col justify-between mb-4'>
                    <div title='texto de la descripción' className='xl:w-1/2 xl:p-20 xl:pr-0 xl:pl-24 w-full'>
                        <h2 className='sm:text-center md:text-center lg:text-left xl:text-left xs:text-center font-sans font-bold xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl'>HACIENDA</h2>
                        <h2 className='mb-5 sm:text-center md:text-center lg:text-left  xl:text-left xs:text-center font-sans font-bold xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl'>LA DOMINGUERA</h2>
                        <p className='mb-3 text-justify xl:pr-0 xl:pl-0 pr-3 pl-3'>Los terrenos de la hacienda la dominguera se compraron hace aproximadamente 35 años con pastos sin technificar, sin ninguna infraestructura, tales como carreteras, energía, acueducto y desde ese momento que iniciaron trabajos enfocados a la explotación ganadera con especialización en lechería, esto implicó un estudio
                            topográfico, un estudio de aguas y un análisis de suelos y diseño para el proyecto eléctrico, así como ubicación de Corrales, bodegas, vivienda para trabajadores y todo lo que implica la infraestructura para desarrollar nuestro programa.
                        </p>
                        <p className='mb-3 text-justify xl:pr-0 xl:pl-0 pr-3 pl-3'>
                            Del estudio topográfico se derivó el diseño de las divisiones de potreros en curva de nivel, el diseño de vías internas para facilitar transporte de materiales, fertilizantes, alimentos y movilización interna como el transporte de leche y así, se diseñó un plan maestro de la infraestructura necesaria para el desarollo del programa lechero.
                        </p>
                        <p className='mb-3 text-justify xl:pr-0 xl:pl-0 pr-3 pl-3'>
                            Este proyecto se desarrolló a lo largo de tres años al igual que el mejoramiento y tecnificación de pastos, siembra de pasto estrella durante un periodo de 5 años aproximadamente.
                        </p>
                        <p className='mb-3 text-justify xl:pr-0 xl:pl-0 pr-3 pl-3'>
                            Se conservaron y asilaron los bosques con cercas de protección, bosques y cañadas y se inció el programa de plantación de árboles en los potreros para establecer el programa Silviopastoril.
                        </p>
                    </div>
                    <div title='imagen' className='xl:flex xl:flex-row-reverse xl:w-1/2' >
        <Img src={img} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2' title='Imagen de arbol hacienda' loader={<img src={img2} className='object-contain h-full w-full xl:ml-32 xl:pr-0 xl:pl-0 xl:pb-o pr-4 pl-4 mr-2'/>}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Empresa