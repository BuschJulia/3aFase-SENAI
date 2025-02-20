import React from 'react';
import './Home.css';
import Cubos from '../assets/images/Cubos.png';

function Home() {
  return (
    <div className="container-body">
      <h1>Role os dados, libere sua imaginação!</h1>
      <p>
        No Story Cubes, cada jogada é um convite para criar histórias incríveis. 
        Aventuras épicas, mistérios sobrenaturais ou contos fabulosos – tudo começa com um simples lançamento de dados!
      </p>
      <img className="Cubos" src={Cubos} alt="Cubos de história" />
      <a href="/jogar" className="play-button">JOGAR AGORA</a>
    </div>
  );
}

export default Home;
