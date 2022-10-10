import { auth } from "../../services/firebaseConfig";
import { useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export function LoginWithGoogle() {

  const [user, setUser] = useState({});

  function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        
        
        
        console.log(user)
        

      })
      .catch((error) => {
        console.log('error')
      })

  }

  /*const dignInGoogle = () => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState({});

    signInWithPopup(auth, provider)

    .then((result) => {
//      const credential = GoogleAuthProvider.credentialFromResult(result);
//      const token = credential.accessToken;
      setUser(result.user);
      console.log(user)

    }).catch((error) => {

    const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error)

    });

  }*/


 return(
  <>
  
    <button onClick={handleGoogleSignIn}>
      entrar com o google
    </button>

  </>
 )
}