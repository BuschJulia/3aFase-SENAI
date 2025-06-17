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

  const [ingressos, setIngressos] = useState([
    { nome: 'Ingresso VIP', valor: 78.9, vendidos: 0, total: 100, taxa: 28.65, visivel: true },
    { nome: 'Ingresso VIP', valor: 78.9, vendidos: 10, total: 100, taxa: 28.65, visivel: false },
    { nome: 'Ingresso VIP', valor: 78.9, vendidos: 77, total: 100, taxa: 28.65, visivel: true },
  ]);

  function toggleVisibilidadeIngresso(index) {
    const novos = [...ingressos];
    novos[index].visivel = !novos[index].visivel;
    setIngressos(novos);
  }

  function adicionarAcessibilidadePersonalizada(e) {
    e.preventDefault();
    if (novaAcessibilidade.trim() !== '') {
      setAcessPersonalizadas([...acessPersonalizadas, novaAcessibilidade.trim()]);
      setNovaAcessibilidade('');
    }
  }

  function irParaAbaAnterior() {
    const ordemAbas = ['Informações Básicas', 'Acessibilidade', 'Ingressos', 'Pré-visualização'];
    const indiceAtual = ordemAbas.indexOf(abaAtiva);
    const anterior = ordemAbas[indiceAtual - 1];
    if (anterior) {
      setAbaAtiva(anterior);
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
              irParaProximaAba={irParaProximaAba}
            />
          )}


          {abaAtiva === 'Ingressos' && (
            <FormIngressos
              ingressos={ingressos}
              setIngressos={setIngressos}
              toggleVisibilidade={toggleVisibilidadeIngresso}
              irParaProximaAba={irParaProximaAba}
              irParaAbaAnterior={irParaAbaAnterior}
            />
          )}

          {abaAtiva === 'Pré-visualização' && (
            <FormPreVisualizacao
              tipoEvento={tipoEvento}
              ingressos={ingressos}
              acessibilidadesSelecionadas={acessibilidadesSelecionadas}
              acessPersonalizadas={acessPersonalizadas}
              irParaAbaAnterior={irParaAbaAnterior}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
