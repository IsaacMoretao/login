import { useState } from "react";  
import { ArrowSquareIn, GoogleLogo } from "phosphor-react";

import {
  User,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider, 
  createUserWithEmailAndPassword
} from "firebase/auth";

import { useNavigate } from 'react-router-dom'
import { auth } from "../services/Firebase"


export function Login(){

  const [user, setUser] = useState<User>({} as User);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()



  function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        if(user){
          navigate('/Login/home');
        }

      })
      .catch((error) => {
        console.log(error)
      })

  }

  return(
    <body className="
      bg-gradient-to-br from-purple-600 to-blue-600
      flex justify-center items-center flex-col">

      <div className="flex flex-col items-center">
        {user.photoURL && (
          <div className="
            rounded-full bg-gradient-to-r from-rose-400
            via-fuchsia-500 to-indigo-500
            flex justify-center p-[5px] w-[100px]">

            <img src={user.photoURL} alt='Usuário' className="rounded-full"/> 
          </div>
          
        )}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <div className="
        flex justify-center items-center
        bg-Primary-300 flex-col p-4 rounded-xl">

        <span className='text-center'>
          Faça login
          <br/> ou <br />
          <a href="#" className='text-blue-600'>Crie uma conta</a>
        </span>

        <button onClick={handleGoogleSignIn} className="
          bg-Primary-600 flex items-center
          gap-[5px] p-2 rounded-full
          hover:border-[2px] hover:border-Google-100" >
          <GoogleLogo size={25} color="#ffffff" weight="bold" />
          Entrar com a google
        </button>

        <form className="
          flex flex-col justify-center
        "  >

          <div className="
            m-2 p-[2px] rounded-full
            max-w-sm bg-gradient-to-r from-rose-400
            via-fuchsia-500 to-indigo-500">

            <label htmlFor="name" className="sr-only">Name</label>
            <input
            className="p-2 w-full rounded-full focus:outline-none"
            type="text"
            placeholder="E-mail"
            onChange={event => setEmail(event.target.value)}/>
          </div>

          <div className="
            m-2 p-[2px] rounded-full
            max-w-sm bg-gradient-to-r from-rose-400
            via-fuchsia-500 to-indigo-500">

            <label htmlFor="name" className="sr-only">Name</label>
            <input
            className="p-2 w-full rounded-full focus:outline-none"
            type="text"
            placeholder="Senha"
            onChange={event => setPassword(event.target.value)}/>
          </div>

          <button
            type="submit"
            className="
            bg-Primary-600 flex items-center content-center
            gap-[5px] p-2 rounded-full m-2
            hover:border-[2px] hover:border-Google-100" >
            <ArrowSquareIn size={25} color="#ffffff" weight="bold" />
            Entrar
          </button>

        </form>

      </div>
    </body>
  )

}