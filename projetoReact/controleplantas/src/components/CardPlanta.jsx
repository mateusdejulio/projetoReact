export default function CardPlanta({ planta, onDeletar, onAlternarRegada }) {
  return (
    <div className={`card ${planta.regada ? "card--regada" : ""}`}>
      <div className="card-header">
        <span className="card-icon">{planta.regada ? "🌱" : "🪴"}</span>
        {planta.regada && <span className="badge-regada">Regada!</span>}
      </div>

      <div className="card-body">
        <h3 className="card-nome">{planta.nome}</h3>
        <p className="card-tipo">{planta.tipo}</p>
        <p className="card-data">Cadastrada em {planta.dataCadastro}</p>
      </div>

      <div className="card-actions">
        <button
          className={`btn-regar ${planta.regada ? "btn-regar--ativa" : ""}`}
          onClick={() => onAlternarRegada(planta.id)}
        >
          {planta.regada ? "💧 Já Regada" : "💧 Regar"}
        </button>

        <button
          className="btn-deletar"
          onClick={() => onDeletar(planta.id)}
          aria-label={`Remover ${planta.nome}`}
        >
          🗑
        </button>
      </div>
    </div>
  );
}