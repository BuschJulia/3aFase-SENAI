import React from 'react';
import './ComoJogar.css';
import Tutorial1 from '../assets/images/Tutorial1.jpeg'
import Tutorial from '../assets/images/Tutorial.jpeg'

function ComoJogar() {
  return (
    <div className="container-ComoJogar">
      <div className="cabecalho">
        <h1>Como jogar Story Cubes?</h1>
        <p>
          O Story Cubes é um jogo de dados criativo onde a imaginação é a única regra!
          Aqui estão os passos para começar:
        </p>
      </div>

      <div className="passos">
        <div className="passo">
          <img className='tutorial-jogo' src={Tutorial1} alt="" />
          <img className='tutorial-jogo' src={Tutorial} alt="" />

          <button className="botao-jogar">Jogar Agora</button>
        </div>
      </div>
    </div>
  );
}

export default ComoJogar;
