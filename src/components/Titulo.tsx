export default function Titulo(props){
  return(
   <div style={{
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
   }}>
     <h1 >
       {props.children}
     </h1>
     <hr  style={{ 
       borderBottom: '2px solid black',
       width: '100%'
     }}/>
   </div>
  )
}