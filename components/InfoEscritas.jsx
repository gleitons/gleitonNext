import styles from '../styles/Ham.module.css'
export default function InfoEscritas({info}) {
    return (
        <>
        <div className={styles.escrita}>
            <p>{info}</p>
        </div>
        </>
    )
}