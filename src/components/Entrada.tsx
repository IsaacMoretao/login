interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLitura?: boolean
    valorMudou?: (valor: any) => void
}



export default function Entrada(props: EntradaProps){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '440px',
      marginLeft: '10px'
    }}>
      <label>
        {props.texto}
      </label>
      <input style={{
        width: '300px',
        border: '0px',
        borderBottom: '',
        padding: '5px',
        marginTop: '10px',
        background: 'rgb(218, 218, 218)'

      }}
      type={props.tipo ?? 'text'}
      value={props.valor}
      readOnly={props.somenteLitura}
      onChange={e => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}