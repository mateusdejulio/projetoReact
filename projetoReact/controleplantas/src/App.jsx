import { useState } from "react";
import FormularioPlanta from "./components/FormularioPlanta";
import CardPlanta from "./components/CardPlanta";

export default function App() {
  const [plantas, setPlantas] = useState([]);

  function adicionarPlanta(novaPlanta) {
    setPlantas((prev) => [...prev, novaPlanta]);
  }

  function deletarPlanta(id) {
    setPlantas((prev) => prev.filter((p) => p.id !== id));
  }

  function alternarRegada(id) {
    setPlantas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, regada: !p.regada } : p))
    );
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <span className="header-icon">🌿</span>
        <div>
          <h1 className="app-title">Water My Plants</h1>
          <p className="app-subtitle">Sua floresta urbana, organizada.</p>
        </div>
      </header>

      <main className="app-main">
        <FormularioPlanta onAdicionarPlanta={adicionarPlanta} />

        <section className="lista-section">
          <h2 className="lista-titulo">
            Suas Plantas  <span className="lista-count">{plantas.length}</span>
          </h2>
          <br></br>
          {plantas.length === 0 ? (
            <div className="lista-vazia">
              <span className="lista-vazia-icon">🪴</span>
              <p>Nenhuma planta cadastrada ainda. Que tal começar a sua floresta urbana?</p>
            </div>
          ) : (
            <div className="cards-grid">
              {plantas.map((planta) => (
                <CardPlanta
                  key={planta.id}
                  planta={planta}
                  onDeletar={deletarPlanta}
                  onAlternarRegada={alternarRegada}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}