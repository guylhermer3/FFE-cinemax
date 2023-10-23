import styles from './styles.module.css'
export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.rod}>
                    <div>
                        <h2>Cine Max</h2>
                        <h3>Todos os direitos reservados.</h3>
                    </div>
                </div>
                <h2>Políticas</h2>
                <h3>Dúvidas? Ligue 99 99999-9999</h3>
            </div>
        </footer>
    )
}