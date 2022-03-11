import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/cliente"
import Botao from './Botao'

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
  const id = props.cliente?.id ?? null
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setidade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      <Entrada
        texto="Nome:"
        valor={nome}
        valorMudou={setNome}
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setidade}
      />
      <div style={{
        display: 'flex',
        width: '240px',
        marginLeft: 'auto'
      }}>

        <Botao cor='blue'
         onClick={()  => props.clienteMudou?.(new Cliente (nome, idade, id))}>
         {id ? 'Alterar' : 'Salvar'}
        </Botao>

        <Botao onClick={props.cancelado} cor='blue' color='red'>
           Cancelar
        </Botao>

      </div>
    </div>
  )
}