// 'Use client'
import React from 'react'
import Link from 'next/link'
// import NavLink from './NavLink'
import style from './nav.module.css'

export default function Navigation() {
  return (
    <nav className={style.nav}>
        <div className="logo">
        <Link href="/">Logo</Link>
        </div>
        <div className={style.menu}> 
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
        </div>

        <div className={style.btn_nav}>
          <Link className={style.btn_link} href="/login">Login</Link>
          <Link className={style.btn_link} href="/">Sign UP</Link>
        </div>

    </nav>
  )
}

