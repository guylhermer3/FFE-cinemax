import styles from './styles.module.css';

export default function Container2({ children }) {
    return (
        <>
            <div
                className={styles.container2}>{children}
            </div>
        </>
    );
}