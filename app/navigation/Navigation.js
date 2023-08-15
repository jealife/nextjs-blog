import React from 'react'
import Link from 'next/link'
import style from './nav.module.css'

export default function Navigation() {
  return (
    <nav className={style.nav}>
        <div className="logo">
            Logo
        </div>
        <div className={style.menu}> 
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
        </div>

    </nav>
  )
}
