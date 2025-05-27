import React from 'react'

function Floatingbar() {
  return (
    <div className="abas-navegacao">
    {['Informações Básicas', 'Acessibilidade', 'Ingressos', 'Pré-visualização'].map((aba) => (
      <button
        key={aba}
        className={`aba ${abaAtiva === aba ? 'ativa' : ''}`}
        onClick={() => handleTrocarAba(aba)}
      >
        {aba}
      </button>
    ))}
  </div>
  )
}

export default Floatingbar