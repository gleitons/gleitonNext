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
               <p>Obs: </p>
               <p>O sub -  é separado por hífen, quando o segundo elemento inciar vom B, H, ou R - ex: sub reitor - b, h, r - sub-reitor, sub-b..., sub-h..., sub-r....</p>
               <p>Porta não é prefixo, nesse caso , trata-se do ver bo portar - substantivo composto ser sempre frafatos com hífen, portanto o correto é porta-retrato.</p>         

               <p>hífen, r, b, h -  Extra não é uma palavra, é um prefixo, medico-cirurgiao, mais nesse caso temos duas palavras</p>     
               <p>Bem sempre vai ter hífen - bem-educado, bem-vindo, bem-sucedido, vagalume, tem que ter hífen, o certo é vaga-lume, porta não é prefixo, contra regra - contrarrega - duas palavras, sub, uso do hifen, em tres situações, </p>


            </div>
        </>
    )
}