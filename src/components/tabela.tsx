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
        background: 'rgb(51, 51, 149)',
        color: 'white',
        borderRadius: '5px'
      }}>

        <th style={{
        display: 'flex',
        width: '100px',
        marginLeft: '20px',
        
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
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>Idade</th>
        
      {exibirAcoes ? <th style={{
        display: 'flex',
        marginRight: '50px'
      }}>Ações</th> : false}  
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
          {exibirAcoes ? RenderizarAções(Cliente) : false}
        </tr>
      )
    })
  }

  function RenderizarAções(Cliente: Cliente) {
    return (
      <td>
      {props.clienteSelecionado? (

         <button onClick={() => props.clienteSelecionado?.(Cliente)} style={{
           background: 'none',
           border: 'None',
           color: 'blue',
           height: '35px',
           width: '35px',
           cursor: 'pointer'
          }}>
          {IconeEdicao}
         </button>

       ) : false }
        
        {props.clienteExcluido? (
        <button onClick={() => props.clienteExcluido?.(Cliente)} style={{
          background: 'rgba(137, 43, 226, 0)',
          border: 'None',
          color: 'red',
          height: '35px',
          width: '35px',
          borderRadius: '30px',
          cursor: 'pointer'
         }}>
          {IconeLixo}
        </button>
        ) : false }

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