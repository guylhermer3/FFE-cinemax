import React from 'react'
import Button from '../Button'
import styles from './styles.module.css'

export default function Cabecalho({ }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.cabecalho}></div>
                <div className={styles.a}>
                    <a href='/'>CineMax</a>
                </div>
                <Button link='/eventos' text='Cadastrar' />
            </header>
        </>
    )
}