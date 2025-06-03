
interface CreateProps {
  adicionarUsuario: () => void;
}


export default function Create(props: CreateProps) {
  return (
    <div>
      <input type="email" placeholder="Informe o email/username" />
      <input type="password" placeholder="Informe a password" />
      <button onClick={() => props.adicionarUsuario}>Salvar</button>
    </div>
  );
}
