import Cliente from "../core/cliente";
import {IconeEdicao, IconeLixo} from "./icons";


interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (Cliente: Cliente) => void
  clienteExcluido?: (Cliente: Cliente) => void
}

export default function tabela(props: TabelaProps){

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarCabesalho() {
  return (
    
      <tr style={{
        display: 'flex',
        justifyContent: 'spaceAround',
        background: 'rgb(51, 51, 149)'
      }}>

        <th style={{
        display: 'flex',
        width: '100px',
        marginLeft: '40px',
        
      }}>Código</th>

        <th style={{
        display: 'flex',
        width: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>Nome</th>

        <th style={{
        display: 'flex',
        width: '100px',
      }}>Idade</th>
        
       {exibirAcoes ? <th>Ações</th> : false} 
      </tr>
    
  )}

  function renderizarDados() {
    return props.clientes?.map((Cliente, i) =>{
      return(
        <tr key={Cliente.id} style={{ 
         display: 'flex',
         width: '70vh',
         justifyContent: 'space-around',
        }}>
          <td >{Cliente.id}</td>
          <td >{Cliente.nome}</td>
          <td >{Cliente.idade}</td>
          {RenderizarAções(Cliente)}
        </tr>
      )
    })
  }

  function RenderizarAções(Cliente: Cliente) {
    return (
      <td>
      {props.clienteSelecionado ? (
        <button style={{

         }}>
          {IconeEdicao}
        </button>

      ) : false}
       

       {props.clienteExcluido ? (
      
        <button>
          {IconeLixo}
        </button>

      ) : false}

      </td>
    )
  }

  return (
    <table>
      <thead>

        {renderizarCabesalho()}

      </thead>
      <tbody>

        {renderizarDados()}

      </tbody>
    </table>
  )


}