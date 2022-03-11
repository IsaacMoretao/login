interface BotaoProps {
  cor?:'yelow' | 'blue'
  children: any
  onClick?: () => void
}

export default function Botao(props) {

  const cor = props.cor ?? 'rgba(100, 100, 100, 0.644)'
  const marginTop = props.marginTop ?? '0px'
  const color = props.color ?? 'white'

  return(
    <button onClick={props.onClick} style={{
      background: `${cor}`,
      height: '40px',
      width: '110px',
      borderRadius: '10px',
      marginTop: `${marginTop}`,
      margin: '10px',
      color: `${color}`,
      cursor: 'pointer'
    }}>
      
        {props.children}
      
      
    </button>
  )
}