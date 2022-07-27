import React from 'react'
import Button from '../Button/Button'
import styles from './header.module.css'

const Header = () => {
  return (
    <div>
      <header>
        <section>
          <div className={styles.headerTxt}>
            <p>uma seleção de produtos</p>
            <h2>especial para você</h2>
            <p className={styles.lastTitle}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
          </div>
        </section>
        <section>
          <div>
            <Button>Conheça a Linx</Button>
            <Button>Ajude o algoritmo</Button>
            <Button>Seus produtos</Button>
            <Button>Compartilhe</Button>
          </div>
        </section>
      </header>  
    </div>
  )
}

export default Header