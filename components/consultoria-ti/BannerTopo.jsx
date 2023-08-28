import styles from '../../styles/servicos.module.css'
import Link from 'next/link'
export default function BannerTopo() {
    return (
        <>
        <div className={styles.bannerTop}>
            <div>
                <h2>Transforme seu negócio hoje</h2>
                <p>Nossa consultoria oferece soluções personalizadas para você alcançar seus objetivos de forma eficiente.</p>
                <Link href='https://api.whatsapp.com/send?phone=555180652808&text=Olá, gostaria de uma consulta com a empresa futuro Consultoria.' target='_blank'>
                <button className={styles.pButton}>Saiba Mais</button>
                </Link>
            </div>
        </div>
        </>
    )
}