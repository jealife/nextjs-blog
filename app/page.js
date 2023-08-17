// 'use client';
import styles from './page.module.css'
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { auth } from '../lib/firebase-config'
import SignInButton from './components/SignInButton'
import SignOutButton from './components/SignOutButton'



export default function Home() {

  
  // const router = useRouter();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setUser(user)
  //     if (user) {
  //       router.push('/dashboard')
  //     }
  //   })
  //   return unsubscribe
  // }, [])

  return (
    <main className={styles.main}>
      <h1>Home</h1>

      {/* {user ? <SignOutButton /> : <SignInButton />} */}
    </main>
  )
}
