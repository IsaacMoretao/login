import Cliente from "../core/cliente"

interface TabelaProps {
  clientes: Cliente[]
}

export default function tabela(props: TabelaProps){
  return (
    <table>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </table>
  )
}