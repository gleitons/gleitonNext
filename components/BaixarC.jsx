import { AiOutlineMinusSquare } from 'react-icons/ai'
import { BiSquare } from 'react-icons/bi'
import { FaRegWindowClose } from 'react-icons/fa'
import gleitonwebp from '../public/img/gleiton-aparecido-soares-de-souza.webp'
import Image from 'next/image'
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
                    <a href="/Gleiton - gleiton.com.br - Curriculo.pdf" target='_blank'><button>Curriculo Page</button></a>
                    <a href="/curriculo-gleiton-aparecido-soares-de-souza.pdf" target='_blank'><button>Curriculo Clean</button></a>
                    <a href="./estudos-banrisul"><button className={styles.cursoP}>Estudos</button></a>
                    <a href="https://gleiton.netlify.app" ><button className={styles.cursoP}>Site Anterior em React</button></a>
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