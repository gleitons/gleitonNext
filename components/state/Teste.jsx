import styles from '../../styles/Testers.module.css'
export default function Teste({fechar}) {
    return (
        <>
        <div className={styles.fundoC}>
            <div className={styles.divC}>
                <div>
                    <p onClick={fechar}>fechar</p>
                </div>
                <h3>Fechamento</h3>
            </div>
        </div>
        
        </>
    )
}