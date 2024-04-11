import styles from '../styles/Ham.module.css'
import Image from 'next/image'
export default function Certificados({imagemC}) {
    return (
        <>
        <div>
            <Image className={styles.infoImg} src={imagemC} width={900} height={1200} alt="Certificado Gleiton Ap Soares de Souza" />
        </div>
        </>
    )
}