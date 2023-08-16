'use client'
import { useState } from 'react'
import { Navigation } from './Navigation'
import './nav.css'
import Link from 'next/link'



const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Blog', href: '/blog' },
]

function Nav() {
  cons [isAuth,setisAuth]=useState(flase)
  return (
    <nav>
      <div className="logo">
        <Link href='/' >Logo</Link>
      </div>
      <menu >
        <Navigation navLinks={navLinks} />
      </menu>

      <div className='btn_nav'>
        <Link className='btn_link' href='/login' >Login</Link>
        <Link className='btn_link' href='/login' >Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav
