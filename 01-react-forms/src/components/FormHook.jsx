import React, { useState, useEffect } from 'react'
import useForm from '../hooks/useForm.jsx'
import logo from '../assets/react.svg'

const FormHook = () => {
  // Paso 1. Crear unico estado con toda la información en forma de obj.
  const [data, setData] = useState({
    name: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    password: ''
  })
  const sendData = (data) => {
    console.log(data)
  }
  // Paso 4: uso de customHook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, data)
  // Paso 2: Simular peticion de una API para llenar la información
  useEffect(() => {
    setTimeout(() => { // Ejecuta todo lo que esta adentro despues de los mls puestos
      // Información a guardar
      const info = {
        name: 'Cristopher',
        lastName: 'Rubio',
        age: 20,
        gender: 'M',
        email: 'held.ruo@gmail.com',
        password: 'contraseñaSegura'
      }
      setData(info)
    }, 2000)
  }, [])

  // Paso 3: Crear formulario con JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='Logo' width='200px' height='200px' />
        <form>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            id='userName'
            onChange={handleInputChange}
            value={input.name}
          />
          <label htmlFor='lastName'>Last name</label>
          <input
            type='text'
            name='lastName'
            placeholder='Your last name'
            id='userLastName'
            onChange={handleInputChange}
            value={input.lastName}
          />
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            name='age'
            placeholder='Your age'
            id='age'
            onChange={handleInputChange}
            value={input.age}
          />
          <label htmlFor='gender'>Gender</label>
          <select name='gender' id='gender' onChange={handleInputChange} value={input.gender}>
            <option value=''>Your gender</option>
            <option value='m'>Male</option>
            <option value='f'>Female</option>
            <option value='o'>Other</option>
          </select>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@correo.com'
            id='email'
            onChange={handleInputChange}
            value={input.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='correo@correo.com'
            id='password'
            onChange={handleInputChange}
            value={input.password}
          />
          <button onClick={handleSubmit}>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

export default FormHook
