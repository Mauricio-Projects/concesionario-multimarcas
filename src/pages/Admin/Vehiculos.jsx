import React, { useEffect, useState } from 'react'

const vehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2015
  },
  {
    nombre: "Elantra",
    marca: "Hiunday",
    modelo: 2012
  },
  {
    nombre: "Prado",
    marca: "Toyota",
    modelo: 2018
  },
  {
    nombre: "Mazda6",
    marca: "Mazda",
    modelo: 2020
  },
  {
    nombre: "Wolkswagen",
    marca: "Escarabajo",
    modelo: 1958
  },
  {
    nombre: "Chevrolet",
    marca: "Onix",
    modelo: 2019
  }
]

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textoBoton, setTextoBoton] = useState('crear Nuevo Vehiculo');
  const [vehiculos, setVehiculos] = useState([]);

  const[colorBoton, setColorBoton] = useState('indigo');

  useEffect(() => {
    //obtener lista vehiculos desde el backend
    setVehiculos(vehiculosBackend);
  }, [])

  useEffect(() => {
    if ( mostrarTabla) {
      setTextoBoton('Crear nuevo vehiculo');
      setColorBoton('bg-indigo-500');
    } else { 
      setTextoBoton('Mostrar todos los vehiculos');
      setColorBoton('bg-green-500');
    }
  }, [mostrarTabla]);


  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900 p-2' > Página de administración de Vehículos</h2>
          <button
            onClick={ () => {
              setMostrarTabla(!mostrarTabla)
            }}
            className={`text-white ${colorBoton} p-5 rounded-full m-6 w-28 self-end`}>
             { textoBoton }
          </button>
      </div>
      { mostrarTabla ? <TablaVehiculos listaVehiculos= { vehiculos }/> : <FormularioCreacionVehiculos /> }  
    </div>
  );
};

  const TablaVehiculos = ( { listaVehiculos }) => {
    useEffect(() => {
      console.log('Este es el listado de vehiculos en el componente de tabla', listaVehiculos)
    }, [listaVehiculos]);
    return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los Vehículos</h2>
        <table className=' text-gray-600'>
          <thead>
            <tr>
              <th>|Nombre del Vehículo|</th>
              <th>Marca del Vehículo|</th>
              <th>Modelo del Vehículo|</th>
            </tr>
          </thead>
          <tbody>
            {
              listaVehiculos.map((vehiculos) => {
                return (
                      <tr>
                          <th>{ vehiculos.nombre }</th>
                          <th>{ vehiculos.marca }</th>
                          <th>{ vehiculos.modelo }</th>
                        </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>)
  };

  const FormularioCreacionVehiculos = () => {
    return (
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>
          Crear Nuevo Vehículo
          </h2>
        <form className='grid grid-col-2'>
          <input className='bg-gray-100 border-gray-00 p-2 rounded-lg m-2' type="text" />
          <input className='bg-gray-100 border-gray-600 p-2 rounded-lg m-2' type="text" />
          <input className='bg-gray-100 border-gray-600 p-2 rounded-lg m-2' type="text" />
          <input className='bg-gray-100 border-gray-600 p-2 rounded-lg m-2' type="text" />
          <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
            Guardar Vehículo
            </button>
        </form>
      </div>
    )
  };


export default Vehiculos;

  /*
  //const [nombreVehiculo, setNombreVehiculo] = useState('');
  const [edad, setEdad] = useState(0);
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);


  useEffect(() => {
    //console.log('esta funcion se ejecuta cada vez que cambia el valor  que esta dentro del array')
    if(edad >= 18) {
      setEsMenorDeEdad(false)
    } else {
      setEsMenorDeEdad(true)
    }
    //paso2
    //paso3
    //paso n veces
  }, [edad]); 

  useEffect(() => {
    
    //console.log('Hola, soy un useEffect que se ejecuta una vez cuando la pag se renderiza, porque tiene el array de dependencias vacio');
  }, []);
  
  // const enviarDatosAlBackend = () => {
  //   console.log('el valor de la variable es ', )
  // }

  return (

    <form className='flex flex-col'>
        <h2>Formulario de Creación de Vehículos</h2>
        <label htmlFor="edad">Por Favor Ingrese su Edad
        <input value={edad}
        onChange= {(e) => {
          setEdad(e.target.value);
        }} 
        className= 'border border-gray-600'
        name='edad'
        type="number" />
        
        </label>
        {
          esMenorDeEdad ? (
            <span className='flex-3xl text-red-500'>
              Usted es menor de edad! No puede hacer pagos.
            </span>
          ) :  (
            <span className='flex-3xl text-green-500'>
              Usted es mayor de edad! puede hacer pagos.
            </span>
          )
        }    
    </form>

    // <form className='flex flex-col'>
    //   <h2>Formulario de Creación de Vehículos</h2>
    //     <input onChange={ (event)=> { 
    //       setNombreVehiculo(event.target.value) 
    //       } }
    //        type="text" placeholder='Nombre del Vehículo'/>
    //     <input onChange={ (e)=> {console.log(e.target.value) } } type="text" placeholder='Marca del Vehículo'/>
    //     <input onChange={ (e)=> {console.log(e.target.value) } } type="text" placeholder='Modelo del Vehículo'/>
    //     <button onClick={ enviarDatosAlBackend } type='button' className='bg-indigo-500 text-white'>Enviar Datos</button>
    // </form>
    
  );


};*/

