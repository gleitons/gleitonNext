import styles from '../../styles/Estudos.module.css'
import Head from 'next/head'
import Image from 'next/image'
import hardware from '../../public/imagens/hardware-gleiton-aparecido-soares-de-souza-estudos-banrisul.png'
import Menuestudos from './Menuestudos'



export default function Respostas() {
    return (
        <>
            <Head>
                <title>Hifén</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>

                <h2>Respostas de questões</h2>
                <p>Resposta de questões gran questoes</p>

                <p>segurança fisica, é aquela que precisa ser fisico, processual é de processo, ou seja trocar a senha em cada 30 dias</p>

            </div>


        </>
    )

}