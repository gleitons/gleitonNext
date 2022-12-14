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

//import tiSeg from '../public/img/curso-seguranca-da-informacao-gleiton-aparecido-soares-de-souza.png'



import { useState } from 'react'


export default function Objetivo() {
    const NomeGleiton = 'Gleiton Aparecido Soares de Souza - Forma????o acad??mica'

    const semInfo = () => {
        setInfomacao(<>
        < RxDoubleArrowUp  onClick={fechaSemInfo} />   
        <InfoEscritas info = 'Em breve mais informa????es ser??o adicionadas. *Alguns itens j?? possuem.' />
        </>)
    }
    const fechaSemInfo = () => {
        setInfomacao(
            <>
              < BsChevronDoubleDown  onClick={semInfo} />  
           
            </>)
    }
    //Objetivo
    const abrirObjetivo = () => {
        setIObjetivo(<>
         < RxDoubleArrowUp  onClick={fecharIObjetivo} />             
        <InfoEscritas info ='A ??rea de TI, ou ??rea de Tecnologia da Informa????o, ?? aquela respons??vel por gerenciar o fluxo de informa????es em redes de computadores de uma organiza????o. Estas informa????es, mais comumente conhecidas como dados, s??o administradas atrav??s de softwares, bancos de dados, hardwares, redes de seguran??a e outros elementos que comp??em o escopo de atua????o de um profissional de tecnologia.' />
        </>)
    }
    const fecharIObjetivo = () => {
        setIObjetivo(
        <>
          < BsChevronDoubleDown  onClick={abrirObjetivo} />  
       
        </>)
    }
    //Imagens Licen??as e Certificados

    const abrirDevSummit = () => {
        setDevSummit(<>
         < RxDoubleArrowUp  onClick={fecharDevSummit} />             
        <Certificados imagemC ='/certificados/certificado-dev-summit-3-edicao-2021-gleiton-aparecido-soares-de-souza.jpg' />
        </>)
    }
    const fecharDevSummit = () => {
        setDevSummit(
        <>
          < BsChevronDoubleDown  onClick={abrirDevSummit} />  
       
        </>)
    }

    const abrirTiSeg = () => {
        setTiSeg(<>
         < RxDoubleArrowUp  onClick={fecharTiSeg} />             
        <Certificados imagemC ='/img/curso-seguranca-da-informacao-gleiton-aparecido-soares-de-souza.png' />
        </>)
    }
    const fecharTiSeg = () => {
        setTiSeg(
        <>
          < BsChevronDoubleDown  onClick={abrirTiSeg} />  
       
        </>)
    }

    const abrirInsta = () => {
        setInsta(<>
         < RxDoubleArrowUp  onClick={fecharInsta} />             
        <Certificados imagemC ='https://udemy-certificate.s3.amazonaws.com/image/UC-WXJ88BIE.jpg' />
        </>)
    }
    const fecharInsta = () => {
        setInsta(
        <>
          < BsChevronDoubleDown  onClick={abrirInsta} />  
       
        </>)
    }

    const abrirSala = () => {
        setSala(<>
         < RxDoubleArrowUp  onClick={fecharSala} />             
        <Iframe endereco ='https://salamineira.com' />
        </>)
    }
    const fecharSala = () => {
        setSala(
        <>
          < BsChevronDoubleDown  onClick={abrirSala} />  
       
        </>)
    }

    const abrirNaturfive = () => {
        setNaturfive(<>
         < RxDoubleArrowUp  onClick={fecharNaturfive} />             
        <Iframe endereco ='https://naturfive.com' />
        </>)
    }
    const fecharNaturfive = () => {
        setNaturfive(
        <>
          < BsChevronDoubleDown  onClick={abrirNaturfive} />  
       
        </>)
    }





    const fecharDados = () => {
        setImageS(
        <>
          < BsChevronDoubleDown   />  
       
        </>)
    }
    const [semInformacao, setInfomacao] = useState(<>< BsChevronDoubleDown   onClick={semInfo}  /></>)
    const [IObjetivo, setIObjetivo] = useState(<>< BsChevronDoubleDown   onClick={abrirObjetivo}  /></>)


    const [devSummit, setDevSummit] = useState(<>< BsChevronDoubleDown onClick={abrirDevSummit} /></>)
    const [tiSegImage, setTiSeg] = useState(<>< BsChevronDoubleDown onClick={abrirTiSeg} /></>)
    const [InstaImage, setInsta] = useState(<>< BsChevronDoubleDown onClick={abrirInsta} /></>)
    const [ISala, setSala] = useState(<>< BsChevronDoubleDown onClick={abrirSala} /></>)
    const [INaturfive, setNaturfive] = useState(<>< BsChevronDoubleDown onClick={abrirNaturfive} /></>)
    

    return (
        <>
        
        <div className={styles.corpoDesc}>
            <span id='objetivo'>.</span>
            <h2>OBJETIVO</h2>
            <div className={styles.topicoDiv}>
                <p className={styles.pDesc}>Objetivo de atuac??a??o na a??rea de TI (Tecnologia da Informa????o), administrativa, financeira, ou conta??bil, desenvolvendo e agregando conhecimento de todas as habilidades adquiridas ao longo de minha jornada profissional. Sempre disposto a receber conhecimento da organizac??a??o que eu venha a me ingressar. Tenho interesse de construir uma carreira de sucesso, dessa forma contribuir para que a empresa alcance seus objetivos atrave??s do meu trabalho.</p>
                <div className={styles.iconeCertificado}>                    
                    {IObjetivo}                     
                </div>
            </div>

            <span id='formacao'>.</span>
            <h2>FORMAC??A??O</h2>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={cruzeiro} width={50} height={50} alt={NomeGleiton}  />
                    <h3>Engenharia de Software - Cruzeiro do Sul Virtual</h3>
                </div>
                <p className={styles.periodo}><strong>CURSANDO</strong> - Bacharelado em Engenharia, Engenharia de Software ?? (setembro de
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
                <p className={styles.periodo}>Curso Programador Web, realizado no peri??odo de 01/02/2022 a 21/07/2022 na cidade de Sete Lagoas-MG.</p>
                <p className={styles.pDesc}>Conteu??do 01- Desenvolver aplicac??o??es web 02- Publicar e testar aplicac??o??es web 03- Realizar manutenc??a??o nas funcionalidades das aplicac??o??es web 04- Projeto Integrador Programador Web.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>







            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={senac} alt={NomeGleiton} />
                    <h3>Representante Comercial - SENAC/MG</h3>
                </div>
                <p className={styles.periodo}>Curso Representante Comercial, realizado no peri??odo de 01/02/2022 a?? 31/03/2022 na cidade de Uberla??ndia-MG.</p>
                <p className={styles.pDesc}>O Representante Comercial e?? responsa??vel por realizar prospecc??a??o de clientes, negociac??a??o e vendas externas de produtos e servic??os.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ifnmg} alt={`${NomeGleiton} ${ifnmg}`} />
                    <h3>Te??cnico em Informa??tica para Internet - IFNMG - Instituto Federal de Educac??a??o Cie??ncia e Tecnologia de Minas Gerais</h3>
                </div>
                <p className={styles.periodo}>Te??cnico em Informa??tica para Internet Tecnologia em Informa??tica/Software 2017 - 2018</p>
                <p className={styles.pDesc}>Desenvolve programas de computador para internet, seguindo as especificac??o??es e paradigmas da lo??gica de programac??a??o e das linguagens de programac??a??o. Utiliza ferramentas de desenvolvimento de sistemas, para construir soluc??o??es que auxiliam o processo de criac??a??o de interfaces e aplicativos empregados no come??rcio e marketing eletro??nicos. Desenvolve e realiza a manutenc??a??o de sites e portais na internet e na intranet.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={facit} alt={`${NomeGleiton} ${facit}`} />
                    <h3>Engenharia de Computa????o - FACIT/FEMC</h3>
                </div>
                <p className={styles.periodo}>Curso Superior de Tecnologia (CST)Engenharia de Computac??a??o</p>
                <p className={styles.pDesc}>Na??o conclui??do 2013 - 2015 / O curso de Engenharia de Computa????o habilita a pessoa para trabalhar com o desenvolvimento e planejamento de softwares e hardwares.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ipr} alt={`${NomeGleiton} ${ipr}`} />
                    <h3>Montagem e Manuten????o de Computadores - UNISC/IPR</h3>
                </div>
                <p className={styles.periodo}>Montagem e Manuten????o de Computadores - UNISC(Universidade de Santa Cruz do Sul)/IPR (Instituto Padre Reus) - 1/2011 ??? 07/2011</p>
                <p className={styles.pDesc}>Montagem, configura????o e manuten????o de hardware de computadores. Al??m de cuidados no manuseio e utiliza????o de pe??as e equipamentos de inform??tica, instala????o e configura????o dos diversos componentes de um microcomputador, seus perif??ricos e dos dispositivos auxiliares utilizados na computa????o.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={eernf} alt={`${NomeGleiton} ${eernf}`} />
                    <h3>Ensino M??dio Completo - Escola Estadual Raimundo Nonato da Fonseca</h3>
                </div>
                <p className={styles.periodo}>1/2005 ??? 12/2007</p>
                <p className={styles.pDesc}>Conclusa??o do Ensino me??dio do ensino Ba??sico - Escola p??blica</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={icaUFMG} alt={`${NomeGleiton} ${icaUFMG}`} />
                    <h3>T??cnico em Agropecu??rio - ICA/UFMG</h3>
                </div>
                <p className={styles.periodo}>T??cnico em Agropecu??rio - ICA/UFMG - N??cleo Montes Claros - MG - 1/2005 ??? 12/2006</p>
                <p className={styles.pDesc}>*Falta Est??gio - Planejar, executar, acompanhar e fiscalizar projetos agropecu??rios, administrar propriedades rurais, realizar levantamentos topogr??ficos, elaborar e monitorar programas preventivos de sanitiza????o da produ????o animal, vegetal e agroindustrial e atuar em programas de assist??ncia t??cnica, extens??o rural e pesquisa s??o algumas das responsabilidades do profissional formado em Agropecu??ria.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>


            <span id='experiencia'>.</span>
            <h2 >EXPERI??NCIAS PROFISSIONAIS</h2>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bg} alt={`${NomeGleiton} ${bg}`} />
                    <h3>Brasil Go??ndolas LTDA</h3>
                </div>
                <p className={styles.periodo}>Brasil Go??ndolas LTDA - Maio de 2022 ??? ate?? o Outubro - 5 meses / Canoas - Rio Grande do Sul

                </p>
                <p className={styles.pDesc}>Atuando na a??rea administrativa de folha de pagamento, compra, venda, contato com fornecedores, contratos, alvara??s, criac??a??o de planilhas para facilitar controles internos como estoque interno, estoque em centro de distribuic??a??o. Captac??a??o de clientes atrave??s de loja online e-commerce, cobranc??as, retornos. Facilidade de utilizac??a??o de sistema terceirizado qualquer que seja ou uso necessa??rio para uso da empresa.

                </p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Agente de Desenvolvimento Econ??mico - Prefeitura Municipal de Lagoa dos Patos - MG
                    </h3>
                </div>
                <p className={styles.periodo}>Agente de Desenvolvimento Econ??mico - Jun. de 2017 ??? ate?? Maio de 2022 - 5 anos, Lagoa dos Patos, Minas Gerais, Brasil

                </p>
                <p className={styles.pDesc}>O agente de desenvolvimento foi criado para auxiliar o processo de implementac??a??o e continuidade dos programas e projetos contidos na Lei Geral das Micro e Pequenas Empresas. Desempenhar um papel importante de coordenac??a??o e continuidade das atividades para desenvolvimento sustenta??vel do munici??pio, juntamente com o poder pu??blico municipal e as lideranc??as do setor privado local. Executar e articular as poli??ticas para implementac??a??o da Lei Geral das Micro e Pequenas Empresas no Munici??pio e criar uma articulac??a??o e mobilizac??a??o na cidade em torno da causa do desenvolvimento local. Te??cnicas para moderac??a??o de grupos, negociac??a??o e soluc??a??o de conflitos, elaborac??a??o e gesta??o de projetos, articulac??a??o, captac??a??o de recursos.

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
                <p className={styles.pDesc}>Atendimento ao pu??blico MEI, ME, EPP, emissa??o de alvara??, Emissa??o de notas fiscais, envio de documentos, cobranc??as de DAS ??N do simples nacional, organizac??a??o dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrac??o??es municipais, oferecendo apoio para empreendimentos de todos os portes.Trabalho executado juntamente com o de Agente de Desenvolvimento</p>
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
                <p className={styles.pDesc}>Atendimento ao pu??blico MEI, ME, EPP, emissa??o de alvara??, Emissa??o de notas fiscais, envio de documentos, cobranc??as de DAS ??N do simples nacional, organizac??a??o dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrac??o??es municipais, oferecendo apoio para empreendimentos de todos os portes.Trabalho executado juntamente com o de Agente de Desenvolvimento</p>
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
                <p className={styles.pDesc}>Marketing Digital Criac??a??o de Sites Redes Sociais Vendas Online Atendimento ao Cliente Estrate??gias de Marketing para aumentar Vendas online. Va??rios projetos Online.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Agente administrativo Fazenda??rio - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses</p>
                <p className={styles.pDesc}>Lagoa dos Patos, Minas Gerais, Brasil Executar servic??os relacionado a fazenda Municipal, orientar e esclarecer os contribuintes quanto ao cumprimento das obriga????es legais referentes ao pagamento de tributos, com o objetivo de evitar a sonega????o.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Cadastro Imobilia??rio - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses - Juntamente com o Agente Administrativo Fazend??rio</p>
                <p className={styles.pDesc}>Gerenciamento de cadastro, alterac??a??o e baixa de imo??veis, desmembramento e e regularizac??a??o fundia??ria no munici??pio de Lagoa dos Patos MG.</p>
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
                <p className={styles.pDesc}>Cadastro, confer??ncia, exclusa??o e organizac??a??o de itens do patrim??nio p??blico. Etiquetagem, altera????o e movimenta????o de patrim??nio.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Gerente de operac??o??es de almoxarifado - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>set. de 2014 - mar. de 2016 - 1 ano 7 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>Atuando na a??rea de cadastro, baixa, confer??ncia e entrega de produtos em estoque</p>
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
            <h2>LICEN??AS E CERTIFICADOS</h2>
            
            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={html} alt={`${NomeGleiton} `} />
                    <h3>Javascript Web</h3>
                </div>
                <p className={styles.periodo}>31 de outubro de 2021 - Curso Em Video</p>
                <p className={styles.pDesc}>Criac??a??o de Sites responsivos, domi??nio front-end.(conhecimento Me??dio) Javascript MasterClass.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={html} alt={`${NomeGleiton} `} />
                    <h3>HTML, CSS</h3>
                </div>
                <p className={styles.periodo}>2 de mar??o de 2022 - Curso em v??deo</p>
                <p className={styles.pDesc}>Criac??a??o de Sites responsivos, domi??nio front-end.(conhecimento Me??dio) Javascript MasterClass.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                    <h3>Microsoft Office 365 - Conhecendo o Onedrive</h3>
                </div>
                <p className={styles.periodo}>Fundac??a??o Bradesco - Emitido em ago. de 2021</p>
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
                <p className={styles.periodo}>Fundac??a??o Bradesco - Emitido em ago. de 2021</p>
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
                <p className={styles.periodo}>Fundac??a??o Bradesco - Emitido em ago. de 2021</p>
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
                <p className={styles.periodo}>Fundac??a??o Bradesco - Emitido em ago. de 2021</p>
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
                <p className={styles.periodo}>Fundac??a??o Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={igtiO} alt={`${NomeGleiton} IGTI`} />
                    <h3>DEV SUM MIT 3?? EDI????O 2021</h3>
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
                    <h3>Curso de Pregoeiro para Licitac??a??o</h3>
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
                    <h3>Fo??rum: Regularizac??a??o Fundia??ria Urbana - Reurb e o desenvolvimento das cidades</h3>
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
                    <h3>Seguran??a TI: Seguranc??a da Informac??a??o</h3>
                </div>
                <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
                <div className={styles.iconeCertificado}>                    
                    {tiSegImage}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                    <h3>Blog Autom??tico - Ganhar Dinheiro Online Marketing Digital</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em dez. de 2020</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
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
                    <h3>Curso de agente de Desenvolvimento Avanc??ado</h3>
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
                    <h3>Curso de agente de Desenvolvimento Ba??sico</h3>
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
                    <h3>Certificado Aprovac??a??o Fundia??ria - EBAP - Escola Brasileira de Administrac??a??o Pu??blica</h3>
                </div>
                <p className={styles.periodo}>EBAP - Escola Brasileira de Administrac??a??o Pu??blica Emitido em mar. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={facit} alt={`${NomeGleiton} Facit`} />
                    <h3>I Encontro de Pesquisa Em Cie??ncias e Tecnologia FACIT</h3>
                </div>
                <p className={styles.periodo}>Faculdade de Cie??ncia e Tecnologia de Montes Claros - FACIT - Emitido em out. de 2015</p>
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
                <p className={styles.periodo}>Crea Jr-MG Nu??cleo Montes Claros - Emitido em ago. de 2015</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
                
            </div >








            <span id='publica'>.</span>




            <h2 >PUBLICA????ES</h2>
            

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


            
            <h2>PROJETOS E PORTF??LIOS</h2>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>Sala Mineira do Empreendedor</h3>
                </div>
                <p className={styles.periodo}><a href="https://salamineira.com/">https://salamineira.com/</a></p>
                <p className={styles.pDesc}>A Sala Mineira do Empreendedor, fruto de uma parceria entre JUCEMG, SEBRAE e munic??pios mineiros...</p>
                <div className={styles.iconeCertificado}>                    
                    {ISala}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>Naturfive</h3>
                </div>
                <p className={styles.periodo}><a href="https://naturfive.com">https://naturfive.com</a></p>
                <p className={styles.pDesc}>Desde 2020 somos Consultora Natura com muito orgulho e confian??a! Tanto que em 2021 investimos tudo no site Naturfive Cosm??ticos para vender on-line todos os produtos Natura, com maior...</p>
                <div className={styles.iconeCertificado}>                    
                    {INaturfive}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>?? as Zid??ia!</h3>
                </div>
                <p className={styles.periodo}><a href="https://gleitons.github.io/sou-tim/index.html">https://oaszideia.com</a></p>
                <p className={styles.pDesc}>Memes aleatoriamente - Clique na imagem e coloque aleatoriamente...</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
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
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>seusiteonline.com</h3>
                </div>
                <p className={styles.periodo}><a href="https://seusiteonline.com">https://seusiteonline.com</a></p>
                <p className={styles.pDesc}>Seusiteonline.com ?? uma empresa familiar independente de cria????o de sites com sede em Minas Gerais, Brasil, em uma pequena cidade no Norte de Minas....</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>megadehoje.com</h3>
                </div>
                <p className={styles.periodo}><a href="https://megadehoje.com">https://megadehoje.com</a></p>
                <p className={styles.pDesc}>Somos um site com not??cias, informa????es e dicas de como ganhar na mega-sena. Criado em 2018 o megadehoje.com te informa os ??ltimos sorteios e premia????es que...</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>veraoshop.com</h3>
                </div>
                <p className={styles.periodo}><a href="https://veraoshop.com">https://veraoshop.com</a></p>
                <p className={styles.pDesc}>O ver??o Shop Online est?? revolucionando o mercado de vestu??rio, mais especificamente de t??nis. A mais de 05 anos no mercado cal??adista vendendo produtos de qualidade e sempre com o menor pre??o e na internet temos loja virtual desde 2018..</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
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
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
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
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
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
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
                    <h3>asconstrutora.com.br</h3>
                    
                </div>
                <p className={styles.periodo}><a href="https://asconstrutora.com.br">https://asconstrutora.com.br</a></p>
                <p className={styles.pDesc}>AS Construtora ?? uma empresa familiar que est?? no mercado a mais de 05 anos, nossos profissionais tem mais mais de 12 anos de experi??ncia na ??rea de constru????o..</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
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
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} width={50} height={50} />
                    <h3>gondoladeaco.com.br/</h3>
                </div>
                <p className={styles.periodo}><a href="http://gondoladeaco.com.br/">http://gondoladeaco.com.br/</a></p>
                <p className={styles.pDesc}>G??ndolas de A??o e Expositores para Lojas e Supermercados, Porta Pallets, m??veis de a??o, m??quinas e equipamentos para estabelecimentos comerciais em Canoas..</p>
                <div className={styles.iconeCertificado}>                    
                    {semInformacao}                     
                </div>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTF??LIOS`} />
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