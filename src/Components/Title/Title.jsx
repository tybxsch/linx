import React from 'react'
import styles from './title.module.css'

function Title({ props}) {
  return (
    <div className={styles.conteiner}>
        <div className={styles.box}></div>
        <h3>{props}</h3>
        <div className={styles.box}></div>
    </div>
  )
}

export default Title