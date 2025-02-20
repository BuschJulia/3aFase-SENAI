// src/pages/OQueE.js
import React from 'react';
import { Link } from 'react-router-dom';
import './OQueE.css'; // Adicionando o CSS da página

function OQueE() {
  return (
    <div className="container-o-que-e">
      <h1>O que é Story Cubes?</h1>
      <p>
        Story Cubes é um jogo criativo onde a única regra é usar a sua imaginação! 
        Através de dados com imagens, você cria histórias únicas e se diverte com amigos e familiares. 
        O jogo pode ser jogado por qualquer pessoa e a cada rodada uma nova história nasce.
      </p>
      <div className="detalhes">
        <h2>Como funciona?</h2>
        <p>
          Você rola os cubos e cria uma história baseada nas imagens que aparecem. 
          Pode ser uma aventura, uma fábula, uma história engraçada, ou até mesmo uma mistura maluca de tudo isso!
        </p>
      </div>
      
      {/* Botão direcionando para a página "Como Jogar" */}
      <div className="botaozinho">
        <Link to="/como-jogar">
          <button className="botaozinho">Como Jogar</button>
        </Link>
      </div>
    </div>
  );
}

export default OQueE;
