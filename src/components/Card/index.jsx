import Link from "next/link"
import styles from "./styles.module.css"

export default function Card({ id, titulo, dataInicio, dataFim, imagem }) {

  return (
    <>
      <Link href={`/eventos/${id}`}>
        <div className={styles.card}>
          <h2 className={styles.cardTitulo}>{titulo}</h2>
          <img src={imagem}></img>
          <div>Data de início: {dataInicio}</div>
          <div>Data de fim: {dataFim}</div>
        </div>
      </Link>
    </>
  )
}