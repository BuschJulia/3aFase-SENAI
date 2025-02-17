import React from 'react'
import Logo from '../assets/images/Logo.png'

function Navbar() {
  return (
    <div className='container-navbar'>
        <img src={Logo} alt="Logo Story Cubes" />
        <div className="header">
            <a href="">Como Jogar</a>
            <a href="">O que é?</a>
            <a href="">Página inicial</a>
            <a href="">Jogar</a>
        </div>
    </div>
  )
}

export default Navbar