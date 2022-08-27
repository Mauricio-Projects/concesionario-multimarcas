import React from 'react'
import ImagenLogo from 'components/ImagenLogo'
import { Link } from 'react-router-dom'
import 'styles/responsive.css'


const Sidebar = () => {
  return (
    <nav className=' w-72 border border-gray-300 h-full flex flex-col  bg bg-gray-400 p-4 sidebar'>
      <Link to='admin'>
        <ImagenLogo />
      </Link>
      <div className='my-4'>
      <Ruta icono='fas fa-user' ruta='/admin/perfil' nombre='perfil' />
      <Ruta icono='fas fa-car' ruta='/admin/vehiculos' nombre='vehículos' />
      <Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='ventas' />
      <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='usuarios' />
      </div>

      <button className=''>Cerrar Sesión</button>
    </nav>
  );
};

const Ruta = ( {icono, ruta, nombre }) => {
  return(
    <Link to={ ruta }>
      <button className='p-1 mb-2 hover:bg-indigo-900 bg-indigo-400 flex w-full items-start text-white rounded-md'>
        <i className={`${icono}`} />
        {nombre}
      </button>
    </Link>
  );
};
export default Sidebar