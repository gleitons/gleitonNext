import styles from '../styles/Menuppi.module.css'
export default function MenuPpi() {
    return (
        <>
        <div className={styles.menT}>
            <div>
                <h1>Logo</h1>
            </div>
            <div className={styles.menuDireito}>
                <div className={styles.msoftware}>
                    <nav>
                        <li>Software Suport</li>
                        <li>Sales: 1.608.807</li>
                    </nav>
                    <p><a href="#">Contato</a></p>
                </div>
                <div className={styles.menuTop}>
                    <nav>
                        <li><a href="">Our Software</a></li>
                        <li>Service</li>
                        <li>Operations</li>
                        <li>Testimonials</li>
                        <li>Abouts</li>
                        <li>Carees</li>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}