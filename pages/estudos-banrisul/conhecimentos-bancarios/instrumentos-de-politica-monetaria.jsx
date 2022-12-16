import styles from '../../../styles/Estudos.module.css'
import Image from 'next/image'
import Estrategiasic from '../../../public/imagens/grafico-nao.png'
import Head from 'next/head'
import Menuestudos from '../Menuestudos'
export default function InstumentosPoliticaMonetaria() {
    return (
        <>
            <Head>
                <title>Instrumentos de Politica Monetária</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>
                <h2>Instrumentos de Políticas Monetárias</h2>
                <h4>Política monetária restritiva</h4>
                <p>As autoridades usam os seguintes instrumentos</p>
            </div>

        </>
    )
}
