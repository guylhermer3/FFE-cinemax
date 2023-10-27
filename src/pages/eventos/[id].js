import styles from './styles.module.css'
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from 'next/image'
import axios from "axios"
import { useEffect, useState } from "react"
import Cabecalho from '@/components/Cabecalho'
import Container2 from '@/components/Container2'
import Rodape from '@/components/Rodape'

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
            <Container2>
            <Link href='/eventos'>
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
           
            </Container2>
            <Rodape />
        </>
    )
}
