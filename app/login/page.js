import React from 'react';
import './login.css'
import {auth,provider} from '../../lib/firebase-config'
import {signInWithPopup} from 'firebase/auth'


const Login = ({setisAuth}) => {
    const signInWithPopup=()=>{
        signInWithPopup(auth,provider).then((result)=>{

        })
    }
    return (
        <main className="main login-page">
            <h1>
                Login with Google to continue
            </h1>


        </main>
    )
}

export default Login