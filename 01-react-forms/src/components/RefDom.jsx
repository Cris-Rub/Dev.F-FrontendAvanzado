import React, { useRef, useEffect } from 'react'

const RefDom = () => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus() // Se selecciona el input
    inputRef.current.value = 'Hola mundo'
  }, [])
  console.log(inputRef.current)
  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default RefDom
