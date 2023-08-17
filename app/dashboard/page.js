import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../lib/firebase-config'
import SignOutButton from '../components/SignOutButton'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      if (!user) {
        router.push('/')
      }
    })
    return unsubscribe
  }, [])

  if (!user) {
    return null
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.displayName}!</p>
      <SignOutButton />
    </div>
  )
}
