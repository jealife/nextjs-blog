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

          <Card num="1000" />
          <Card num="1001"/>
          <Card num="1002"/>

        </div>
      </div>
    </main>
  )
}
