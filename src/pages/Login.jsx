import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
      <div className='flex flex-col  w-full justify-center items-center'>
        <h2 className='m-3 text-center text-3xl  font-extrabold text-gray-900'>Inicia Sesion en tu Cuenta.</h2>
          <form className='mt-8'>
            <div>
              <input className='appearance-none rounded-md relative block w-full px-3 py-2 border-gray-300 text-gray-900  focus:ring-2 focus:outline-none focus:z-10 sm:text-sm'   
              type="email" 
              placeholder='amgc@gmail.com' required />
              <input className='appearance-none   relative block w-full px-3 py-2 border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:z-10 sm:text-sm,' 
              type="pasword" required placeholder='digite su contraseña' />
            </div>
            <div className='flex justify-between'>
              <div>
                <label htmlFor="recuerdame">
                  <input type="checkbox" name='recuerdame' />
                    Recuerdame
                </label>
              </div>
            </div>           
            <div>
              <Link to='/'>Olvidaste tu contraseña?</Link>
            </div>
            <div>
              <Link to='/admin'>  
              <button type='submit'>Inicia Sesion</button> 
              </Link>
            </div>
            <div>0</div>
            <div>
              <button>Continua con Google</button>
            </div>
          </form>
        
      </div>
  )
};

export default Login