import React from 'react'
import './Header.css'
import Logo from '../assets/images/Logo.png'

function Header() {
  return (
    <div className='container-header'>
        <img className='Logo' src={Logo} alt="logo" />
        <p>Sobre Nós</p>
        <p>Projetos</p>
        <p>Contato</p>
        <p>Valores</p>
    </div>
  )
}

export default Header