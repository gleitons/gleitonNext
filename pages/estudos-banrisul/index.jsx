import Link from 'next/link'
import styles from '../../styles/MenuEstudo.module.css'
export default function MenuEstudo() {
    return (
        <>
        <div>
            <table className={styles.estudos}>
                <thead>
                    <tr>
                        <td>HORÁRIO</td>
                        <td>SEGUNDA</td>
                        <td>TERÇA</td>
                        <td>QUARTA</td>
                        <td>QUINTA</td>
                        <td>SEXTA</td>
                        <td>SÁBADO</td>
                        <td>DOMINGO</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.horario}>05:00 - 06:30</td>
                        <td className={styles.inicio}>Café + Academia</td>
                         <td className={styles.inicio}>Café + Academia</td>
                         <td className={styles.inicio}>Café + Academia</td>
                         <td className={styles.inicio}>Café + Academia</td>
                         <td className={styles.inicio}>Café + Academia</td>
                         <td className={styles.inicio}>Café + Academia</td>
                         <td className={styles.inicio}>Café + Academia</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>06:50 - 07:10</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        <td className={styles.manha}>Levar João Miguel para a escola</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>07:10 - 07:45</td>
                        <td className={styles.informatica}><Link href="/estudos-banrisul/conhecimentos-de-informatica/nocoes-de-sistemas-operacionais">1 - Noções de sistemas operacionais - Windows 10 (32-64 bits)</Link></td>
                        <td className={styles.informatica}>Edição de textos, planilhas e apresentação (ambientes Microsoft Office - Word, Excel, power point, office 365; libreOffice 7.4.2)</td>
                        <td className={styles.informatica}>Segurança da Informação: Fundamentos, conceitos e mecanismos de segurança.
                        <li>Visão Geral sobre sistemas de suporte á decisão e inteligência de negócio</li> 
                           
                            <li>Fundamentos sobre analise de dados</li></td>
                        <td className={styles.informatica}>Proteção de estações de trabalho: Controle de dispositivos USB, hardening, antimalware e firewall pessoal</td>
                        <td className={styles.informatica}>Conceito de organização e de gerenciamento de informações, arquivos, pastas e programas
                        <li>Conceito Geral de educação a distância.
                            </li></td>
                        <td className={styles.informatica}>Redes de computadores: Conceitos básicos, ferramentas, aplicativos e procedimentos de internet e intranet</td>
                        <td className={styles.informatica}>Navegador Web (Google Chrome 106), Microsoft Edge e Mozilla Firefox 78, busca e pesquisa na Web</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>08:00 - 11:15</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>11:20 - 13:00</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>
                        <td className={styles.alimentacao}>Descanso trabalho + Almoço</td>                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>13:00 - 16:00</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        <td className={styles.trabalho}>Trabalho</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>16:20 - 17:40</td>
                        <td className={styles.inicio}>Academia + Audio Estudo</td>
                         <td className={styles.inicio}>Academia + Audio Estudo</td>
                         <td className={styles.inicio}>Academia + Audio Estudo</td>
                         <td className={styles.inicio}>Academia + Audio Estudo</td>
                         <td className={styles.inicio}>Academia + Audio Estudo</td>
                        <td className={styles.inicio}>Estudo</td>
                        <td className={styles.inicio}>Descanso</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>18:00 - 19:30</td>
                        <td className={styles.portugues}>
                            <Link href="">
                                <li>Compreenção de texto</li>
                            </Link>
                            <Link href="">
                                <li>Ortografia Oficial</li>
                            </Link>
                            </td>
                        <td className={styles.matematica}><Link href="">
                            <li>Matematica</li>
                        </Link></td>
                        <td className={styles.etica}>Ética e diversidade</td>
                        <td className={styles.portugues}>Lingua Portuguesa</td>
                        <td className={styles.portugues}>Lingua Portuguesa</td>
                        <td className={styles.portugues}>Lingua Portuguesa</td>
                        <td className={styles.matematicafinanceira}>Matematica Financeira</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>19:30 - 21:00</td>
                        <td className={styles.portugues}>
                            <Link href="">
                                <li>Articulação de Texto: Coesão e coerência</li>
                            </Link>
                            <Link href="">
                                <li>Classe e emprego de palavras</li>
                            </Link></td>
                        <td className={styles.matematica}>Matematica</td>
                        <td className={styles.etica}>Ética e diversidade</td>
                        <td className={styles.vendas}>Gestão de qualidade em serviços</td>
                        <td className={styles.matematicafinanceira}>Matematica Financeira</td>
                        <td className={styles.portugues}>
                        <Link href="">
                                <li>Emprego do acento indicativo de crase</li>
                            </Link>
                            <Link href="">
                                <li>Sintaxe da oração e do periodo</li>
                            </Link>
                        </td>
                        <td className={styles.matematicafinanceira}>Matematica Financeira</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>21:00 - 22:30</td>
                        <td className={styles.vendas}>
                            <li>Noções de estratégia empresarial: análise de mercado, forças competitivas, imagem institucional, identidade e posicionamento</li>
                            <li>Segmentação do Mercado</li>
                        </td>
                        <td className={styles.vendas}>Aprendizagem e sustentabilidade organizacional</td>
                        <td className={styles.informatica}>
                            <li>Conceitos de tecnologia e ferramentas multimídia, de reprodução de áudio e vídeo</li>
                            <li>Ferramentas de produtividade e trabalho a distancia (microsoft Teams, cisco Webex, Google Hangout, Google Drive e Skype)</li>
                        </td>
                        <td className={styles.vendas}>Técnicas de vendas: da pré-abordagem ao pós-vendas</td>
                        <td className={styles.matematicafinanceira}>Matematica Financeira</td>
                        <td className={styles.atualidades}>Atualidades do Mercado Financeiro</td>
                        <td className={styles.atualidades}>Atualidades do Mercado Financeiro</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.horario}>22:30 - 00:00</td>
                        <td  className={styles.vendas}>
                            <li>Ações para aumentar o valor percebido pelo cliente</li>
                            <li>Gestão da Experiência do Cliente
                            </li>
                        </td>
                        <td className={styles.conhecimentos}>Conhecimentos Bancários</td>
                        <td className={styles.conhecimentos}>Conhecimentos Bancários</td>
                        <td className={styles.vendas}>Ética e conduta profissional em vendas</td>
                        <td className={styles.conhecimentos}>Conhecimentos Bancários</td>
                        <td className={styles.atualidades}>Atualidades dos Mercado Financeiro</td>
                        <td className={styles.vendas}>Vendas e negociação</td>
                        
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>


            </table>


        </div>
        
        
        </>
    )
}