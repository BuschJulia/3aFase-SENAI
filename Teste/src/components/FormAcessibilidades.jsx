import React, { useState } from 'react';
import BotaoProximo from './BotaoProximo';
import Lupa from '../assets/images/Lupa.svg';
import IconeAcessibilidade from '../assets/images/Acessibilidade.svg';
import IconeAcessibilidadeAtivo from '../assets/images/AcessibilidadeRoxo.svg';
import IconeUpload2 from '../assets/images/upload.svg';
import './FormAcessibilidades.css';

function ModalAcessibilidadePersonalizada({ onClose, onAdicionar }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAdicionar = () => {
    if (titulo.trim() !== '' && descricao.trim() !== '') {
      onAdicionar({ titulo, descricao });
      setTitulo('');
      setDescricao('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="fechar-modal" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1L10.9992 10.9992" stroke="#574CD5" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 10.999L10.9992 0.999774" stroke="#574CD5" strokeWidth="2" strokeLinecap="round" />
        </svg></button>
        <h2>Adicionar nova Acessibilidade</h2>

        <label>Nome da acessibilidade</label>
        <input
          className='input-acessibilidade'
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ex: Atendimento prioritário"
        />

        <label>Descrição</label>
        <textarea
          className='input-acessibilidade2'
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva a acessibilidade..."
        />

        <div className="botoes-modal">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-adicionar" onClick={handleAdicionar}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}

function FormAcessibilidades({ termoBusca, setTermoBusca, acessibilidadesSelecionadas, toggleAcessibilidade }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [acessPersonalizadas, setAcessPersonalizadas] = useState([]);

  const opcoes = [
    { id: 1, titulo: 'Banheiro adaptado', descricao: 'Sanitários acessíveis para cadeirantes e pessoas com mobilidade reduzida.' },
    { id: 2, titulo: 'Atendimento em Libras', descricao: 'Tradutores de Libras disponíveis durante todo o evento.' },
    { id: 3, titulo: 'Área reservada para PCDs', descricao: 'Espaço exclusivo próximo ao palco com acesso facilitado.' },
    { id: 4, titulo: 'Áudio descrição', descricao: 'Recursos de narração para pessoas com deficiência visual.' },
    { id: 5, titulo: 'Material em braile', descricao: 'Informações impressas em braile disponíveis na entrada.' },
    { id: 6, titulo: 'Cão-guia permitido', descricao: 'Espaço pet friendly para cães-guia acompanharem seus donos.' }
  ];

  const adicionarAcessibilidadePersonalizada = (nova) => {
    setAcessPersonalizadas((prev) => [...prev, nova]);
    setMostrarModal(false);
  };

  return (
    <div className="conteudo-interno">
      <section className="secao-acessibilidade">
        <h2>Acessibilidades Disponíveis</h2>
        <p className="subtitulo">Selecione as opções de acessibilidade disponíveis no seu evento.</p>

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
            .filter((opcao) => opcao.titulo.toLowerCase().includes(termoBusca.toLowerCase()))
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
          <button className="botao-adicionar" onClick={() => setMostrarModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.64258 7.99905H14.8853M8.26394 1.37769V14.6204" stroke="#051B44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                  <div className={`opcao-acessibilidade personalizado`}>
                    <div className="icone-wrapper ativo">
                      <img src={IconeAcessibilidade} alt="Ícone acessibilidade" className="icone-acess" />
                    </div>
                    <div className="texto-acessibilidade">
                      <strong className="titulo-opcao">{item.titulo}</strong>
                      <span className="descricao-opcao">{item.descricao}</span>
                    </div>
                    <div className="botoes-card">
                      <button className="btn-editar" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                        <rect x="0.785156" y="0.529785" width="48.9292" height="48.9292" rx="7.5" fill="white" stroke="#CDD1DB" />
                        <path d="M25.1955 14.8906H17.5767C16.1741 14.8906 15.0371 16.0276 15.0371 17.4302V32.6678C15.0371 34.0702 16.1741 35.2073 17.5767 35.2073H32.8142C34.2168 35.2073 35.3538 34.0702 35.3538 32.6678V25.049M33.3402 20.4957L34.7189 19.1171C35.7106 18.1253 35.7106 16.5173 34.7189 15.5256C33.7271 14.5338 32.1191 14.5338 31.1273 15.5256L29.7487 16.9042M33.3402 20.4957L25.6753 28.1606C25.3208 28.5152 24.8693 28.7569 24.3777 28.8552L20.6423 29.6022L21.3893 25.8669C21.4877 25.3752 21.7293 24.9237 22.0838 24.5691L29.7487 16.9042M33.3402 20.4957L29.7487 16.9042" stroke="#051B44" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></button>
                      <button className="btn-deletar" title="Excluir"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                        <rect x="1.29102" y="0.529785" width="48.9292" height="48.9292" rx="7.5" fill="white" stroke="#CDD1DB" />
                        <path d="M16.6777 18.186H34.8338M30.2948 18.186L29.9877 17.2647C29.6901 16.3718 29.5412 15.9254 29.2652 15.5953C29.0215 15.3039 28.7085 15.0783 28.3549 14.9392C27.9545 14.7817 27.484 14.7817 26.5428 14.7817H24.9687C24.0275 14.7817 23.5571 14.7817 23.1566 14.9392C22.8031 15.0783 22.49 15.3039 22.2463 15.5953C21.9703 15.9254 21.8215 16.3718 21.5239 17.2647L21.2168 18.186M32.5643 18.186V29.7605C32.5643 31.6671 32.5643 32.6203 32.1932 33.3486C31.8669 33.9892 31.3462 34.5099 30.7056 34.8363C29.9773 35.2073 29.0241 35.2073 27.1175 35.2073H24.3941C22.4875 35.2073 21.5342 35.2073 20.806 34.8363C20.1655 34.5099 19.6447 33.9892 19.3183 33.3486C18.9472 32.6203 18.9472 31.6671 18.9472 29.7605V18.186M28.0253 22.725V30.6683M23.4863 22.725V30.6683" stroke="#051B44" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></button>
                    </div>                  
                    </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="comprovacao-acessibilidade">
          <h2>Comprovação de Acessibilidade</h2>
          <p className="subtitulo">
            Para garantir a autenticidade das acessibilidades oferecidas no evento e evitar fraudes, anexe um documento oficial que comprove a acessibilidade do local.
          </p>
          <ul>
            <li>Laudo Técnico de Acessibilidade emitido por um engenheiro ou arquiteto habilitado.</li>
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

        {mostrarModal && (
          <ModalAcessibilidadePersonalizada
            onClose={() => setMostrarModal(false)}
            onAdicionar={adicionarAcessibilidadePersonalizada}
          />
        )}
      </section>
    </div>
    
  );
}

export default FormAcessibilidades;

import React, { useState } from 'react';
import Lupa from '../assets/images/Lupa.svg';
import IconeAcessibilidade from '../assets/images/Acessibilidade.svg';
import IconeAcessibilidadeAtivo from '../assets/images/AcessibilidadeRoxo.svg';
import IconeUpload2 from '../assets/images/upload.svg';
import './FormAcessibilidades.css';

function ModalAcessibilidadePersonalizada({ onClose, onAdicionar, dadosIniciais }) {
  const [titulo, setTitulo] = useState(dadosIniciais?.titulo || '');
  const [descricao, setDescricao] = useState(dadosIniciais?.descricao || '');

  const handleAdicionar = () => {
    if (titulo.trim() !== '' && descricao.trim() !== '') {
      onAdicionar({ titulo, descricao });
      setTitulo('');
      setDescricao('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="fechar-modal" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L10.9992 10.9992" stroke="#574CD5" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 10.999L10.9992 0.999774" stroke="#574CD5" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h2>{dadosIniciais ? 'Editar Acessibilidade' : 'Adicionar nova Acessibilidade'}</h2>

        <label>Nome da acessibilidade</label>
        <input
          className="input-acessibilidade"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ex: Atendimento prioritário"
        />

        <label>Descrição</label>
        <textarea
          className="input-acessibilidade2"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva a acessibilidade..."
        />

        <div className="botoes-modal">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-adicionar" onClick={handleAdicionar}>
            {dadosIniciais ? 'Salvar' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}

function FormAcessibilidades({ termoBusca, setTermoBusca, acessibilidadesSelecionadas, toggleAcessibilidade }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [acessPersonalizadas, setAcessPersonalizadas] = useState([]);
  const [itemEditando, setItemEditando] = useState(null);

  const opcoes = [
    { id: 1, titulo: 'Banheiro adaptado', descricao: 'Sanitários acessíveis para cadeirantes e pessoas com mobilidade reduzida.' },
    { id: 2, titulo: 'Atendimento em Libras', descricao: 'Tradutores de Libras disponíveis durante todo o evento.' },
    { id: 3, titulo: 'Área reservada para PCDs', descricao: 'Espaço exclusivo próximo ao palco com acesso facilitado.' },
    { id: 4, titulo: 'Áudio descrição', descricao: 'Recursos de narração para pessoas com deficiência visual.' },
    { id: 5, titulo: 'Material em braile', descricao: 'Informações impressas em braile disponíveis na entrada.' },
    { id: 6, titulo: 'Cão-guia permitido', descricao: 'Espaço pet friendly para cães-guia acompanharem seus donos.' }
  ];

  const adicionarOuEditarAcessibilidadePersonalizada = (item) => {
    if (itemEditando !== null) {
      // editar
      setAcessPersonalizadas((prev) =>
        prev.map((acc, i) => (i === itemEditando.index ? item : acc))
      );
      setItemEditando(null);
    } else {
      // adicionar novo
      setAcessPersonalizadas((prev) => [...prev, item]);
    }
    setMostrarModal(false);
  };

  const editarAcessibilidade = (index) => {
    setItemEditando({ index, ...acessPersonalizadas[index] });
    setMostrarModal(true);
  };

  const deletarAcessibilidade = (index) => {
    setAcessPersonalizadas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="conteudo-interno">
      <section className="secao-acessibilidade">
        <h2>Acessibilidades Disponíveis</h2>
        <p className="subtitulo">Selecione as opções de acessibilidade disponíveis no seu evento.</p>

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
            .filter((opcao) => opcao.titulo.toLowerCase().includes(termoBusca.toLowerCase()))
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
          <button className="botao-adicionar" onClick={() => {
            setItemEditando(null);
            setMostrarModal(true);
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.64258 7.99905H14.8853M8.26394 1.37769V14.6204" stroke="#051B44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                  <div className={`opcao-acessibilidade personalizado`}>
                    <div className="icone-wrapper ativo">
                      <img src={IconeAcessibilidade} alt="Ícone acessibilidade" className="icone-acess" />
                    </div>
                    <div className="texto-acessibilidade">
                      <strong className="titulo-opcao">{item.titulo}</strong>
                      <span className="descricao-opcao">{item.descricao}</span>
                    </div>
                    <div className="botoes-card">
                      <button
                        className="btn-editar"
                        title="Editar"
                        onClick={() => editarAcessibilidade(index)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                          <rect x="0.785156" y="0.529785" width="48.9292" height="48.9292" rx="7.5" fill="white" stroke="#CDD1DB" />
                          <path d="M25.1955 14.8906H17.5767C16.1741 14.8906 15.0371 16.0276 15.0371 17.4302V32.6678C15.0371 34.0702 16.1741 35.2073 17.5767 35.2073H32.8142C34.2168 35.2073 35.3538 34.0702 35.3538 32.6678V25.049M33.3402 20.4957L34.7189 19.1171C35.7106 18.1253 35.7106 16.5173 34.7189 15.5256C33.7271 14.5338 32.1191 14.5338 31.1273 15.5256L29.7487 16.9042M33.3402 20.4957L25.6753 28.1606C25.3208 28.5152 24.8693 28.7569 24.3777 28.8552L20.6423 29.6022L21.3893 25.8669C21.4877 25.3752 21.7293 24.9237 22.0838 24.5691L29.7487 16.9042M33.3402 20.4957L29.7487 16.9042" stroke="#051B44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        className="btn-deletar"
                        title="Excluir"
                        onClick={() => deletarAcessibilidade(index)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <rect x="1" y="1" width="48" height="48" rx="7" fill="white" stroke="#CDD1DB" />
                          <path d="M31.0053 18.2477L18.9947 29.7589M31.0053 29.7589L18.9947 18.2477" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {mostrarModal && (
        <ModalAcessibilidadePersonalizada
          onClose={() => {
            setMostrarModal(false);
            setItemEditando(null);
          }}
          onAdicionar={adicionarOuEditarAcessibilidadePersonalizada}
          dadosIniciais={itemEditando}
        />
      )}
    </div>
  );
}

export default FormAcessibilidades;
