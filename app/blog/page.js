import React from 'react'
import styles from '../page.module.css'
import '../Firebase/fireBaseinit'
import Card from '../components/card/Card'


export default function blog() {
  return (
    <main className={styles.main}>
      <div className='cards'>
        <Card />
      </div>
    </main>
  )
}
