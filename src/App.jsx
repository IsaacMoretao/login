import { Route, Routes } from 'react-router-dom';
import { Login } from './Login';
// import { Register } from './Register';
  
export function App() {
  
  return (
    <Routes>
      {/*<Route path='/register' component={<Register/>} />*/}
      <Route path='/Login/' component={<Login/>} />
     </Routes>
  );
}
  

