'use client';
import './profile.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../lib/firebase-config'
import SignOutButton from '../components/SignOutButton'

export default function Dashboard() {


  // const [user, setUser] = useState(null)
  // const router = useRouter()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setUser(user)
  //     if (!user) {
  //       router.push('/')
  //     }
  //   })
  //   return unsubscribe
  // }, [router])

  // if (!user) {
  //   return null
  // }

  return (

    <main className="main">
      <h1>Dashboard</h1>
    </main>
  )
}
