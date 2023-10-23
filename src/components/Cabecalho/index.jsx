import styles from './styles.module.css'

export default function Cabecalho({}){
    return(
        <>
        <header className={styles.header}>
            <div className={styles.cabecalho}>
            <h1>Cine Max</h1>
            </div>

            <div className={styles.a}>
            <a className={styles.hover} href='/'>Filmes</a>
 
            </div>
        </header>
        </>
    )
}