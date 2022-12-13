import Menuestudos from '../Menuestudos'
import styles from '../../../styles/Estudos.module.css'
export default function InternetBanking() {
    return(
        <>
        <Menuestudos />
        <div className={styles.artigo}>
            <h2>Internet Banking</h2>
            <p>Vários serviços, o que tiver em mente</p>
            <h3>Meios de Segurança para evitar</h3>
            <li>Não usar:</li>
            <ul>
                <li>Senhas fracas, mesma senha, continua em risco se utilizada no mesmo meio, não preencher senha automaticamento</li>
                <li>É preciso lembrar-se de impedir a gravação da senha no banco, explorar as senhas nas falhas de segurança, o mais seguro é portanto gravar na memoria, cabeça</li>
                <li>Não usar Wifi Publico</li>
                <li>Mesmo se utilizar o https, não utilizar os sites dos banco em sites de rede wifi pública.</li>
                <li>Não clicar em emails ou mensagem de texto no telefone ou computador.</li>
            </ul>
            <h2>Os bancos na era digital</h2>
        </div>
        <div className={styles.espaco}></div>
        </>
       
    )
}