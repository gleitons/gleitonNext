import styles from '../styles/Objetivo.module.css'

import Image from 'next/image'

import raimundo from "../public/imagens/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png"
import icaUFMG from "../public/imagens/ica-ufmg.png"
import ipr from "../public/imagens/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png"
import bg from "../public/imagens/logo-brasil-gondolas-gleiton-aparecido-soares-de-souza.png"
import hd from "../public/imagens/hd-produtos-digitais.png"
import bradesco from "../public/imagens/fundacao-bradesco.png"
import bnc from "../public/img/bolsa-nacional-de-compras.jpg"
import udemy from "../public/img/udemy.png"
import sebrae from "../public/img/sebrae.png"
import ebape from "../public/img/ebape.png"
import facit from "../public/img/facit-femc-gleiton-aparecido-soares-de-souza-on.png"

import html from "../public/img/html-css-javascript.png"




import mupi from "../public/imagens/mupi-systems.jpeg"
import doceneira from "../public/imagens/doceneira.png"
import projetoP from "../public/imagens/projeto-portofolio.png"
import cruzeiro from '../public/imagens/cruzeiro-do-sul-logo.jpeg'
import senac from '../public/imagens/senac-logo.png'
import ifnmg from '../public/img/instituto-federal-gleiton-aparecido-soares-de-souza.jpeg'
import ipreus from '../public/img/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png'
import ldp from '../public/imagens/prefeitura-de-lagoa-dos-patos-mg-logo-gleiton-aparecido-soares-de-souza.png'
import eernf from '../public/img/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png'


