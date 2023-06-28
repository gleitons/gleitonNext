import styles from '../../styles/Menuestudos.module.css'
export default function Menuestudos() {
    function voltar() {
        window.history.back()
    }
    return (
        <div className={styles.menu}>
            <div>
                <button onClick={voltar}>Voltar</button>
            </div>
            <div>
                <nav>
                    <li>Inicio</li>
                    <li>Português</li>
                    <li>Matemática</li>
                </nav>
            </div>
        </div>
    )
}