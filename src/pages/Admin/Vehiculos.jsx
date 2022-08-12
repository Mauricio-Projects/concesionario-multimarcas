import React, { useEffect, useState } from 'react'

const Vehiculos = () => {


  const [nombreVehiculo, setNombreVehiculo] = useState('');

  useEffect(() => {
    console.log('Hola, soy un useEffect que se ejecuta una vez cuando la pag se renderiza, porque tiene el array de dependencias vacio');
    //paso2
    //paso3
    //paso n veces
  }, []); 

  useEffect(() => {
    console.log('esta funcion se ejecuta cada vez que cambia el valor  del nombre del vehiculo')
  }, [nombreVehiculo]);
  
  const enviarDatosAlBackend = () => {
    console.log('el valor de la variable es ', nombreVehiculo)
  }

  return (

    <form className='flex flex-col'>
      <h2>Formulario de Creación de Vehículos</h2>
        <input onChange={ (event)=> { 
          setNombreVehiculo(event.target.value) 
          } }
           type="text" placeholder='Nombre del Vehículo'/>
        <input onChange={ (e)=> {console.log(e.target.value) } } type="text" placeholder='Marca del Vehículo'/>
        <input onChange={ (e)=> {console.log(e.target.value) } } type="text" placeholder='Modelo del Vehículo'/>
        <button onClick={ enviarDatosAlBackend } type='button' className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
    
  )
}

export default Vehiculos