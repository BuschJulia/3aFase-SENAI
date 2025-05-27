import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import './FormIngressos.css'; 

function FormIngressos() {
  const [ingressos, setIngressos] = useState([
    { nome: 'Ingresso VIP', valor: 78.9, vendidos: 0, total: 100, taxa: 28.65, visivel: true },
    { nome: 'Ingresso VIP', valor: 78.9, vendidos: 10, total: 100, taxa: 28.65, visivel: false },
    { nome: 'Ingresso VIP', valor: 78.9, vendidos: 77, total: 100, taxa: 28.65, visivel: true },
  ]);

  const toggleVisibilidade = (index) => {
    const novos = [...ingressos];
    novos[index].visivel = !novos[index].visivel;
    setIngressos(novos);
  };

  return (
    <div className="form-ingressos">
      <div className="cabecalho-ingressos">
        <h2>Que tipo de ingresso você deseja criar?</h2>
        <div className="botoes-tipo-ingresso">
          <button className="botao-pago">+ Ingresso Pago</button>
          <button className="botao-gratuito">+ Ingresso Gratuito</button>
        </div>
      </div>

      <table className="tabela-ingressos">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor a receber</th>
            <th>Vendidos/Total</th>
            <th>Taxa</th>
            <th>Visibilidade do Ingresso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ingressos.map((ingresso, index) => (
            <tr key={index}>
              <td>{ingresso.nome}</td>
              <td>R$ {ingresso.valor.toFixed(2)}</td>
              <td>
                {ingresso.vendidos} / {ingresso.total}
                <div className="barra-progresso">
                  <div
                    className="barra-preenchida"
                    style={{
                      width: `${(ingresso.vendidos / ingresso.total) * 100}%`,
                    }}
                  ></div>
                </div>
              </td>
              <td>R$ {ingresso.taxa.toFixed(2)}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={ingresso.visivel}
                    onChange={() => toggleVisibilidade(index)}
                  />
                  <span className="slider" />
                </label>
                <span className={`texto-visivel ${ingresso.visivel ? 'visivel' : 'oculto'}`}>
                  {ingresso.visivel ? 'VISÍVEL' : 'OCULTO'}
                </span>
              </td>
              <td className="acoes">
                <button><FiEdit /></button>
                <button><FiTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="navegacao-ingressos">
        <button className="botao-anterior amarelo">Anterior</button>
        <button className="botao-proximo roxo">Próximo</button>
      </div>
    </div>
  );
}

export default FormIngressos;
