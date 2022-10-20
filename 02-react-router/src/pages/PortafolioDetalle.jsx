import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PortafolioDetalle = () => {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'Un clon de pinterest con HTML y CSS' },
    { id: 2, nombre: 'Cajero', desc: 'Simulador de cajero autómatico con HTML, CSS y JS' },
    { id: 3, nombre: 'Movie Book', desc: 'Consumir la MovieDB y mostrar las peliculas y generos disponibles con HTML, CSS, JS ' }
  ]
  const { pid } = useParams() // ID de proyecto que llega en la ruta
  const navigate = useNavigate() // Cambiar ruta programaticamente

  return (
    <>
      <h3>ID: {proyectos[pid - 1].id}</h3>
      <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
      <h3>Descripcion: {proyectos[pid - 1].desc}</h3>
      <button onClick={() => {
        navigate('/portafolio')
        // Para ir a la pagina anterior se usa navigate(-1)
        // Para la pagina siguiente es navigate(1)
      }}
      >
        Regresar al portafolio
      </button>
    </>
  )
}

export default PortafolioDetalle
