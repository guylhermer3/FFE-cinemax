import React from 'react'
import styles from './styles.module.css'

function Button({ link, text }) {
    return (
        <a href={link} className={styles.button}>
            <span className={styles.buttonText}>{text}</span></a>
    );
}

export default Button;