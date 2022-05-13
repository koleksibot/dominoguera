import React, {Component} from 'react';

class Contactenos extends Component{
    constructor(props){
        super(props)
        this.props = props 
        this.state = {
            Nombre : '',
            Telefono: '',
            CorreoElectronico: '',
            Mensaje: ''
        }
    }
    sendmail = () => {
        fetch('http://localhost:8080/email', {
            method : 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                    Nombre : this.state.Nombre,
                    Telefono: this.state.Telefono,
                    CorreoElectronico: this.state.CorreoElectronico,
                    Mensaje: this.state.Mensaje
                })
            }).then(ans => {return ans.json})
            .then(ans => {
                console.log(ans)
            }).catch(err => {
                console.log(err)
            })
        }

    render(){
        return(
            <div className='h-screen flex xl:flex-row flex-col xl:pt-32 lg:pt-24 md:pt-32 sm:pt-32 pt-32 mt-8'>
                <section className='xl:w-2/5 lg:w-full md:w-full sm:w-full'>
                    <h2 className='text-center font-sans font-bold xl:text-5xl lg:text-3xl mb-5'>CONTÁCTENOS</h2>
                </section>
                    
                <section className='xl:w-3/5 lg:w-full sm:w-full md:w-full flex flex-col justify-start items-center'>
                    <div className='flex flex-col xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 mb-4'>
                        <label className = 'mb-4'>Nombre (*)</label>
                        <input className='border-solid border-2 h-12 rounded-lg border-black ' onChange = {val => {this.setState({Nombre : val.target.value})}}/>
                    </div>
                    <div className='flex flex-col xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 mb-4'>
                        <label className = 'mb-4'>Teléfono (*)</label>
                        <input className='border-solid border-2 h-12 rounded-lg border-black ' onChange = {val => {this.setState({Telefono : val.target.value})}}/>
                    </div>
                    <div className='flex flex-col xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 mb-4'>
                        <label className = 'mb-4'>Correo Eléctronico (*)</label>
                        <input className='border-solid border-2 h-12 rounded-lg border-black' onChange = {val => {this.setState({CorreoElectronico : val.target.value})}}/>
                    </div>
                    <div className='flex flex-col xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 w-3/4 mb-4'>
                        <label className = 'mb-4'>Mensaje</label>
                        <textarea className='border-solid border-2 rounded-lg border-black h-20' onChange = {val => {this.setState({Mensaje : val.target.value})}}/>
                    </div>
                    <button className='border-solid border-2 w-32 h-12 rounded-lg border-black text-2xl shadow-md' onClick = {() => {this.sendmail()}}>Enviar</button>
                </section>
            </div>
        )
    }
}

export default Contactenos