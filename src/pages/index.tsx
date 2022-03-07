import Layout from "../components/Layout"
import Tabela from "../components/tabela"
import Cliente from "../core/cliente"
<link rel="stylesheet" href="stylesheet" />

export default function Home() {

const clientes = [
  new Cliente('Isaac', 17, '1'),
  new Cliente('Jho', 25, '2'),
  new Cliente('nat', 27, '3'),
  new Cliente('Ana', 18, '4'),
]

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh',
      width: '100vh',
      background: 'linear-gradient(to right, rgb(45, 120, 241), hsla(268, 90%, 73%, 0.664))'
    }}>
     <Layout titulo="Cadastro simples">
      
      <Tabela clientes={clientes}></Tabela>
      
     </Layout>
       
    </div>
  )
}