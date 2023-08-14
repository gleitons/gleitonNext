
import styles from '../styles/Objetivo.module.css'

import Image from 'next/image'
import Certificados from './Certificados'
import raimundo from "../public/imagens/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png"
import icaUFMG from "../public/imagens/ica-ufmg.png"
import ipr from "../public/imagens/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png"
import bg from "../public/imagens/logo-brasil-gondolas-gleiton-aparecido-soares-de-souza.png"
import hd from "../public/imagens/hd-produtos-digitais.png"
import bradesco from "../public/imagens/fundacao-bradesco.png"
import bnc from "../public/img/bolsa-nacional-de-compras.jpg"
import igtiO from "../public/img/igti-online.png"
import udemy from "../public/img/udemy.png"
import sebrae from "../public/img/sebrae.png"
import ebape from "../public/img/ebape.png"
import facit from "../public/img/facit-femc-gleiton-aparecido-soares-de-souza-on.png"
import Iframe from './Iframe'

import html from "../public/img/html-css-javascript.png"
import { BsChevronDoubleDown } from 'react-icons/bs'
import InfoEscritas from './InfoEscritas'
import { RxDoubleArrowUp } from 'react-icons/rx'


import mupi from "../public/imagens/mupi-systems.jpeg"
import doceneira from "../public/imagens/doceneira.png"
import projetoP from "../public/imagens/projeto-portofolio.png"
import cruzeiro from '../public/imagens/cruzeiro-do-sul-logo.jpeg'
import senac from '../public/imagens/senac-logo.png'
import ifnmg from '../public/img/instituto-federal-gleiton-aparecido-soares-de-souza.jpeg'
import ipreus from '../public/img/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png'
import ldp from '../public/imagens/prefeitura-de-lagoa-dos-patos-mg-logo-gleiton-aparecido-soares-de-souza.png'
import eernf from '../public/img/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png'
import comprarAgricultura from "../public/img/certificado-gleiton-aparecido-soares-de-souza-gestor-como-comprar-da-agricultura-familiar.jpg"

//import tiSeg from '../public/img/curso-seguranca-da-informacao-gleiton-aparecido-soares-de-souza.png'



import { useState } from 'react'


