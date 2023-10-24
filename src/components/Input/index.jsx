import styles from './styles.module.css'

export default function Input({ id, tipo, value, onChange }) {
  return (
    <input
      className={styles.input}
      id={id}
      type={tipo}
      value={value}         
      onChange={onChange}    
    />
  );
}
