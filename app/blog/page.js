import React from 'react'
import './blog.css'
import Card from '../components/card/Card'

export const metadata = {
  title: 'Blog',
  description: 'This is the Blog',
}

export default function Blog() {
  return (
    <main className="main">
      <div className='cards'>
        <div className='container'>

          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </main>
  )
}
