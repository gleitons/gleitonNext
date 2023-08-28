import styles from '../../styles/servicos.module.css'
import Image from 'next/image'
import LogoFuturo from '../../public/img/logo-futuro-consultoria.png'
export default function HeadTopo() {
    return (
        <>
        <div className={styles.tituloTopo}>
            {/* <Image src={LogoFuturo} /> */}
            <h2>Futuro Consultoria - 26.300.217/0001-00</h2>
        </div>
        </>
    )
}