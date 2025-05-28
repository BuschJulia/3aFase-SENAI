import React from 'react';

export default function BotaoProximo({ onClick }) {
  return (
    <button type="button" className="botao-proximo" onClick={onClick}>
      Próximo
    </button>
  );
}
