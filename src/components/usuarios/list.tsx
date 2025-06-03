import { Usuario } from "../../interfaces/usuario.interface";

interface UsariosListagemProps {
  usuarios: Usuario[];
  removerUsuario: (id: number) => void;
  atualizarUsuario: (id: number, usuario: Usuario) => void;
}

export default function List(props: UsariosListagemProps) {
  return (
     <div className="card">
      <div className="card-header">
        Listagem de Usuários
      </div>
      <div className="card-body">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th scope="row">{usuario.id}</th>
              <td> {usuario.username}</td>
              <td> {usuario.role}</td>
              <td>
                <button 
                  className="btn btn-warning"
                  onClick={() => props.removerUsuario(usuario.id)}>
                  Excluir
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => props.atualizarUsuario(usuario.id, usuario)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     </div>
  );
}
