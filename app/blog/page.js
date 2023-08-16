import React from 'react'
import './blog.css'
import '../Firebase/fireBaseinit'
import Card from '../components/card/Card'


export default function Blog() {
  return (
    <main className="main">
      <div className='cards'>
        <Card />
      </div>
    </main>
  )
}
