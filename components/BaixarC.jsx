import { AiOutlineMinusSquare } from 'react-icons/ai'
import { BiSquare } from 'react-icons/bi'
import { FaRegWindowClose } from 'react-icons/fa'

import styles from '../styles/HeaderCurriculo.module.css'
export default function BaixarC({closeCurriculo}) {
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
            </div>
                </div>
        </div>
    )
}