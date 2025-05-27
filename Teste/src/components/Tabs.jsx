import React from 'react';
import './Tabs.css';

function Tabs({ abaAtiva, setAbaAtiva }) {
  const abas = ['Informações Básicas', 'Acessibilidade', 'Ingressos', 'Pré-visualização'];

  return (
    <div className="abas-navegacao">
      {abas.map((aba) => (
        <button
          key={aba}
          className={`aba ${abaAtiva === aba ? 'ativa' : ''}`}
          onClick={() => setAbaAtiva(aba)}
        >
          {aba}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
