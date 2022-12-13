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
import ifnmg from '../public/img/instituto-federal-gleiton-aparecido-soares-de-souza.jpeg'
import ipreus from '../public/img/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png'
import eernf from '../public/img/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png'






import facit from '../public/img/facit-femc-gleiton-aparecido-soares-de-souza.png'




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
                    <Image src={senac} alt={NomeGleiton} />
                    <h3>Representante Comercial - SENAC/MG</h3>
                </div>
                <p className={styles.periodo}>Curso Representante Comercial, realizado no período de 01/02/2022 à 31/03/2022 na cidade de Uberlândia-MG.</p>
                <p className={styles.pDesc}>O Representante Comercial é responsável por realizar prospecção de clientes, negociação e vendas externas de produtos e serviços.</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ifnmg} alt={`${NomeGleiton} ${ifnmg}`} />
                    <h3>Técnico em Informática para Internet - IFNMG - Instituto Federal de Educação Ciência e Tecnologia de Minas Gerais</h3>
                </div>
                <p className={styles.periodo}>Técnico em Informática para Internet Tecnologia em Informática/Software 2017 - 2018</p>
                <p className={styles.pDesc}>Desenvolve programas de computador para internet, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ferramentas de desenvolvimento de sistemas, para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos. Desenvolve e realiza a manutenção de sites e portais na internet e na intranet.</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={facit} alt={`${NomeGleiton} ${facit}`} />
                    <h3>Engenharia de Computação - FACIT/FEMC</h3>
                </div>
                <p className={styles.periodo}>Curso Superior de Tecnologia (CST)Engenharia de Computação</p>
                <p className={styles.pDesc}>Não concluído 2013 - 2015 / O curso de Engenharia de Computação habilita a pessoa para trabalhar com o desenvolvimento e planejamento de softwares e hardwares.</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ipr} alt={`${NomeGleiton} ${ipr}`} />
                    <h3>Montagem e Manutenção de Computadores - UNISC/IPR</h3>
                </div>
                <p className={styles.periodo}>Montagem e Manutenção de Computadores - UNISC(Universidade de Santa Cruz do Sul)/IPR (Instituto Padre Reus) - 1/2011 – 07/2011</p>
                <p className={styles.pDesc}>Montagem, configuração e manutenção de hardware de computadores. Além de cuidados no manuseio e utilização de peças e equipamentos de informática, instalação e configuração dos diversos componentes de um microcomputador, seus periféricos e dos dispositivos auxiliares utilizados na computação.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={eernf} alt={`${NomeGleiton} ${eernf}`} />
                    <h3>Ensino Médio Completo - Escola Estadual Raimundo Nonato da Fonseca</h3>
                </div>
                <p className={styles.periodo}>Técnico em Agropecuário - ICA/UFMG - Núcleo Montes Claros - MG - 1/2005 – 12/2006</p>
                <p className={styles.pDesc}>*Falta Estágio - Planejar, executar, acompanhar e fiscalizar projetos agropecuários, administrar propriedades rurais, realizar levantamentos topográficos, elaborar e monitorar programas preventivos de sanitização da produção animal, vegetal e agroindustrial e atuar em programas de assistência técnica, extensão rural e pesquisa são algumas das responsabilidades do profissional formado em Agropecuária.</p>
            </div>



        </div>
    )
}