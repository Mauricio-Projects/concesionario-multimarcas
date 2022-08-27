import Admin from 'pages/Admin/Index';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'styles/Styles.css'
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Clientes from 'pages/Admin/Clientes';
import Vehiculos from 'pages/Admin/Vehiculos';
import { DarkModeContext } from 'contex/darkMode';
import React, { useState } from 'react';
import 'styles/responsive.css'


function App() {
  const [darkMode, setDarkMode]  = useState(false);
  
  return (
    <div  className='App'>
      <DarkModeContext.Provider value = {{ darkMode, setDarkMode }} >
        <BrowserRouter>
          <Routes>
              <Route path='/login' element= { <AuthLayout> < Login/>   </AuthLayout> } />
              <Route path="/registro" element= { <AuthLayout>  < Registro />  </AuthLayout> } />  
              <Route path="/admin" element={<PrivateLayout> < Admin /> </PrivateLayout>} />
              <Route path="/admin/vehiculos" element={<PrivateLayout> < Vehiculos /> </PrivateLayout>} />
              <Route path="/admin/clientes" element={<PrivateLayout> < Clientes /> </PrivateLayout>} />
              <Route path="/" element={<PublicLayout> < Index /> </PublicLayout>} />   
          </Routes>
        </BrowserRouter>
      </DarkModeContext.Provider >
    </div>
  );
}

export default App;
