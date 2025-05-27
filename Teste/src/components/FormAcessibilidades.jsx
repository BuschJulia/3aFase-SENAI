import React from 'react';
import Lupa from '../assets/images/Lupa.svg';
import IconeAcessibilidade from '../assets/images/Acessibilidade.svg';
import IconeAcessibilidadeAtivo from '../assets/images/AcessibilidadeRoxo.svg';
import IconeUpload2 from '../assets/images/upload.svg';

function FormAcessibilidades({
  termoBusca,
  setTermoBusca,
  acessibilidadesSelecionadas,
  toggleAcessibilidade,
  acessPersonalizadas,
  adicionarAcessibilidadePersonalizada
}) {
  const opcoes = [
    {
      id: 1,
      titulo: 'Banheiro adaptado',
      descricao: 'Sanitários acessíveis para cadeirantes e pessoas com mobilidade reduzida.',
    },
    {
      id: 2,
      titulo: 'Atendimento em Libras',
      descricao: 'Tradutores de Libras disponíveis durante todo o evento.',
    },
    {
      id: 3,
      titulo: 'Área reservada para PCDs',
      descricao: 'Espaço exclusivo próximo ao palco com acesso facilitado.',
    },
    {
      id: 4,
      titulo: 'Áudio descrição',
      descricao: 'Recursos de narração para pessoas com deficiência visual.',
    },
    {
      id: 5,
      titulo: 'Material em braile',
      descricao: 'Informações impressas em braile disponíveis na entrada.',
    },
    {
      id: 6,
      titulo: 'Cão-guia permitido',
      descricao: 'Espaço pet friendly para cães-guia acompanharem seus donos.',
    }
  ];

  return (
    <div className="conteudo-interno">
      <section className="secao-acessibilidade">
        <h2>Acessibilidades Disponíveis</h2>
        <p className="subtitulo">
          Selecione as opções de acessibilidade disponíveis no seu evento.
        </p>

        <div className="search-container">
          <img className="lupa-searchbar" src={Lupa} alt="Ícone de lupa" />
          <input
            type="search"
            className="input-pesquisa"
            placeholder="Buscar acessibilidade..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>

        <div className="grupo-opcoes">
          {opcoes
            .filter((opcao) =>
              opcao.titulo.toLowerCase().includes(termoBusca.toLowerCase())
            )
            .map((opcao) => {
              const selecionado = acessibilidadesSelecionadas.includes(opcao.id);
              return (
                <label
                  key={opcao.id}
                  className={`opcao-acessibilidade ${selecionado ? 'selecionado' : ''}`}
                  onClick={() => toggleAcessibilidade(opcao.id)}
                >
                  <input
                    type="checkbox"
                    className="checkbox-acessibilidade"
                    checked={selecionado}
                    onChange={() => toggleAcessibilidade(opcao.id)}
                  />
                  <div className={`icone-wrapper ${selecionado ? 'ativo' : ''}`}>
                    <img
                      src={selecionado ? IconeAcessibilidadeAtivo : IconeAcessibilidade}
                      alt={`Ícone para ${opcao.titulo}`}
                    />
                  </div>
                  <div className="texto-acessibilidade">
                    <strong className="titulo-opcao">{opcao.titulo}</strong>
                    <span className="descricao-opcao">{opcao.descricao}</span>
                  </div>
                </label>
              );
            })}
        </div>

        <div className="linha-titulo-e-botao">
          <h2>Acessibilidades Personalizadas</h2>
          <button
            className="botao-adicionar"
            onClick={adicionarAcessibilidadePersonalizada}
          >
            <svg
              className="icone-adicionar"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.64258 7.99905H14.8853M8.26394 1.37769V14.6204"
                stroke="#051B44"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Adicionar
          </button>
        </div>

        <div className="area-personalizada">
          {acessPersonalizadas.length === 0 ? (
            <div className="card-vazio">Nenhuma acessibilidade adicionada</div>
          ) : (
            <ul className="lista-personalizada">
              {acessPersonalizadas.map((item, index) => (
                <li key={index} className="item-personalizado">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="comprovacao-acessibilidade">
          <h2>Comprovação de Acessibilidade</h2>
          <p className="subtitulo">
            Para garantir a autenticidade das acessibilidades oferecidas no evento e evitar
            fraudes, anexe um documento oficial que comprove a acessibilidade do local. Este
            documento pode ser:
          </p>

          <ul>
            <li>
              Laudo Técnico de Acessibilidade emitido por um engenheiro ou arquiteto habilitado.
            </li>
            <li>Certificado de Acessibilidade fornecido por órgãos públicos</li>
            <li>Declaração de Responsabilidade assinada pelo organizador, com evidências visuais do local.</li>
          </ul>

          <p className="subtexto-upload">
            <strong>Importante:</strong> Nossa equipe analisará os documentos enviados e poderá solicitar informações adicionais. <br />
            <strong>Formatos aceitos:</strong> PDF, JPG, PNG <br />
            <strong>Tamanho máximo:</strong> 15MB.
          </p>
          <div className="upload-comprovante">
            <div className="icone-upload2">
            <img src={IconeUpload2} alt="Ícone de upload" />
            </div>
            <p className="texto-upload">Clique ou arraste aqui para enviar o laudo ou comprovante</p>
            <input type="file" className="input-comprovante" accept=".pdf,.jpg,.jpeg,.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormAcessibilidades;
