import React, { useEffect } from 'react'
import { auth, provider } from '../config/config'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

interface IProps {
  loggedIn: any
  isLoggedIn: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setDisplayName: React.Dispatch<React.SetStateAction<string>>;
  currentUser: any;
  currentUserEmail: any;
}

const Login = ({ loggedIn, isLoggedIn, setDisplayName, setEmail, currentUser, currentUserEmail }: IProps) => {
  let navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      if (result.user != undefined) {
        localStorage.setItem('email', `${result.user.email}`)
        localStorage.setItem('displayName', `${result.user.displayName}`)
        setEmail(currentUserEmail())
        setDisplayName(currentUser())
        loggedIn()
        navigate('/')
      }
    })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <section>
      <div className="container">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </section>
  )
}

export default Login

