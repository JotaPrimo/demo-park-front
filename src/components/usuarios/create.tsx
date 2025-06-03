interface CreateProps {
  adicionarUsuario: () => void;
}

export default function Create(props: CreateProps) {
  return (
    <div className="row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      <div className="col-1">
        <button className="btn btn-primary">Salvar</button>
      </div>      
    </div>
  );
}
