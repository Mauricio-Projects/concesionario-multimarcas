import { useDarkMode } from 'contex/darkMode'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const {  darkMode, setDarkMode } = useDarkMode();
  console.log(darkMode);
  return (
    <nav className='bg bg-red-300'>
      <ul className='flex w-full justify-between my-3'>
        <li>logo</li>
        <li>navegacion 1</li>
        <li>
        <button onClick={ () => {
            setDarkMode(!darkMode);
          }}>
            { darkMode ? 'Desactivar': 'Activar'} modo oscuro
          </button>          
        </li>
        <li>navegacion 3</li>
        <li className='px-3'> 
        <Link to='/login'>
          <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
            Iniciar Sesion</button>
        </Link>
        </li>
      </ul>
      Navbar</nav>
  )
}

export default Navbar