import React from 'react';
import './FormPreVisualizacao.css'; 

function FormPreVisualizacao() {
  return (
    <div className="form-previsualizacao">
      <div className="banner-evento" />

      <div className="info-evento">
        <div className="col-esquerda">
          <h2>Nome do Evento</h2>
          <p>📅 Data &nbsp;&nbsp; 📍 Localização</p>

          <div className="distribuido-por">
            Distribuído por <strong>Nome da Empresa</strong> ⭐⭐⭐⭐
            <button className="botao-visitar">Visitar</button>
          </div>

          <div className="simbolos-acessibilidade">
            <h4>Símbolos de Acessibilidade Disponíveis</h4>
            <div className="acess-lista">
              <span>Nome da Acessibilidade</span>
              {/* renderizar os símbolos dinamicamente depois */}
            </div>
          </div>

          <div className="local-evento">
            <h4>Local</h4>
            <p>Nome do local<br />Especificação do local</p>
            <button className="ver-no-mapa">Ver no Mapa</button>
          </div>

          <div className="descricao-evento">
            <h4>Sobre o evento</h4>
            <p>
              Descrição teste do evento evento para preencher o espaço em branco, isso vai se repetir...
              <span className="ver-mais"> Ver mais ▼</span>
            </p>
          </div>

          <button className="botao-anterior amarelo">Anterior</button>
        </div>

        <div className="col-direita">
          <div className="box-compra">
            <h3>Nome do Evento</h3>
            <p>Nome do ingresso</p>
            <p><strong>R$ 00,00</strong></p>
            <p>Total</p>
            <button className="botao-comprar">Comprar agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPreVisualizacao;
