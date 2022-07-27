import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import styles from './newsletter.module.css'

function Newsletter() {
    return (
        <div className={styles.container}>
            <Title props='Compartilhe a novidade'></Title>
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <fieldset className={styles.fieldset}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Nome do seu amigo:</label>
                    <input type="text" className={styles.input} />
                    <label htmlFor="">E-mail:</label>
                    <input type="email" name="" id="" className={styles.input} />
                </form>
            </fieldset>
            <Button>Enviar agora</Button>
        </div>
    )
}

export default Newsletter