import { AiOutlineMinusSquare } from 'react-icons/ai'
import { BiSquare } from 'react-icons/bi'
import { FaRegWindowClose } from 'react-icons/fa'
import gleitonwebp from '../public/img/gleiton-aparecido-soares-de-souza.webp'
import Image from 'next/image'
import Link from 'next/link'
import gleitonsvg from '../public/imagens/rosto-gleiton-aparecido-soares-de-souza.svg'

import styles from '../styles/HeaderCurriculo.module.css'
export default function BaixarC({ closeCurriculo }) {
    return (
        <div className={styles.fundoCurri}>
            <div className={styles.janelaWindows} id='janelaC'>
                <div className={styles.iconesJ}>
                    <a onClick={closeCurriculo} >
                        < AiOutlineMinusSquare />
                    </a>
                    <a >
                        < BiSquare />
                    </a>
                    <a onClick={closeCurriculo} >
                        < FaRegWindowClose />
                    </a>
                </div>
                <p>Selecione o Modelo</p>
                <div className={styles.baixarC}>
                    <Link href="/Gleiton - gleiton.com.br - Curriculo.pdf" target='_blank'><button>Curriculo Page</button></Link>
                    <Link href="/curriculo-gleiton-aparecido-soares-de-souza.pdf" target='_blank'><button>Curriculo Clean</button></Link>
                    <Link href="./estudos-banrisul"><button className={styles.cursoP}>Estudos Banrisul</button></Link>
                    <Link href="./banco-do-brasil"><button className={styles.cursoP}>Estudos Banco do Brasil</button></Link>
                    <Link href="./crm-mg"><button className={styles.cursoP}>CRM MG</button></Link>
                    <Link href="./cvm"><button className={styles.cursoP}>CVM</button></Link>
                    <Link href="./banco-central"><button className={styles.cursoP}>Banco Central do Brasil</button></Link>
                    <Link href="./analse-e-desenvolvimento-de-sistemas"><button className={styles.cursoP}>Analise e desenvolvimento de Sistemas</button></Link>
                    <Link href="https://gleiton.netlify.app" ><button className={styles.cursoP}>Site Ante\rior em React</button></Link>
                    <div className={styles.gleitonWeb}>
                    <div>
                    <Image src={gleitonsvg} alt={'Gleiton Aparecido Soares de Souza'}/>
            </div>
                    {/* <Image src={gleitonwebp} alt='Gleiton 1' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}