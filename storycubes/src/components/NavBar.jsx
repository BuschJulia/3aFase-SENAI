import React from 'react';
import { useLocation } from 'react-router-dom';  // Importa useLocation
import Logo from '../assets/images/Logo.png';
import './NavBar.css';

function Navbar() {
  const location = useLocation();  // Obtém a localização atual da URL
  
  // Verifica se estamos na página "Como Jogar"
  const isComoJogarPage = location.pathname === '/como-jogar';

  return (
    <div className={`container-navbar ${isComoJogarPage ? 'com-fundo' : ''}`}> {/* Condição para adicionar a classe 'com-fundo' */}
      <img src={Logo} alt="Logo Story Cubes" className="logo" />
      <div className="nav-links">
        <a href="/como-jogar">Como Jogar</a>
        <a href="/o-que-e">O que é?</a>
        <a href="/">Página inicial</a>
        <a href="/jogar">Jogar</a>
      </div>
    </div>
  );
}

export default Navbar;
