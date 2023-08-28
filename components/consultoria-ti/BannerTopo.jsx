import styles from '../../styles/servicos.module.css'
export default function BannerTopo() {
    return (
        <>
        <div className={styles.bannerTop}>
            <div>
                <h2>Transforme seu negócio hoje</h2>
                <p>Nossa consultoria oferece soluções personalizadas para você alcançar seus objetivos de forma eficiente.</p>
                <button className={styles.pButton}>Saiba Mais</button>
            </div>
        </div>
        </>
    )
}