/**
 * Reglas para crear un hook, solo devuelve comportamiento, no interfaz.
 * Es una función que utiliza otros hooks de React.
 * 1. Siempre debemos usar la palabra 'use' antes del archivo.
 * 2. Siempre deben de ser funciones (para React v16).
 * 3. Siempre debe de usar al menos un hook de React (useState, useEffect, useRef, etc.).
 * 4. Deben de ser reutilizables!! No son para casos especificos.
 */
import { useState, useEffect } from 'react'

function useForm (callback, defaultValues) {
  // Estado unico para guardar los datos del form en un objeto.
  const [input, setInput] = useState(defaultValues)
  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaultValues })
  }, [defaultValues])
  // Funcion que se ejecuta al escuchar algun cambio en un input
  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    // Se compara todo lo que esta en input con el estado unico, si hay algun cambio lo modifica
    setInput({ ...input, [name]: value })
  }
  // Función que se ejecuta cuando se envia el formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    // Funcion que se recibe por parametro
    callback(input)
  }
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
