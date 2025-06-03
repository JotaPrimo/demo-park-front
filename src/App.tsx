import "./App.css";
import { Usuario } from "./interfaces/usuario.interface";

import {
  getUsuarios,
  deleteUsuario,
  createUsuario,
} from "./services/usuarioService";
import { useEffect, useState } from "react";

// imports de usuario
import List from "./components/usuarios/list";
import Create from "./components/usuarios/create";

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Função reutilizável para carregar usuários
  const carregarUsuarios = () => {
    getUsuarios()
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error(error));
  };

  // useEffect só chama a função uma vez ao montar
  useEffect(() => {
    carregarUsuarios();
  }, []);

  function adicionarUsuario(user: Usuario) {
    createUsuario(user)
      .then((res) => carregarUsuarios)
      .catch((err) => console.error(err));
  }

  function removerUsuario(id: number) {
    deleteUsuario(id)
      .then((res) => {
        alert("usuário deletado com sucesso");
        carregarUsuarios();
      })
      .catch((err) => console.error(err));
  }

  function atualizarUsuario(id: number) {
    alert("atualizarUsuario");
  }

  return (
    <div className="App">
      <div>
        <h1>Lista de usuários</h1>
        <Create adicionarUsuario={() => adicionarUsuario} />
        <hr />
      </div>

      <List
        usuarios={usuarios}
        removerUsuario={() => removerUsuario}
        atualizarUsuario={() => atualizarUsuario}
      />
    </div>
  );
}

export default App;
