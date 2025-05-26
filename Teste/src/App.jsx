import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import IconeUpload from './assets/images/icone-upload.svg';
import Logo from './assets/images/Logo.svg';

function App() {
  const [tipoEvento, setTipoEvento] = useState('presencial');
  const [abaAtiva, setAbaAtiva] = useState("Informações Básicas");

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
                {/* Principal */}
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
                <h2>Inclua recursos de acessibilidade</h2>
                <p className="subtitulo">Selecione os recursos disponíveis no seu evento</p>

                <div className="grupo-opcoes">
                  <label className="opcao-acessibilidade">
                    <input type="checkbox" />
                    Acesso para cadeirantes
                  </label>
                  <label className="opcao-acessibilidade">
                    <input type="checkbox" />
                    Banheiro adaptado
                  </label>
                  <label className="opcao-acessibilidade">
                    <input type="checkbox" />
                    Atendimento em Libras
                  </label>
                  <label className="opcao-acessibilidade">
                    <input type="checkbox" />
                    Área reservada para PCDs
                  </label>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
