import React from 'react'
import Button from '../Button/Button'
import styles from './forms.module.css'

const Forms = () => {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <h3>Ajude o algorítimo a ser mais certeiro</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis pariatur harum
          voluptatum dolorum magnam. Deleniti ratione cupiditate quia beatae totam! Expedita
          facere aliquid provident, eaque laborum modi soluta dicta corrupti!
          <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil,
          nobis quam illum adipisci magnam facere doloribus veniam beatae animi nemo, sed minus
          ea optio, corrupti excepturi amet vel nesciunt!</p>
      </section>
      <section className={styles.forms}>
        <fieldset>
          <form action="">
              <label htmlFor="">Seu nome:</label>
              <input type="text"/>
              <label htmlFor="">E-mail:</label>
              <input type="email" />
              <label htmlFor="">CPF</label>
              <input type="number" />
              <input type="radio"/>
              <label htmlFor="">Masculino</label>
              <input type="radio"/>
              <label htmlFor="">Feminino</label>
          </form>
          <Button>Enviar</Button>
        </fieldset>
        
      </section>
    </div>
   
  )
}

export default Forms