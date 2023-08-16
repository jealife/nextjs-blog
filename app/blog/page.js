import React from 'react'
import './blog.css'
import '../../lib/firebase-config'
import Card from '../components/card/Card'
import  firebaseapp from '../../lib/firebase-config'


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
