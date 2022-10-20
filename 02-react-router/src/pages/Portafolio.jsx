import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to='/portafolio/1'>Pintagram</Link>
          </li>
          <li>
            <Link to='/portafolio/2'>Cajero</Link>
          </li>
          <li>
            <Link to='/portafolio/3'>Movie Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Portafolio
