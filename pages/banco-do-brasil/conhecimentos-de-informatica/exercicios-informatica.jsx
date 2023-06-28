import styles from '../../../styles/Estudos.module.css'
import Head from 'next/head'
import Image from 'next/image'
import hardware from '../../../public/imagens/hardware-gleiton-aparecido-soares-de-souza-estudos-banrisul.png'
import Menuestudos from '../Menuestudos'
import software from '../../../public/imagens/software-gleiton-aparecido-soares-de-souza-estudos-banrisul.png'
import figuraUm from '../../../public/imagens/figura1.png'

export default function NocoesSistemas() {
    return (
        <>
            <Head>
                <title>Exercicios Informática</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>
                <h2>Exercicios de Informática Banrisul</h2>
               <ol>
                <li>A segurança da informação, assinatura digital
                    <ul>
                        <li>Assimetrica, quanto a assinatura digital possui 2 chaves, uma publica e outra proivada, a assimetrica criada codificada com a A e o A abrir codificar com a chave privada, a assinatura digital será com a chave privada de A enquanto o B certificara a validade com a Chave publica de A, a chame simetrica apenas privada particular</li>
                    </ul>
                </li>
                <li>Irretratibilidade: impossibilidade de, CID, confiabilidade, integridade, Disponibilidadede, CIDA adiciona Autenticidade - CIDAN - Não repúdio, não posso negar um ato, se eu gatranti que foi eu, não repudio. Principio da Legabilidade, LGPD</li>
               </ol>

            </div>
        </>
    )
}