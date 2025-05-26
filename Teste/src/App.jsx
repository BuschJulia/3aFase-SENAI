import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import IconeUpload from './assets/images/icone-upload.svg';
import Logo from './assets/images/Logo.svg';
import Lupa from './assets/images/Lupa.svg';
import IconeAcessibilidade from './assets/images/Acessibilidade.svg';
import IconeAcessibilidadeAtivo from './assets/images/AcessibilidadeRoxo.svg';

function App() {
  const [tipoEvento, setTipoEvento] = useState('presencial');
  const [abaAtiva, setAbaAtiva] = useState("Informações Básicas");
  const [termoBusca, setTermoBusca] = useState("");
  const [acessibilidadesSelecionadas, setAcessibilidadesSelecionadas] = useState([]);
  const [acessPersonalizadas, setAcessPersonalizadas] = useState([]);
  const [novaAcessibilidade, setNovaAcessibilidade] = useState("");

  function toggleAcessibilidade(id) {
    setAcessibilidadesSelecionadas((prevSelecionadas) =>
      prevSelecionadas.includes(id)
        ? prevSelecionadas.filter((item) => item !== id)
        : [...prevSelecionadas, id]
    );
  }

  function adicionarAcessibilidadePersonalizada() {
    if (novaAcessibilidade.trim() !== "") {
      setAcessPersonalizadas([...acessPersonalizadas, novaAcessibilidade.trim()]);
      setNovaAcessibilidade("");
    }
  }


  return (
    <div className="container-pagina">
      <Sidebar />

      {/* Conteúdo Principal */}
      <main className="conteudo">
        <h1 className="cabecalho-pagina">Criar Novo Evento</h1>

        <div className={`conteudo-evento ${tipoEvento === 'online' ? 'evento-online' : ''}`}>
          <div className="abas-navegacao">
            {["Informações Básicas", "Acessibilidade", "Ingressos", "Pré-visualização"].map((aba) => (
              <button
                key={aba}
                className={`aba ${abaAtiva === aba ? "ativa" : ""}`}
                onClick={() => setAbaAtiva(aba)}
              >
                {aba}
              </button>
            ))}
          </div>

          {/* Aba: Informações Básicas */}
          {abaAtiva === "Informações Básicas" && (
            <div className="conteudo-interno">
              <form className="formulario-evento">

                {/* PRINCIPAL */}
                <h2>Principal</h2>
                <section className="grupo-principal">
                  <label htmlFor="nome-evento">
                    Nome do Evento
                    <input id="nome-evento" className="input-medio" type="text" />
                  </label>
                  <label htmlFor="categoria-evento">
                    Categoria
                    <select id="categoria-evento" className="input-medio">
                      <option value="">Selecione</option>
                      <option value="show">Show / Festival</option>
                      <option value="workshop">Workshop</option>
                      <option value="palestra">Palestra</option>
                      <option value="feira">Feira</option>
                      <option value="congresso">Congresso</option>
                      <option value="infantil">Evento Infantil</option>
                      <option value="religioso">Evento Religioso</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="outros">Outros</option>
                    </select>
                  </label>
                </section>

                {/* Período */}
                <h2>Período do Evento</h2>
                <section className="grupo periodo-evento">
                  <label>
                    Início
                    <input className="input-peq" type="date" />
                  </label>
                  <label>
                    Horário
                    <input className="input-peq" type="time" />
                  </label>
                  <label>
                    Término
                    <input className="input-peq" type="date" />
                  </label>
                  <label>
                    Horário
                    <input className="input-peq" type="time" />
                  </label>
                </section>

                {/* Sobre */}
                <h2>Sobre o evento</h2>
                <section className="grupo descricao">
                  <label>
                    <textarea className="textarea" placeholder="Fale sobre seu evento..."></textarea>
                  </label>
                </section>

                {/* Banner */}
                <h2>Banner do Evento</h2>
                <section className="grupo banner">
                  <label className="upload-banner">
                    <input type="file" hidden />
                    <div className="icone-upload">
                      <img src={IconeUpload} alt="Ícone de upload" />
                    </div>
                    <div className="area-upload">Clique para adicionar</div>
                  </label>
                </section>

                {/* Localização */}
                <h2>Localização do Evento</h2>
                <section className="grupo localizacao">
                  <div className="tipo-evento">
                    <div className="opcao-evento">
                      <input
                        type="radio"
                        name="tipo"
                        value="presencial"
                        checked={tipoEvento === 'presencial'}
                        onChange={() => setTipoEvento('presencial')}
                      />
                      Evento Presencial
                    </div>
                    <div className="opcao-evento">
                      <input
                        type="radio"
                        name="tipo"
                        value="online"
                        checked={tipoEvento === 'online'}
                        onChange={() => setTipoEvento('online')}
                      />
                      Evento Online
                    </div>
                  </div>

                  {tipoEvento === 'presencial' && (
                    <>
                      <label htmlFor="nome-local">
                        Nome do Local
                        <input id="nome-local" className="input-grande" type="text" />
                      </label>

                      <section className="grupo">
                        <div className="linha-endereco">
                          <label>CEP<input type="text" className="input-peq" /></label>
                          <label>UF<input type="text" className="input-peq" /></label>
                          <label>Cidade<input type="text" className="input-peq" /></label>
                          <label>Bairro<input type="text" className="input-peq" /></label>
                        </div>
                        <div className="linha-endereco2">
                          <label>Logradouro<input type="text" className="input-peqMedio" /></label>
                          <label>Complemento<input type="text" className="input-peqMedio" /></label>
                          <label>Número<input type="text" className="input-peq" /></label>
                        </div>
                      </section>
                    </>
                  )}

                  {tipoEvento === 'online' && (
                    <label htmlFor="url-evento">
                      URL do Evento
                      <input
                        id="url-evento"
                        className="input-grande"
                        type="text"
                        placeholder="https://seuevento.com"
                      />
                    </label>
                  )}
                </section>

                {/* Botão */}
                <div className="linha-botao">
                  <button type="submit" className="botao-proximo">
                    Próximo
                  </button>
                </div>
              </form>
            </div>
          )}

          {abaAtiva === "Acessibilidade" && (
            <div className="conteudo-interno">
              <section className="secao-acessibilidade">
                <h2>Acessibilidades Disponíveis</h2>
                <p className="subtitulo">
                  Selecione as opções de acessibilidade disponíveis no seu evento. Isso ajudará pessoas com necessidades específicas a encontrar eventos adequados para elas.
                </p>

                <div className="search-container">
                  <img className="lupa-searchbar" src={Lupa} alt="Ícone de lupa" />
                  <input
                    type="search"
                    id="search-acessibilidade"
                    className="input-pesquisa"
                    placeholder="Buscar acessibilidade..."
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                  />
                </div>

                <div className="grupo-opcoes">
                  {[
                    {
                      id: 1,
                      titulo: 'Banheiro adaptado',
                      descricao: 'Sanitários acessíveis para cadeirantes e pessoas com mobilidade reduzida.',
                      icone: IconeAcessibilidade,
                      iconeAtivo: IconeAcessibilidadeAtivo
                    },
                    {
                      id: 2,
                      titulo: 'Atendimento em Libras',
                      descricao: 'Tradutores de Libras disponíveis durante todo o evento.',
                      icone: IconeAcessibilidade,
                      iconeAtivo: IconeAcessibilidadeAtivo
                    },
                    {
                      id: 3,
                      titulo: 'Área reservada para PCDs',
                      descricao: 'Espaço exclusivo próximo ao palco com acesso facilitado.',
                      icone: IconeAcessibilidade,
                      iconeAtivo: IconeAcessibilidadeAtivo
                    },
                    {
                      id: 4,
                      titulo: 'Áudio descrição',
                      descricao: 'Recursos de narração para pessoas com deficiência visual.',
                      icone: IconeAcessibilidade,
                      iconeAtivo: IconeAcessibilidadeAtivo
                    },
                    {
                      id: 5,
                      titulo: 'Material em braile',
                      descricao: 'Informações impressas em braile disponíveis na entrada.',
                      icone: IconeAcessibilidade,
                      iconeAtivo: IconeAcessibilidadeAtivo
                    },
                    {
                      id: 6,
                      titulo: 'Cão-guia permitido',
                      descricao: 'Espaço pet friendly para cães-guia acompanharem seus donos.',
                      icone: IconeAcessibilidade,
                      iconeAtivo: IconeAcessibilidadeAtivo
                    }
                  ]

                    .filter((opcao) =>
                      opcao.titulo.toLowerCase().includes(termoBusca.toLowerCase())
                    )
                    .map((opcao) => {
                      const selecionado = acessibilidadesSelecionadas.includes(opcao.id);
                      return (
                        <label
                          key={opcao.id}
                          className={`opcao-acessibilidade ${selecionado ? "selecionado" : ""}`}
                          onClick={() => toggleAcessibilidade(opcao.id)}
                        >
                          <input
                            type="checkbox"
                            className="checkbox-acessibilidade"
                            checked={selecionado}
                            onChange={() => toggleAcessibilidade(opcao.id)}
                          />
                          <div className={`icone-wrapper ${selecionado ? "ativo" : ""}`}>
                            <img
                              src={selecionado ? opcao.iconeAtivo : opcao.icone}
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

                <section className="secao-acessibilidade">
                  <h2>Acessibilidades Personalizadas</h2>

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

                    <div className="linha-personalizada">
                      <input
                        type="text"
                        className="input-personalizado"
                        placeholder="Descreva uma acessibilidade..."
                        value={novaAcessibilidade}
                        onChange={(e) => setNovaAcessibilidade(e.target.value)}
                      />
                      <button className="botao-adicionar" onClick={adicionarAcessibilidadePersonalizada}>
                        + Adicionar
                      </button>
                    </div>
                  </div>
                </section>

              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
