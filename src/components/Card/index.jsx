import Link from "next/link";
import styles from "./styles.module.css";

export default function Card({ id, titulo, data, horario, imagem }) {

  return (
    <>
      <Link href={`/eventos/${id}`}>
        <div className={styles.card}>
          <h2 className={styles.cardTitulo}>{titulo}</h2>
          <img src={imagem}
            className={styles.cardImagem}
            alt="Imagem do evento"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", width: "200px", height: "200px" }}
          />
          <div>Data de estreia: {data}</div>
          <div>Horário: {horario}</div>
        </div>
      </Link>
    </>
  )
}