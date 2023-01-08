import { FaWhatsappSquare } from "react-icons/fa" 
import styles from '../styles/Frase.module.css'

export default function Contato() {
    return (
        <>
        <div className={styles.contatoWhats}>
            <a href="https://api.whatsapp.com/send?phone=5551980652808&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20Gleiton%20Soares" target="blank">
                <FaWhatsappSquare />
            </a>
        </div>
        
        </>
    )
}