export default function Objetivo() {
    const NomeGleiton = 'Gleiton Aparecido Soares de Souza - Formação acadêmica'

    const semInfo = () => {
        setInfomacao(<>
            < RxDoubleArrowUp onClick={fechaSemInfo} />
            <InfoEscritas info='Em breve mais informações serão adicionadas. *Alguns itens já possuem.' />
        </>)
    }
    const fechaSemInfo = () => {
        setInfomacao(
            <>
                < BsChevronDoubleDown onClick={semInfo} />

            </>)
    }
    //Objetivo
    const abrirObjetivo = () => {
        setIObjetivo(<>
            < RxDoubleArrowUp onClick={fecharIObjetivo} />
            <InfoEscritas info='A área de TI, ou área de Tecnologia da Informação, é aquela responsável por gerenciar o fluxo de informações em redes de computadores de uma organização. Estas informações, mais comumente conhecidas como dados, são administradas através de softwares, bancos de dados, hardwares, redes de segurança e outros elementos que compõem o escopo de atuação de um profissional de tecnologia.' />
            <h3><strong>Nome:</strong> Gleiton Aparecido Soares de Souza</h3>
            <h4>PERFIL PROFISSIONAL</h4>
            <InfoEscritas info='O técnico em  Informática para Internet deverá ter autonomia suficiente para exercer atividades
                relacionadas ao  suporte e  implementação de projetos que estejam no âmbito da aplicação da tecnologia da
                informação, sobre a ótica do desenvolvimento de soluções.' />
            
            <InfoEscritas info='A sua atuação é necessária em todo tipo de empresa, pois, na sociedade do conhecimento, o desenvolvimento de soluções através do uso da tecnologia digital torna-se ponto incontestável de investimento em qualquer área do setor produtivo.' />

            <InfoEscritas info='Ao término do curso, esse técnico deverá possuir as seguintes competências gerais:' />
            
            <InfoEscritas info = 'identificar o funcionamento e relacionamento entre os componentes de computadores e seus periféricos; •     instalar e configurar computadores, isolados ou em redes, periféricos e softwares. •     identificar a origem de falhas no funcionamento de  computadores, periféricos e  softwares avaliando seus efeitos; •     analisar e operar os serviços e funções de sistemas operacionais; •     selecionar programas de aplicação a partir da avaliação das necessidades do usuário; •     desenvolver algoritmos através de divisão modular e refinamentos sucessivos; •     selecionar e utilizar estruturas de dados na resolução de problemas computacionais; •     aplicar linguagens e ambientes de programação no desenvolvimento de softwares. •     identificar arquiteturas de redes, utilizar protocolos de comunicação e serviços de rede; •     identificar meios físicos, dispositivos e  padrões de comunicação, reconhecendo as  implicações de sua aplicação no ambiente de rede; •     identificar os serviços de administração de sistemas operacionais de rede; •     identificar arquitetura de redes e tipos, serviços e funções de servidores; •     organizar a coleta e documentação de informações sobre o desenvolvimento de projetos; •     executar ações de treinamento e de suporte técnico; •     aplicar métodos e processos na programação, instalação e manutenção; •     projetar programas e sítios (sites). utilizando técnicas de usabilidade; •     elaborar projetos, layouts. diagramas e esquemas, correlacionando-os com as normas técnicas e com os princípios científicos e tecnológicos; avaliar as  características  e  as  particularidades dos  programas  aplicativos e  do  hardware, buscando integrá-los para propor soluções; •     projetar melhorias  nos  sistemas  convencionais  de  programação,  instalação  e  manutenção,  propondo incorporação de novas tecnologias; •     identificar elementos dentro do processo produtivo, que possam ser otimizados, com a finalidade de gerar uma melhor relação custo x benefício; •     coordenar atividades que demandam o trabalho e o desenvolvimento de projetos em grupo; •     possuir conhecimento de banco de dados, dentro de arquiteturas cliente/servidor; •     possuir conhecimento para desenvolver aplicações que serão disponibilizadas no ambiente de internet; •     utilizar, adequadamente, as interfaces do ambiente virtual, sistemas operacionais e aplicativos, e realizar procedimentos preventivos à segurança da informação.' />
            <Certificados imagemC='/img/informacoes-tecnico-informatica-para-internet-1-min.png' />
            <Certificados imagemC='/img/informacoes-tecnico-informatica-para-internet-2-min.png' />
        </>)
    }
    const fecharIObjetivo = () => {
        setIObjetivo(
            <>
                < BsChevronDoubleDown onClick={abrirObjetivo} />

            </>)
    }
    //Imagens Licenças e Certificados

    const abrirDevSummit = () => {
        setDevSummit(<>
            < RxDoubleArrowUp onClick={fecharDevSummit} />
            <Certificados imagemC='/certificados/certificado-dev-summit-3-edicao-2021-gleiton-aparecido-soares-de-souza.jpg' />
        </>)
    }
    const fecharDevSummit = () => {
        setDevSummit(
            <>
                < BsChevronDoubleDown onClick={abrirDevSummit} />

            </>)
    }

    const abrirTiSeg = () => {
        setTiSeg(<>
            < RxDoubleArrowUp onClick={fecharTiSeg} />
            <Certificados imagemC='/img/curso-seguranca-da-informacao-gleiton-aparecido-soares-de-souza.png' />
        </>)
    }
    const fecharTiSeg = () => {
        setTiSeg(
            <>
                < BsChevronDoubleDown onClick={abrirTiSeg} />

            </>)
    }

    const abrirInformaticaParaInternet = () => {
        setinfoInternetImage(<>
            < RxDoubleArrowUp onClick={fecharInformaticaParaInternet} />
            <Certificados imagemC='/img/diploma-informatica-para-internet-gleiton-aparecido-soares-de-souza-0-min.png' />
            <Certificados imagemC='/img/diploma-informatica-para-internet-gleiton-aparecido-soares-de-souza-1-min.png' />
            <Certificados imagemC='/img/diploma-validacao-informatica-para-internet-min.png' />
        </>)
    }
    const fecharInformaticaParaInternet = () => {
        setinfoInternetImage(
            <>
                < BsChevronDoubleDown onClick={abrirInformaticaParaInternet} />

            </>)
    }

    const abrirComprarAgri = () => {
        setComprarAgri(<>
            < RxDoubleArrowUp onClick={fecharComprarAgri} />
            <Certificados imagemC='/img/certificado-gleiton-aparecido-soares-de-souza-gestor-como-comprar-da-agricultura-familiar.jpg' />
        </>)
    }
    const fecharComprarAgri = () => {
        setComprarAgri(
            <>
                < BsChevronDoubleDown onClick={abrirComprarAgri} />

            </>)
    }

    const abrirBlog = () => {
        setBlogAuto(<>
            < RxDoubleArrowUp onClick={fecharBlog} />
            <Certificados imagemC='/img/ganhar-dinheiro-blog-online-marketing-digital-UC-868c11ac-7dd7-4203-8355-887eff3bdb65.jpg' />
        </>)
    }
    const fecharBlog = () => {
        setBlogAuto(
            <>
                < BsChevronDoubleDown onClick={abrirBlog} />

            </>)
    }

    const abrirInsta = () => {
        setInsta(<>
            < RxDoubleArrowUp onClick={fecharInsta} />
            <Certificados imagemC='https://udemy-certificate.s3.amazonaws.com/image/UC-WXJ88BIE.jpg' />
        </>)
    }
    const fecharInsta = () => {
        setInsta(
            <>
                < BsChevronDoubleDown onClick={abrirInsta} />

            </>)
    }

    const abrirSala = () => {
        setSala(<>
            < RxDoubleArrowUp onClick={fecharSala} />
            <Iframe endereco='https://salamineira.com' />
        </>)
    }
    const fecharSala = () => {
        setSala(
            <>
                < BsChevronDoubleDown onClick={abrirSala} />

            </>)
    }

    const abrirNaturfive = () => {
        setNaturfive(<>
            < RxDoubleArrowUp onClick={fecharNaturfive} />
            <Iframe endereco='https://naturfive.com' />
        </>)
    }
    const fecharNaturfive = () => {
        setNaturfive(
            <>
                < BsChevronDoubleDown onClick={abrirNaturfive} />

            </>)
    }





    const fecharDados = () => {
        setImageS(
            <>
                < BsChevronDoubleDown />

            </>)
    }
    const [semInformacao, setInfomacao] = useState(<>< BsChevronDoubleDown onClick={semInfo} /></>)
    const [IObjetivo, setIObjetivo] = useState(<>< BsChevronDoubleDown onClick={abrirObjetivo} /></>)


    const [devSummit, setDevSummit] = useState(<>< BsChevronDoubleDown onClick={abrirDevSummit} /></>)
    const [tiSegImage, setTiSeg] = useState(<>< BsChevronDoubleDown onClick={abrirTiSeg} /></>)
    const [infoInternetImage, setinfoInternetImage] = useState(<>< BsChevronDoubleDown onClick={abrirInformaticaParaInternet} /></>)


    const [tiComprarAgri, setComprarAgri] = useState(<>< BsChevronDoubleDown onClick={abrirComprarAgri} /></>)
    const [SeeBlogAuto, setBlogAuto] = useState(<>< BsChevronDoubleDown onClick={abrirBlog} /></>)
    const [InstaImage, setInsta] = useState(<>< BsChevronDoubleDown onClick={abrirInsta} /></>)
    const [ISala, setSala] = useState(<>< BsChevronDoubleDown onClick={abrirSala} /></>)
    const [INaturfive, setNaturfive] = useState(<>< BsChevronDoubleDown onClick={abrirNaturfive} /></>)


    return (
        <>

            <div className={styles.corpoDesc}>
                <span id='objetivo'>.</span>
                <h2>OBJETIVO</h2>
                <div className={styles.topicoDiv}>
                    <p className={styles.pDesc}>Objetivo de atuação na área de TI (Tecnologia da Informação) - Fiscal e Auditoria</p>
                    <div className={styles.iconeCertificado}>
                        {IObjetivo}
                    </div>
                </div>

                <span id='formacao'>.</span>
                <h2>FORMAÇÃO</h2>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={cruzeiro} width={50} height={50} alt={NomeGleiton} />
                        <h3>Engenharia de Software - Cruzeiro do Sul Virtual</h3>
                    </div>
                    <p className={styles.periodo}><strong>CURSANDO</strong> - Bacharelado em Engenharia, Engenharia de Software · (setembro de
                        2022 - setembro de 2026)</p>
                    <p className={styles.pDesc}>O curso de Engenharia de Software prepara profissionais focados no desenvolvimento de novos programas de computador.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={senac} alt={NomeGleiton} />
                        <h3>Programador Web - SENAC/MG</h3>
                    </div>
                    <p className={styles.periodo}>Curso Programador Web, realizado no período de 01/02/2022 a 21/07/2022 na cidade de Sete Lagoas-MG.</p>
                    <p className={styles.pDesc}>Conteúdo 01- Desenvolver aplicações web 02- Publicar e testar aplicações web 03- Realizar manutenção nas funcionalidades das aplicações web 04- Projeto Integrador Programador Web.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>







                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={senac} alt={NomeGleiton} />
                        <h3>Representante Comercial - SENAC/MG</h3>
                    </div>
                    <p className={styles.periodo}>Curso Representante Comercial, realizado no período de 01/02/2022 à 31/03/2022 na cidade de Uberlândia-MG.</p>
                    <p className={styles.pDesc}>O Representante Comercial é responsável por realizar prospecção de clientes, negociação e vendas externas de produtos e serviços.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ifnmg} alt={`${NomeGleiton} ${ifnmg}`} />
                        <h3>Técnico em Informática para Internet - IFNMG - Instituto Federal de Educação Ciência e Tecnologia de Minas Gerais</h3>
                    </div>
                    <p className={styles.periodo}>Técnico em Informática para Internet Tecnologia em Informática/Software 2017 - 2018</p>
                    <p className={styles.pDesc}>Desenvolve programas de computador para internet, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ferramentas de desenvolvimento de sistemas, para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos. Desenvolve e realiza a manutenção de sites e portais na internet e na intranet.</p>
                    <div className={styles.iconeCertificado}>
                        {infoInternetImage}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={facit} alt={`${NomeGleiton} ${facit}`} />
                        <h3>Engenharia de Computação - FACIT/FEMC</h3>
                    </div>
                    <p className={styles.periodo}>Curso Superior de Tecnologia (CST)Engenharia de Computação</p>
                    <p className={styles.pDesc}>Não concluído 2013 - 2015 / O curso de Engenharia de Computação habilita a pessoa para trabalhar com o desenvolvimento e planejamento de softwares e hardwares.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ipr} alt={`${NomeGleiton} ${ipr}`} />
                        <h3>Montagem e Manutenção de Computadores - UNISC/IPR</h3>
                    </div>
                    <p className={styles.periodo}>Montagem e Manutenção de Computadores - UNISC(Universidade de Santa Cruz do Sul)/IPR (Instituto Padre Reus) - 1/2011 – 07/2011</p>
                    <p className={styles.pDesc}>Montagem, configuração e manutenção de hardware de computadores. Além de cuidados no manuseio e utilização de peças e equipamentos de informática, instalação e configuração dos diversos componentes de um microcomputador, seus periféricos e dos dispositivos auxiliares utilizados na computação.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={eernf} alt={`${NomeGleiton} ${eernf}`} />
                        <h3>Ensino Médio Completo - Escola Estadual Raimundo Nonato da Fonseca</h3>
                    </div>
                    <p className={styles.periodo}>1/2005 – 12/2007</p>
                    <p className={styles.pDesc}>Conclusão do Ensino médio do ensino Básico - Escola pública</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={icaUFMG} alt={`${NomeGleiton} ${icaUFMG}`} />
                        <h3>Técnico em Agropecuário - ICA/UFMG</h3>
                    </div>
                    <p className={styles.periodo}>Técnico em Agropecuário - ICA/UFMG - Núcleo Montes Claros - MG - 1/2005 – 12/2006</p>
                    <p className={styles.pDesc}>*Falta Estágio - Planejar, executar, acompanhar e fiscalizar projetos agropecuários, administrar propriedades rurais, realizar levantamentos topográficos, elaborar e monitorar programas preventivos de sanitização da produção animal, vegetal e agroindustrial e atuar em programas de assistência técnica, extensão rural e pesquisa são algumas das responsabilidades do profissional formado em Agropecuária.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <span id='experiencia'>.</span>
                <h2 >EXPERIÊNCIAS PROFISSIONAIS</h2>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bg} alt={`${NomeGleiton} ${bg}`} />
                        <h3>Brasil Gôndolas LTDA</h3>
                    </div>
                    <p className={styles.periodo}>Brasil Gôndolas LTDA - Maio de 2022 – até o Outubro - 5 meses / Canoas - Rio Grande do Sul

                    </p>
                    <p className={styles.pDesc}>Atuando na área administrativa de folha de pagamento, compra, venda, contato com fornecedores, contratos, alvarás, criação de planilhas para facilitar controles internos como estoque interno, estoque em centro de distribuição. Captação de clientes através de loja online e-commerce, cobranças, retornos. Facilidade de utilização de sistema terceirizado qualquer que seja ou uso necessário para uso da empresa.

                    </p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>Agente de Desenvolvimento Econômico - Prefeitura Municipal de Lagoa dos Patos - MG
                        </h3>
                    </div>
                    <p className={styles.periodo}>Agente de Desenvolvimento Econômico - Jun. de 2017 – até Maio de 2022 - 5 anos, Lagoa dos Patos, Minas Gerais, Brasil

                    </p>
                    <p className={styles.pDesc}>O agente de desenvolvimento foi criado para auxiliar o processo de implementação e continuidade dos programas e projetos contidos na Lei Geral das Micro e Pequenas Empresas. Desempenhar um papel importante de coordenação e continuidade das atividades para desenvolvimento sustentável do município, juntamente com o poder público municipal e as lideranças do setor privado local. Executar e articular as políticas para implementação da Lei Geral das Micro e Pequenas Empresas no Município e criar uma articulação e mobilização na cidade em torno da causa do desenvolvimento local. Técnicas para moderação de grupos, negociação e solução de conflitos, elaboração e gestão de projetos, articulação, captação de recursos.

                    </p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>SEBRAE - Sala Mineira do Empreendedor de Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}>Atendimento ao Cliente - Sala Mineira do Empreendedor em Lagoa dos Patos MG</p>
                    <p className={styles.pDesc}>Atendimento ao público MEI, ME, EPP, emissão de alvará, Emissão de notas fiscais, envio de documentos, cobranças de DAS ́N do simples nacional, organização dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrações municipais, oferecendo apoio para empreendimentos de todos os portes.Trabalho executado juntamente com o de Agente de Desenvolvimento</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>SEBRAE - Sala Mineira do Empreendedor de Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}>Atendimento ao Cliente - Sala Mineira do Empreendedor em Lagoa dos Patos MG</p>
                    <p className={styles.pDesc}>Atendimento ao público MEI, ME, EPP, emissão de alvará, Emissão de notas fiscais, envio de documentos, cobranças de DAS ́N do simples nacional, organização dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrações municipais, oferecendo apoio para empreendimentos de todos os portes.Trabalho executado juntamente com o de Agente de Desenvolvimento</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>Gerente Comercial - HD Produtos Digitais</h3>
                    </div>
                    <p className={styles.periodo}>HD Produtos Digitais 26300217000100</p>
                    <p className={styles.pDesc}>Marketing Digital Criação de Sites Redes Sociais Vendas Online Atendimento ao Cliente Estratégias de Marketing para aumentar Vendas online. Vários projetos Online.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>Agente administrativo Fazendário - Prefeitura de Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses</p>
                    <p className={styles.pDesc}>Lagoa dos Patos, Minas Gerais, Brasil Executar serviços relacionado a fazenda Municipal, orientar e esclarecer os contribuintes quanto ao cumprimento das obrigações legais referentes ao pagamento de tributos, com o objetivo de evitar a sonegação.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>Cadastro Imobiliário - Prefeitura de Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses - Juntamente com o Agente Administrativo Fazendário</p>
                    <p className={styles.pDesc}>Gerenciamento de cadastro, alteração e baixa de imóveis, desmembramento e e regularização fundiária no município de Lagoa dos Patos MG.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>Gerente Patrimonial - Prefeitura de Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}>jan. de 2015 - mar. de 2016 - 1 ano 3 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                    <p className={styles.pDesc}>Cadastro, conferência, exclusão e organização de itens do património público. Etiquetagem, alteração e movimentação de património.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                        <h3>Gerente de operações de almoxarifado - Prefeitura de Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}>set. de 2014 - mar. de 2016 - 1 ano 7 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                    <p className={styles.pDesc}>Atuando na área de cadastro, baixa, conferência e entrega de produtos em estoque</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={doceneira} alt={`${NomeGleiton} Doceneira`} />
                        <h3>Gerente de vendas e estoque / Ramo de Alimentos - Doceneira e Alimentos LTDA</h3>
                    </div>
                    <p className={styles.periodo}>04/2009 - 08/2013 - Comercial Doceneira e Alimentos LTDA</p>
                    <p className={styles.pDesc}>Gerenciava estoques, entrega, controle de validade e qualidade. Atendimento ao cliente e levantamento de dados para aprimorar lucros.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <span id='licencas'>.</span>
                <h2>LICENÇAS E CERTIFICADOS</h2>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={html} alt={`${NomeGleiton} `} />
                        <h3>Javascript Web</h3>
                    </div>
                    <p className={styles.periodo}>31 de outubro de 2021 - Curso Em Video</p>
                    <p className={styles.pDesc}>Criação de Sites responsivos, domínio front-end.(conhecimento Médio) Javascript MasterClass.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={html} alt={`${NomeGleiton} `} />
                        <h3>HTML, CSS</h3>
                    </div>
                    <p className={styles.periodo}>2 de março de 2022 - Curso em vídeo</p>
                    <p className={styles.pDesc}>Criação de Sites responsivos, domínio front-end.(conhecimento Médio) Javascript MasterClass.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                        <h3>Microsoft Office 365 - Conhecendo o Onedrive</h3>
                    </div>
                    <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                        <h3>Microsoft Office 365 - Conhecendo o Onenote</h3>
                    </div>
                    <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                        <h3>Microsoft Office 365 - Conhecendo o Planner</h3>
                    </div>
                    <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                        <h3>Microsoft Office 365 - Conhecendo o Teams</h3>
                    </div>
                    <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                        <h3>Microsoft Office 365 - Conhecendo o Outlook</h3>
                    </div>
                    <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={igtiO} alt={`${NomeGleiton} IGTI`} />
                        <h3>DEV SUM MIT 3º EDIÇÃO 2021</h3>
                    </div>
                    <p className={styles.periodo}>IGTI - Emitido em ago. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {devSummit}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={bnc} alt={`${NomeGleiton} ${bnc}`} />
                        <h3>Curso de Pregoeiro para Licitação</h3>
                    </div>
                    <p className={styles.periodo}>Bolsa Nacional de Compras Emitido em jul. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={mupi} alt={`${NomeGleiton} ${mupi}`} />
                        <h3>Fórum: Regularização Fundiária Urbana - Reurb e o desenvolvimento das cidades</h3>
                    </div>
                    <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={mupi} alt={`${NomeGleiton} ${mupi}`} />
                        <h3>Segurança TI: Segurança da Informação</h3>
                    </div>
                    <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {tiSegImage}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={sebrae} alt={`${NomeGleiton} Udemy`} />
                        <h3>Gestor Público - Saiba como Comprar da Agricultura Familiar</h3>
                    </div>
                    <p className={styles.periodo}>Sebrae - 30/10/2019 a 01/11/2019</p>
                    <p className={styles.pDesc}>Cursos Livres - 12 Horas</p>
                    <div className={styles.iconeCertificado}>
                        {tiComprarAgri}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                        <h3>Blog Automático - Ganhar Dinheiro Online Marketing Digital</h3>
                    </div>
                    <p className={styles.periodo}>Udemy - Emitido em dez. de 2020</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {SeeBlogAuto}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                        <h3>Curso Completo de Instagram Marketing</h3>
                    </div>
                    <p className={styles.periodo}>Udemy - Emitido em nov. de 2018</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {InstaImage}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                        <h3>SEO WordPress: Como aparecer no Google</h3>
                    </div>
                    <p className={styles.periodo}>Udemy - Emitido em nov. de 2018</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={sebrae} alt={`${NomeGleiton} Sebrae`} />
                        <h3>Curso de agente de Desenvolvimento Avançado</h3>
                    </div>
                    <p className={styles.periodo}>Sebrae - Emitido em mai. de 2017</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={sebrae} alt={`${NomeGleiton} Sebrae`} />
                        <h3>Curso de agente de Desenvolvimento Básico</h3>
                    </div>
                    <p className={styles.periodo}>Sebrae - Emitido em mai. de 2017</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={ebape} alt={`${NomeGleiton} Ebape`} />
                        <h3>Certificado Aprovação Fundiária - EBAP - Escola Brasileira de Administração Pública</h3>
                    </div>
                    <p className={styles.periodo}>EBAP - Escola Brasileira de Administração Pública Emitido em mar. de 2017</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={facit} alt={`${NomeGleiton} Facit`} />
                        <h3>I Encontro de Pesquisa Em Ciências e Tecnologia FACIT</h3>
                    </div>
                    <p className={styles.periodo}>Faculdade de Ciência e Tecnologia de Montes Claros - FACIT - Emitido em out. de 2015</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={facit} alt={`${NomeGleiton} Facit`} />
                        <h3>III Forum das Engenharias 2015</h3>
                    </div>
                    <p className={styles.periodo}>Crea Jr-MG Núcleo Montes Claros - Emitido em ago. de 2015</p>
                    <p className={styles.pDesc}>Cursos Livres.</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>

                </div >








                <span id='publica'>.</span>




                <h2 >PUBLICAÇÕES</h2>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={sebrae} alt={`${NomeGleiton} SEBRAE`} />
                        <h3>Agente de Desenvolvimento inaugura Sala Mineira do Empreendedor em Lagoa dos Patos MG</h3>
                    </div>
                    <p className={styles.periodo}><a href="http://www.se.agenciasebrae.com.br/sites/asn/uf/MG/inaugurada-sala-mineira-do-empreendedor-em-lagoa-dos-patos,c84273a0523e2610VgnVCM1000004c00210aRCRD">sebrae.com.br</a></p>
                    <p className={styles.pDesc}>Sebrae 20 de abril de 2018 - Inaugurada Sala Mineira do Empreendedor em Lagoa dos Patos</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>













                <span id='projeto'>.</span>



                <h2>PROJETOS E PORTFÓLIOS</h2>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>Sala Mineira do Empreendedor</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://salamineira.com/">https://salamineira.com/</a></p>
                    <p className={styles.pDesc}>A Sala Mineira do Empreendedor, fruto de uma parceria entre JUCEMG, SEBRAE e municípios mineiros...</p>
                    <div className={styles.iconeCertificado}>
                        {ISala}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>Naturfive</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://naturfive.com">https://naturfive.com</a></p>
                    <p className={styles.pDesc}>Desde 2020 somos Consultora Natura com muito orgulho e confiança! Tanto que em 2021 investimos tudo no site Naturfive Cosméticos para vender on-line todos os produtos Natura, com maior...</p>
                    <div className={styles.iconeCertificado}>
                        {INaturfive}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>Ó as Zidéia!</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://gleitons.github.io/sou-tim/index.html">https://oaszideia.com</a></p>
                    <p className={styles.pDesc}>Memes aleatoriamente - Clique na imagem e coloque aleatoriamente...</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>httpst.net</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://httpst.net">https://httpst.net</a></p>
                    <p className={styles.pDesc}>Secretos - Dados Locked</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>seusiteonline.com</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://seusiteonline.com">https://seusiteonline.com</a></p>
                    <p className={styles.pDesc}>Seusiteonline.com é uma empresa familiar independente de criação de sites com sede em Minas Gerais, Brasil, em uma pequena cidade no Norte de Minas....</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>megadehoje.com</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://megadehoje.com">https://megadehoje.com</a></p>
                    <p className={styles.pDesc}>Somos um site com notícias, informações e dicas de como ganhar na mega-sena. Criado em 2018 o megadehoje.com te informa os últimos sorteios e premiações que...</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>veraoshop.com</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://veraoshop.com">https://veraoshop.com</a></p>
                    <p className={styles.pDesc}>O verão Shop Online está revolucionando o mercado de vestuário, mais especificamente de tênis. A mais de 05 anos no mercado calçadista vendendo produtos de qualidade e sempre com o menor preço e na internet temos loja virtual desde 2018..</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>alexbebidas.com.br</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://www.alexbebidas.com.br/">https://www.alexbebidas.com.br/</a></p>
                    <p className={styles.pDesc}>Venda de bebidas online...</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>alexbrasil.com.br</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://www.alexbrasil.com.br/">https://www.alexbrasil.com.br/</a></p>
                    <p className={styles.pDesc}>Venda de bebidas online...</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>allesestofados.com.br</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://www.allesestofados.com.br">https://www.allesestofados.com.br</a></p>
                    <p className={styles.pDesc}>Alles Estofados em Rio grande do Sul..</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>


                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>asconstrutora.com.br</h3>

                    </div>
                    <p className={styles.periodo}><a href="https://asconstrutora.com.br">https://asconstrutora.com.br</a></p>
                    <p className={styles.pDesc}>AS Construtora é uma empresa familiar que está no mercado a mais de 05 anos, nossos profissionais tem mais mais de 12 anos de experiência na área de construção..</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>ferragemdoxandi.com.br</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://ferragemdoxandi.com.br">https://ferragemdoxandi.com.br</a></p>
                    <p className={styles.pDesc}>Ferragem do Xandi - FERRAGENS (RETALHO), Novo Hamburgo, 93530, Rua Pastor Gustavo Nordlund 337, TEL: 5195458..</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>
                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} width={50} height={50} />
                        <h3>gondoladeaco.com.br/</h3>
                    </div>
                    <p className={styles.periodo}><a href="http://gondoladeaco.com.br/">http://gondoladeaco.com.br/</a></p>
                    <p className={styles.pDesc}>Gôndolas de Aço e Expositores para Lojas e Supermercados, Porta Pallets, móveis de aço, máquinas e equipamentos para estabelecimentos comerciais em Canoas..</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>

                <div className={styles.topicoDiv}>
                    <div className={styles.flex}>
                        <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                        <h3>https://www.refap.com.br//</h3>
                    </div>
                    <p className={styles.periodo}><a href="https://www.refap.com.br/">https://www.refap.com.br/</a></p>
                    <p className={styles.pDesc}>REFAP - Refinaria Alberto Pasqualini</p>
                    <div className={styles.iconeCertificado}>
                        {semInformacao}
                    </div>
                </div>



            </div>

        </>
    )
}