import { auth } from '../../lib/firebase-config'

export default function SignOutButton() {
  const signOut = async () => {
    await auth.signOut()
  }

  return (
    <button onClick={signOut}>Sign out</button>
  )
}
