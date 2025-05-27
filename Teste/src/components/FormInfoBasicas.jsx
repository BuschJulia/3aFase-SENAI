import React, { useState } from 'react';
import IconeUpload from '../assets/images/icone-upload.svg';

function FormInfoBasicas({ tipoEvento, setTipoEvento, irParaProximaAba }) {
  const [bannerUrl, setBannerUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerUrl(imageUrl);
    }
  };

  return (
    <div className="conteudo-interno">
      <form className="formulario-evento">
        <h2>Principal</h2>
        <section className="grupo-principal">
          <label>
            Nome do Evento
            <input className="input-medio" type="text" />
          </label>
          <label>
            Categoria
            <select className="input-medio">
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

        <h2>Sobre o evento</h2>
        <section className="grupo descricao">
          <label>
            <textarea className="textarea" placeholder="Fale sobre seu evento..."></textarea>
          </label>
        </section>

        <h2>Banner do Evento</h2>
        <section className="grupo banner">
          <label
            className="upload-banner"
            style={{
              backgroundImage: bannerUrl ? `url(${bannerUrl})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: bannerUrl ? 'transparent' : 'white',
              cursor: 'pointer',
            }}
          >
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
            {!bannerUrl && (
              <>
                <div className="icone-upload">
                  <img src={IconeUpload} alt="Ícone de upload" />
                </div>
                <div className="area-upload">Clique para adicionar</div>
              </>
            )}
          </label>
        </section>

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
              <label>
                Nome do Local
                <input className="input-grande" type="text" />
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
            <label>
              URL do Evento
              <input
                className="input-grande"
                type="text"
                placeholder="https://seuevento.com"
              />
            </label>
          )}
        </section>

        <div className="linha-botao">
          <button
            type="button"
            className="botao-proximo"
            onClick={irParaProximaAba}
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormInfoBasicas;
