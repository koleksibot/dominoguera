import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../assets/Vaca1.png'
import img2 from '../assets/Vaca4.png'
import img3 from '../assets/Vaca3.png'
import img4 from '../assets/Vaca2.png'
import img5 from '../assets/Vaca5.png'
import img6 from '../assets/Vaca6.png'

class Slider extends Component{
    constructor(props){
        super(props)
        this.props = props 
    }
    render(){
        return(
            <div className = 'mb-4'>
                 <Carousel showArrows = {true} showThumbs = {false} showStatus = {false} autoPlay={true}>
                <div className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full'>
                    <img className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full' src={img} />
                </div>
                <div className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full'>
                    <img className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full' src={img2} />
                </div>
                <div className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full'>
                    <img className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full' src={img3} />
                </div>
                <div className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full'>
                    <img className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full' src={img4} />
                </div>
                <div className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full'>
                    <img className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full' src={img5} />
                </div>
                <div className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full'>
                    <img className='h-full xl:h-screen lg:h-screen md:h-screen sm:h-full' src={img6} />
                </div>
            </Carousel>
            </div>
        )
    }
}

export default Slider