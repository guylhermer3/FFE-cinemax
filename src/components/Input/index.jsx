import styles from './styles.module.css';

export default function Input({ id, type, value, onChange }) {
  return (
    <input
      className={styles.input}
      id={id}
      type={type}
      value={value}         
      onChange={onChange}    
    />
  );
}
