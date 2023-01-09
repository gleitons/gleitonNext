import styles from '../styles/Ham.module.css'
export default function Iframe({endereco}) {
    return (
        <>
        <div>
            <iframe className={styles.iframeH} src={endereco}  frameborder="0"></iframe>
        </div>
        
        </>
    )
}