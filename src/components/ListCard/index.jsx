import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./styles.module.css";

export default function ListCard() {
  const [eventos, setEventos] = useState([]);
  const grupoNomes = ["Animação", "Para toda família", "Terror"];

  useEffect(() => {
    axios.get("http://localhost:3020/eventos").then((resultado) => setEventos(resultado.data));
  }, []);

  function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  function dividir(eventos, tamanhoGrupo) {
    const grupos = [];
    for (let i = 0; i < eventos.length; i += tamanhoGrupo) {
      grupos.push(eventos.slice(i, i + tamanhoGrupo));
    }
    return grupos;
  }

  return (
    <div className={styles.listCard}>
      {dividir(eventos, 7).map((grupo, indice) => (
        <div key={indice}>
          <h2>{grupoNomes[indice]}</h2> {}
          <div className={styles.cardGroup}>
            {grupo.map((e) => (
              <Card
                key={e.id}
                id={e.id}
                titulo={e.titulo}
                imagem={e.imagem}
                dataInicio={formatarData(e.dataInicio)}
                dataFim={formatarData(e.dataFim)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}