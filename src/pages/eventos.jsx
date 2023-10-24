import Cabecalho from "@/components/Cabecalho";
import Container from "@/components/Container";
import Form from "@/components/Form";
import Input from "@/components/Input";
import styles from '@/styles/eventos.module.css';
import axios from "axios";
import { useEffect, useState } from "react";

function inserirEvento(evento, imagem, limparFormulario, setMensagem) {
  const formData = new FormData();
  formData.append("imagem", imagem);

  axios.post('http://localhost:3000/eventos', formData)
    .then(resultado => {
      console.log(resultado.data);
      limparFormulario();
      setMensagem("Cadastro realizado com sucesso.");
    })
    .catch(erro => {
      console.log(erro);
      setMensagem("Houve um erro em seu cadastro.");
    });
}

export default function EventoPage() {
  const [evento, setEvento] = useState({
    titulo: "",
    sinopse: "",
    data: "",
    horario: "",
    imagem: ""
  });

  const [imagem, setImagem] = useState(null);
  const [mensagem, setMensagem] = useState("");

  function limparFormulario() {
    setEvento({
      titulo: "",
      sinopse: "",
      data: "",
      horario: "",
      imagem: ""
    });
  }

  useEffect(() => {
    if (mensagem) {
      setTimeout(() => {
        setMensagem("");
      }, 2000);
    }
  }, [mensagem]);

  return (
    <>
      <Cabecalho />
<Container>
      <div className={styles.container}>
        <Form onSubmit={e => inserirEvento(evento, imagem, limparFormulario, setMensagem, e)}
          className={styles.subcontainer}>
          <div>
            <label htmlFor='titulo'>Titulo:</label>
            <br />
            <Input
              id='titulo'
              type='text'
              name='titulo'
              value={evento.titulo}
              onChange={e => setEvento({
                ...evento,
                titulo: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='sinopse'>Sinopse:</label>
            <br />
            <textarea
              id='sinopse'
              cols='20'
              rows='7'
              value={evento.sinopse}
              onChange={e => setEvento({
                ...evento,
                sinopse: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='data'>Data estreia:</label>
            <br />
            <Input
              id='data'
              type='date'
              name='data'
              value={evento.data}
              onChange={e => setEvento({
                ...evento,
                data: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='horario'>Horário:</label>
            <br />
            <Input
              id='horario'
              type='time'
              name='horario'
              value={evento.horario}
              onChange={e => setEvento({
                ...evento,
                horario: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor='imagem'>Imagem:</label>
            <br />
            <Input
              id='imagem'
              type='file'
              name='imagem'
              onChange={e => setImagem(e.target.files[0])}
            />
          </div>

          {imagem && (
            <img src={URL.createObjectURL(imagem)}
              alt="Imagem selecionada"
              style={{ maxWidth: '100%' }}
            />
          )}
          <button className={styles.button} type='submit'>Cadastrar</button>
        </Form>

      </div>
      </Container>
    </>
  );
}