import styles from './styles.module.css'
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';

export default function EventosHome() {

    const [evento, setEvento] = useState({})
    const router = useRouter()

    useEffect(() => {

        const id = router.query.id
        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }
    }, [])
    
    return (
        <>
        <Cabecalho />
        <Link href='/eventos'>
                <Button className={styles.button}>
               <span>Cadastrar</span>
            </Button>
        </Link>    

        <div className={styles.container}>
        <Image 
        src={evento.imagem} 
        width={700} 
        height={500}
        />
        <div className={styles.subcontainer}>

          <h1>{evento.titulo}</h1>
          <span>{evento.descricao}</span>
          <p>Data Inicio: {evento.dataInicio}  Data Fim: {evento.dataFim}</p> 
        </div>
        </div>
        <Rodape />

        </>
    )
}
