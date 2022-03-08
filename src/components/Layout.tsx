import Titulo from "./Titulo";

interface LayoutProps{
  titulo: string
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
  
    <div style={{
      padding: '35px',
      background: 'white',
      borderRadius: '10px',
      marginLeft: '10vh',
      marginRight: '10vh',
    }}>
     <Titulo >{props.titulo}
     </Titulo>
     <div style={{
       display: 'flex',
       borderBottom: '1px solid green',
       width: '70vh',
     }}>
       {props.children}
     </div>

    </div>
  );
}