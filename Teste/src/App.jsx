import { useState, useEffect } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';

import FormInfoBasicas from './components/FormInfoBasicas';
import FormAcessibilidades from './components/FormAcessibilidades';
import FormIngressos from './components/FormIngressos';
import FormPreVisualizacao from './components/FormPreVisualizacao';

function App() {
  const [abaAtiva, setAbaAtiva] = useState(() => localStorage.getItem('abaAtiva') || 'Informações Básicas');
  const [tipoEvento, setTipoEvento] = useState('presencial');

  // Acessibilidade
  const [termoBusca, setTermoBusca] = useState('');
  const [acessibilidadesSelecionadas, setAcessibilidadesSelecionadas] = useState([]);
  const [acessPersonalizadas, setAcessPersonalizadas] = useState([]);
  const [novaAcessibilidade, setNovaAcessibilidade] = useState('');

  useEffect(() => {
    localStorage.setItem('abaAtiva', abaAtiva);
  }, [abaAtiva]);

  function toggleAcessibilidade(id) {
    setAcessibilidadesSelecionadas((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  function adicionarAcessibilidadePersonalizada(e) {
    e.preventDefault();
    if (novaAcessibilidade.trim() !== '') {
      setAcessPersonalizadas([...acessPersonalizadas, novaAcessibilidade.trim()]);
      setNovaAcessibilidade('');
    }
  }

  function irParaProximaAba() {
    const ordemAbas = ['Informações Básicas', 'Acessibilidade', 'Ingressos', 'Pré-visualização'];
    const indiceAtual = ordemAbas.indexOf(abaAtiva);
    const proxima = ordemAbas[indiceAtual + 1];
    if (proxima) {
      setAbaAtiva(proxima);
    }
  }

  return (
    <div className="container-pagina">
      <Sidebar />

      <main className="conteudo">
        <h1 className="cabecalho-pagina">Criar Novo Evento</h1>

        <div className={`conteudo-evento ${tipoEvento === 'online' ? 'evento-online' : ''}`}>
          <Tabs abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

          {abaAtiva === 'Informações Básicas' && (
            <FormInfoBasicas
              tipoEvento={tipoEvento}
              setTipoEvento={setTipoEvento}
              irParaProximaAba={irParaProximaAba}
            />
          )}

          {abaAtiva === 'Acessibilidade' && (
            <FormAcessibilidades
              termoBusca={termoBusca}
              setTermoBusca={setTermoBusca}
              acessibilidadesSelecionadas={acessibilidadesSelecionadas}
              toggleAcessibilidade={toggleAcessibilidade}
              acessPersonalizadas={acessPersonalizadas}
              adicionarAcessibilidadePersonalizada={adicionarAcessibilidadePersonalizada}
            />
          )}

          {abaAtiva === 'Ingressos' && <FormIngressos />}
          {abaAtiva === 'Pré-visualização' && <FormPreVisualizacao />}
        </div>
      </main>
    </div>
  );
}

export default App;
