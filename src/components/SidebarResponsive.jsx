import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,  faTimes} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false)
    return (
        <div 
            className='md:hidden'
            onClick={() => {
                setMostrarNavegacion(!mostrarNavegacion);
            }}
            >
            <FontAwesomeIcon  icon={mostrarNavegacion? faTimes : faBars}/>
            {mostrarNavegacion && (
                <ul className='bg-gray-800'>
                    <ResponsiveRoute  ruta="/admin/vehiculos"  nombre='vehiculos'/>
                    <ResponsiveRoute  ruta="/admin/ventas"  nombre='ventas'/>
                    <ResponsiveRoute  ruta="/admin/usuarios"  nombre='usuarios'/>
                </ul>
            )}
        </div>
    )
}

const ResponsiveRoute = ({ ruta, nombre }) => {
    return (
        <Link to={ruta}>
            <li className='text-gray-200 border border-gray-200 p-2'>{nombre}</li>
        </Link>
    );
};

export default SidebarResponsive