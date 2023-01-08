import styles from '/styles/Ppi.module.css'
import MenuPpi from '../components/Menuppi'
export default function Ppi() {
    return (
        <>
        <div>
            <MenuPpi />
            <div className={styles.bodd}>
            <h3>Gleiton</h3>
            </div>
        </div>
        
        </>
    )
}