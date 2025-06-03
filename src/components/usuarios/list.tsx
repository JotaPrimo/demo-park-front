import { Usuario } from "../../interfaces/usuario.interface"


interface UsariosListagemProps {
    usuarios: Usuario[],
    removerUsuario: (id: number) => void,
    atualizarUsuario: (id: number, usuario: Usuario) => void
}

export default function List(props: UsariosListagemProps) {
    return (
        <div>
        <ul>
          {props.usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.username}
              <button onClick={() => props.removerUsuario(usuario.id)}>
                Excluir
              </button>
              <button onClick={() => props.atualizarUsuario(usuario.id, usuario)}>
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
}