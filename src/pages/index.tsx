import Layout from "../components/Layout"
import Tabela from "../components/tabela"
import Cliente from "../core/cliente"
import Botao from "../components/Botao"
import Formulario from "../components/formulario"
import { useState } from "react"
<link rel="stylesheet" href="stylesheet" />


export default function Home() {
   
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

const clientes = [
  new Cliente('Isaac', 17, '1'),
  new Cliente('Jho', 25, '2'),
  new Cliente('nat', 27, '3'),
  new Cliente('Ana', 18, '4'),
]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`cliente:${cliente.nome} exclido HA,HA,HA`)
  }
  
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('form')
  }

  

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh',
      width: '100%',
      background: 'linear-gradient(to right, rgb(45, 120, 241), hsla(268, 90%, 73%, 0.664))',
    }}>
     <Layout titulo="Cadastro simples">
      
      {visivel === 'tabela' ? (
        <>
        <Tabela clientes={clientes} clienteSelecionado=  {clienteSelecionado} clienteExcluido={clienteExcluido}/>

        <Botao cor="blue" onClick={novoCliente}>
          Novo Cliente
          </Botao>
        
        </>
        
      ) : (
      <>
        
        <Formulario
        cliente={cliente}
        clienteMudou={salvarCliente}
        cancelado={() => setVisivel('tabela')}
        />
      </>
      )}

      
        

    </Layout>
    </div>
  )
}