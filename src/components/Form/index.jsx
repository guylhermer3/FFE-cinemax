import styles from './styles.module.css'

export default function Form({ children }) {

    return (
        <>
            <div className={styles.forme}>
                <div className={styles.container}>
                </div>
                {children}
            </div>
        </>
    )

}
