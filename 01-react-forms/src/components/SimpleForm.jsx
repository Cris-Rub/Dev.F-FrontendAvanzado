import React, { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 1. Crear estados para guardar la información que tecleamos
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Paso 4. Manejar la información cuando se envie el formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    // Formateamos a JSON
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData) // Se mandaria la información a la API
  }
  // Paso 2. Crear formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='Logo' width='200px' height='200px' />
        <form onSubmit={handleSubmit}>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@correo.com' id='email' onChange={(event) => { setEmail(event.target.value) }} />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='correo@correo.com' id='password' onChange={(event) => { setPassword(event.target.value) }} />
          <button>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
