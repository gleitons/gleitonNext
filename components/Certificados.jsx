import styles from '../styles/Ham.module.css'
export default function Certificados({imagemC}) {
    return (
        <>
        <div>
            <img className={styles.infoImg} src={imagemC} alt="Certificado Gleiton Ap Soares de Souza" />
        </div>
        </>
    )
}