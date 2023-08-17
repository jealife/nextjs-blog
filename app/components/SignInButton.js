import { auth, googleAuthProvider } from '../../lib/firebase-config'

export default function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
