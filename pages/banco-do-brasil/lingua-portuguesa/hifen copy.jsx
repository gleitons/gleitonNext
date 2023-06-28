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
                <title>Hifén</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>
                <h2>Usos do hifén</h2>
               <p>O hífen é diferente de travessão</p>
               <h4>Uso do hífen</h4>
               <ul>
                <li>Hifén com prefixos</li>
                <ul>
                    <li>Super-homem</li>
                    <li>Anti-histamínico</li>
                    <li>Micro-ondas</li>
                    <li>Anti-inflamatório </li>
                </ul>
                <li>Hifén entre palavras</li>
                <ul>
                    <li>Sexta-feira</li>
                    <li>Mesa-redonda</li>
                    <li>Criado-mudo</li>
                </ul>
               </ul>
               <p>No decorrer do dia, podemos utilizar os afixos antes</p>
               <p>Outra realidade posso utilizar formas livres</p>
               <p>Como usar o hifen</p>
               <p>Quando o A repete, ex: contra atacar - contraatacar - NÃOOOO, contra-atacar</p>
               <p></p>


            </div>
        </>
    )
}