export default function Objetivo() {
    const NomeGleiton = 'Gleiton Aparecido Soares de Souza - Formação acadêmica'

    return (
        <>
      
        <div className={styles.corpoDesc}>
            <span id='objetivo'>.</span>
            <h2>OBJETIVO</h2>
            <div className={styles.topicoDiv}>
                <p className={styles.pDesc}>Objetivo de atuação na área de TI (Tecnologia da Informação), administrativa, financeira, ou contábil, desenvolvendo e agregando conhecimento de todas as habilidades adquiridas ao longo de minha jornada profissional. Sempre disposto a receber conhecimento da organização que eu venha a me ingressar. Tenho interesse de construir uma carreira de sucesso, dessa forma contribuir para que a empresa alcance seus objetivos através do meu trabalho.</p>
            </div>

            <span id='formacao'>.</span>
            <h2>FORMAÇÃO</h2>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={cruzeiro} width={50} height={50} alt={NomeGleiton}  />
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
                <p className={styles.periodo}>1/2005 – 12/2007</p>
                <p className={styles.pDesc}>Conclusão do Ensino médio do ensino Básico - Escola pública</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={icaUFMG} alt={`${NomeGleiton} ${icaUFMG}`} />
                    <h3>Técnico em Agropecuário - ICA/UFMG</h3>
                </div>
                <p className={styles.periodo}>Técnico em Agropecuário - ICA/UFMG - Núcleo Montes Claros - MG - 1/2005 – 12/2006</p>
                <p className={styles.pDesc}>*Falta Estágio - Planejar, executar, acompanhar e fiscalizar projetos agropecuários, administrar propriedades rurais, realizar levantamentos topográficos, elaborar e monitorar programas preventivos de sanitização da produção animal, vegetal e agroindustrial e atuar em programas de assistência técnica, extensão rural e pesquisa são algumas das responsabilidades do profissional formado em Agropecuária.</p>
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
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>SEBRAE - Sala Mineira do Empreendedor de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Atendimento ao Cliente - Sala Mineira do Empreendedor em Lagoa dos Patos MG</p>
                <p className={styles.pDesc}>Atendimento ao público MEI, ME, EPP, emissão de alvará, Emissão de notas fiscais, envio de documentos, cobranças de DAS ́N do simples nacional, organização dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrações municipais, oferecendo apoio para empreendimentos de todos os portes.Trabalho executado juntamente com o de Agente de Desenvolvimento</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>SEBRAE - Sala Mineira do Empreendedor de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Atendimento ao Cliente - Sala Mineira do Empreendedor em Lagoa dos Patos MG</p>
                <p className={styles.pDesc}>Atendimento ao público MEI, ME, EPP, emissão de alvará, Emissão de notas fiscais, envio de documentos, cobranças de DAS ́N do simples nacional, organização dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrações municipais, oferecendo apoio para empreendimentos de todos os portes.Trabalho executado juntamente com o de Agente de Desenvolvimento</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Gerente Comercial - HD Produtos Digitais</h3>
                </div>
                <p className={styles.periodo}>HD Produtos Digitais 26300217000100</p>
                <p className={styles.pDesc}>Marketing Digital Criação de Sites Redes Sociais Vendas Online Atendimento ao Cliente Estratégias de Marketing para aumentar Vendas online. Vários projetos Online.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Agente administrativo Fazendário - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses</p>
                <p className={styles.pDesc}>Lagoa dos Patos, Minas Gerais, Brasil Executar serviços relacionado a fazenda Municipal, orientar e esclarecer os contribuintes quanto ao cumprimento das obrigações legais referentes ao pagamento de tributos, com o objetivo de evitar a sonegação.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Cadastro Imobiliário - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses - Juntamente com o Agente Administrativo Fazendário</p>
                <p className={styles.pDesc}>Gerenciamento de cadastro, alteração e baixa de imóveis, desmembramento e e regularização fundiária no município de Lagoa dos Patos MG.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Gerente Patrimonial - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>jan. de 2015 - mar. de 2016 - 1 ano 3 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>Cadastro, conferência, exclusão e organização de itens do património público. Etiquetagem, alteração e movimentação de património.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ldp} alt={`${NomeGleiton} ${ldp}`} />
                    <h3>Gerente de operações de almoxarifado - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>set. de 2014 - mar. de 2016 - 1 ano 7 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>Atuando na área de cadastro, baixa, conferência e entrega de produtos em estoque</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={doceneira} alt={`${NomeGleiton} Doceneira`} />
                    <h3>Gerente de vendas e estoque / Ramo de Alimentos - Doceneira e Alimentos LTDA</h3>
                </div>
                <p className={styles.periodo}>04/2009 - 08/2013 - Comercial Doceneira e Alimentos LTDA</p>
                <p className={styles.pDesc}>Gerenciava estoques, entrega, controle de validade e qualidade. Atendimento ao cliente e levantamento de dados para aprimorar lucros.</p>
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
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={html} alt={`${NomeGleiton} `} />
                    <h3>HTML, CSS</h3>
                </div>
                <p className={styles.periodo}>2 de março de 2022 - Curso em vídeo</p>
                <p className={styles.pDesc}>Criação de Sites responsivos, domínio front-end.(conhecimento Médio) Javascript MasterClass.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                    <h3>Microsoft Office 365 - Conhecendo o Onedrive</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                    <h3>Microsoft Office 365 - Conhecendo o Onenote</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                    <h3>Microsoft Office 365 - Conhecendo o Planner</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                    <h3>Microsoft Office 365 - Conhecendo o Teams</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>
            
            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bradesco} alt={`${NomeGleiton} ${bradesco}`} />
                    <h3>Microsoft Office 365 - Conhecendo o Outlook</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={bnc} alt={`${NomeGleiton} ${bnc}`} />
                    <h3>Curso de Pregoeiro para Licitação</h3>
                </div>
                <p className={styles.periodo}>Bolsa Nacional de Compras Emitido em jul. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={mupi} alt={`${NomeGleiton} ${mupi}`} />
                    <h3>Fórum: Regularização Fundiária Urbana - Reurb e o desenvolvimento das cidades</h3>
                </div>
                <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={mupi} alt={`${NomeGleiton} ${mupi}`} />
                    <h3>Segurança TI: Segurança da Informação</h3>
                </div>
                <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                    <h3>Blog Automático - Ganhar Dinheiro Online Marketing Digital</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em dez. de 2020</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                    <h3>Curso Completo de Instagram Marketing</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em nov. de 2018</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={udemy} alt={`${NomeGleiton} Udemy`} />
                    <h3>SEO WordPress: Como aparecer no Google</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em nov. de 2018</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={sebrae} alt={`${NomeGleiton} Sebrae`} />
                    <h3>Curso de agente de Desenvolvimento Avançado</h3>
                </div>
                <p className={styles.periodo}>Sebrae - Emitido em mai. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={sebrae} alt={`${NomeGleiton} Sebrae`} />
                    <h3>Curso de agente de Desenvolvimento Básico</h3>
                </div>
                <p className={styles.periodo}>Sebrae - Emitido em mai. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={ebape} alt={`${NomeGleiton} Ebape`} />
                    <h3>Certificado Aprovação Fundiária - EBAP - Escola Brasileira de Administração Pública</h3>
                </div>
                <p className={styles.periodo}>EBAP - Escola Brasileira de Administração Pública Emitido em mar. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={facit} alt={`${NomeGleiton} Facit`} />
                    <h3>I Encontro de Pesquisa Em Ciências e Tecnologia FACIT</h3>
                </div>
                <p className={styles.periodo}>Faculdade de Ciência e Tecnologia de Montes Claros - FACIT - Emitido em out. de 2015</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div>


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={facit} alt={`${NomeGleiton} Facit`} />
                    <h3>III Forum das Engenharias 2015</h3>
                </div>
                <p className={styles.periodo}>Crea Jr-MG Núcleo Montes Claros - Emitido em ago. de 2015</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
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
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>Naturfive</h3>
                </div>
                <p className={styles.periodo}><a href="https://naturfive.com">https://naturfive.com</a></p>
                <p className={styles.pDesc}>Desde 2020 somos Consultora Natura com muito orgulho e confiança! Tanto que em 2021 investimos tudo no site Naturfive Cosméticos para vender on-line todos os produtos Natura, com maior...</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>Ó as Zidéia!</h3>
                </div>
                <p className={styles.periodo}><a href="https://gleitons.github.io/sou-tim/index.html">https://oaszideia.com</a></p>
                <p className={styles.pDesc}>Memes aleatoriamente - Clique na imagem e coloque aleatoriamente...</p>
            </div>

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>httpst.net</h3>
                </div>
                <p className={styles.periodo}><a href="https://httpst.net">https://httpst.net</a></p>
                <p className={styles.pDesc}>Secretos - Dados Locked</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>seusiteonline.com</h3>
                </div>
                <p className={styles.periodo}><a href="https://seusiteonline.com">https://seusiteonline.com</a></p>
                <p className={styles.pDesc}>Seusiteonline.com é uma empresa familiar independente de criação de sites com sede em Minas Gerais, Brasil, em uma pequena cidade no Norte de Minas....</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>megadehoje.com</h3>
                </div>
                <p className={styles.periodo}><a href="https://megadehoje.com">https://megadehoje.com</a></p>
                <p className={styles.pDesc}>Somos um site com notícias, informações e dicas de como ganhar na mega-sena. Criado em 2018 o megadehoje.com te informa os últimos sorteios e premiações que...</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>veraoshop.com</h3>
                </div>
                <p className={styles.periodo}><a href="https://veraoshop.com">https://veraoshop.com</a></p>
                <p className={styles.pDesc}>O verão Shop Online está revolucionando o mercado de vestuário, mais especificamente de tênis. A mais de 05 anos no mercado calçadista vendendo produtos de qualidade e sempre com o menor preço e na internet temos loja virtual desde 2018..</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>alexbebidas.com.br</h3>
                </div>
                <p className={styles.periodo}><a href="https://www.alexbebidas.com.br/">https://www.alexbebidas.com.br/</a></p>
                <p className={styles.pDesc}>Venda de bebidas online...</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>alexbrasil.com.br</h3>
                </div>
                <p className={styles.periodo}><a href="https://www.alexbrasil.com.br/">https://www.alexbrasil.com.br/</a></p>
                <p className={styles.pDesc}>Venda de bebidas online...</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>allesestofados.com.br</h3>
                </div>
                <p className={styles.periodo}><a href="https://www.allesestofados.com.br">https://www.allesestofados.com.br</a></p>
                <p className={styles.pDesc}>Alles Estofados em Rio grande do Sul..</p>
            </div>  


            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>asconstrutora.com.br</h3>
                </div>
                <p className={styles.periodo}><a href="https://asconstrutora.com.br">https://asconstrutora.com.br</a></p>
                <p className={styles.pDesc}>AS Construtora é uma empresa familiar que está no mercado a mais de 05 anos, nossos profissionais tem mais mais de 12 anos de experiência na área de construção..</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>ferragemdoxandi.com.br</h3>
                </div>
                <p className={styles.periodo}><a href="https://ferragemdoxandi.com.br">https://ferragemdoxandi.com.br</a></p>
                <p className={styles.pDesc}>Ferragem do Xandi - FERRAGENS (RETALHO), Novo Hamburgo, 93530, Rua Pastor Gustavo Nordlund 337, TEL: 5195458..</p>
            </div>  
            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} width={50} height={50} />
                    <h3>gondoladeaco.com.br/</h3>
                </div>
                <p className={styles.periodo}><a href="http://gondoladeaco.com.br/">http://gondoladeaco.com.br/</a></p>
                <p className={styles.pDesc}>Gôndolas de Aço e Expositores para Lojas e Supermercados, Porta Pallets, móveis de aço, máquinas e equipamentos para estabelecimentos comerciais em Canoas..</p>
            </div>  

            <div className={styles.topicoDiv}>
                <div className={styles.flex}>
                    <Image src={projetoP} alt={`${NomeGleiton} PROJETOS E PORTFÓLIOS`} />
                    <h3>https://www.refap.com.br//</h3>
                </div>
                <p className={styles.periodo}><a href="https://www.refap.com.br/">https://www.refap.com.br/</a></p>
                <p className={styles.pDesc}>REFAP - Refinaria Alberto Pasqualini</p>
            </div>  



        </div>
       
        </>
    )
}