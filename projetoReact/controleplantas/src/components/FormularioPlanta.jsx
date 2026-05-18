import { useState } from "react";

export default function FormularioPlanta({ onAdicionarPlanta }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim() || !tipo.trim()) return;

    const novaPlanta = {
      id: crypto.randomUUID(),
      nome: nome.trim(),
      tipo: tipo.trim(),
      regada: false,
      dataCadastro: new Date().toLocaleDateString("pt-BR"),
    };

    onAdicionarPlanta(novaPlanta);
    setNome("");
    setTipo("");
  }

  return (
    <div className="formulario-card">
      <h2 className="formulario-titulo">Cadastrar Nova Planta</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo-grupo">
          <label className="campo-label" htmlFor="nome">
            Nome da Planta
          </label>
          <input
            id="nome"
            className="campo-input"
            type="text"
            placeholder="Ex: Samambaia da Varanda"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="campo-grupo">
          <label className="campo-label" htmlFor="tipo">
            Tipo / Espécie
          </label>
          <input
            id="tipo"
            className="campo-input"
            type="text"
            placeholder="Ex: Nephrolepis exaltata"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>

        <button className="btn-cadastrar" type="submit">
          + Adicionar Planta
        </button>
      </form>
    </div>
  );
}