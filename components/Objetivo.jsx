import styles from '../styles/Objetivo.module.css'
import Formulario from './Formulario'
import Image from 'next/image'

import raimundo from "../public/imagens/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png"
import icaUFMG from "../public/imagens/ica-ufmg.png"
import ipr from "../public/imagens/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png"
import bg from "../public/imagens/logo-brasil-gondolas-gleiton-aparecido-soares-de-souza.png"
import hd from "../public/imagens/hd-produtos-digitais.png"
import doceneira from "../public/imagens/doceneira.png"
import projetoP from "../public/imagens/projeto-portofolio.png"
import cruzeiro from '../public/imagens/cruzeiro-do-sul-logo.jpeg'
import senac from '../public/imagens/senac-logo.png'
import Link from 'next/link'

export default function Objetivo() {
    const NomeGleiton = 'Gleiton Aparecido Soares de Souza - Formação acadêmica'

    return (

        <div className={styles.corpoDesc}>
            <h2>OBJETIVO</h2>
            <div className={styles.topicoDiv}>
                <p className={styles.pDesc}>Objetivo de atuação na área de TI (Tecnologia da Informação), administrativa, financeira, ou contábil, desenvolvendo e agregando conhecimento de todas as habilidades adquiridas ao longo de minha jornada profissional. Sempre disposto a receber conhecimento da organização que eu venha a me ingressar. Tenho interesse de construir uma carreira de sucesso, dessa forma contribuir para que a empresa alcance seus objetivos através do meu trabalho.</p>
            </div>


            <h2>FORMAÇÃO</h2>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={cruzeiro} alt={NomeGleiton} />
                    <h3>Engenharia de Software - Cruzeiro do Sul Virtual</h3>
                </div>
                <p className={styles.periodo}><strong>CURSANDO</strong> - Bacharelado em Engenharia, Engenharia de Software · (setembro de
                2022 - setembro de 2026)</p>
                <p className={styles.pDesc}>O curso de Engenharia de Software prepara profissionais focados no desenvolvimento de novos programas de computador.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={senac} alt={NomeGleiton} />
                    <h3>Programador Web - SENAC/MG</h3>
                </div>
                <p className={styles.periodo}>Curso Programador Web, realizado no período de 01/02/2022 a 21/07/2022 na cidade de Sete Lagoas-MG.</p>
                <p className={styles.pDesc}>Conteúdo 01- Desenvolver aplicações web 02- Publicar e testar aplicações web 03- Realizar manutenção nas funcionalidades das aplicações web 04- Projeto Integrador Programador Web.</p>
            </div>







            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={cruzeiro} alt={NomeGleiton} />
                    <h3>Engenharia de Software - Cruzeiro do Sul Virtual</h3>
                </div>
                <p className={styles.periodo}><strong>CURSANDO</strong> - Bacharelado em Engenharia, Engenharia de Software · (setembro de
                2022 - setembro de 2026)</p>
                <p className={styles.pDesc}>O curso de Engenharia de Software prepara profissionais focados no desenvolvimento de novos programas de computador.</p>
            </div>

        </div>
    )
}