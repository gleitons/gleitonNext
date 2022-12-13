import styles from '../../../styles/Estudos.module.css'
import Image from 'next/image'
import Estrategiasic from '../../../public/imagens/grafico-nao.png'
import Head from 'next/head'
import Menuestudos from '../Menuestudos'
export default function Nocoesestrategiasi() {
    return (
        <>
            <Head>
                <title>Noções de estratégias empresariais</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>

                <h3>Noções de estratégia Empresarial</h3>
                <h1>Planejamento estratégico</h1>
                <p>O planejamento pode se subdividir em níveis:</p>
                <li>Elaborado nos níveis mais altos da organização - das organizações em geral</li>
                <ul>
                    <li>Níveis institucional</li>
                    <li>Nivel de direção</li>
                    <li>É igual a cupula da organização</li>
                </ul>
                <li>Abrange a organização como um todo + a relação da organização com o ambiente externo</li>
                <ul>
                    <li>Abrangente</li>
                    <li>Geral</li>
                    <li>se ele trata com o ambiente externo, ele é sistemico</li>
                    <li>Relaciona a organização com o ambiente</li>
                    <li>Papel do planejamento estratégico, é o plano elaborado pela cupula, posicionar a empresa ao ambiente externo</li>
                    <li>Ter em mente que a elaboração é para longo prazo, focado no futuro da organização</li>
                </ul>
                <li>Missão, visão e valores</li>
                <li>Diagnostico interno</li>
                <li>Analise da situação atual</li>
                <li>diagnostico externo</li>
                <li>Formulação ao plano estratégico</li>
                <li>Desmembramento</li>
                <li>Implementação</li>
                <li>Avaliação</li>
                <li>Isso é um esqueleto estratégico, nem sem pre cai em prova</li>
                <li>Todos os esforços da empresa</li>
                <li>Razão de existência</li>
                <li>Delimita a área de atuação</li>
                <p>Cada organização tem uma missão na sua área de atuação, razao de existencia</p>
                <li>É um papel que a organização desemplenha perante a sociedade</li>
                <li>A missão é atemporal - devendo ser realizada todos os dias de acordo com a visão da empresa</li>
                <h4>Visão</h4>
                <p>É o futuro da organização, visando aquilo que a empresa quer ser no futuro</p>
                <ul>
                    <li>É definida no nível estratégico e:</li>
                    <ul>
                        <li>Subordina toda a organização</li>
                        <li>Referencial para a organizção</li>
                    </ul>
                </ul>
                <p>Ex: Ong: Prestar serviços de assistencia social, visão, ser reconhecida nacional e internacionamente</p>
                <h3>Diagnostico estratégico</h3>
                <p>Definir o que é diagnóstico estratégico é realizado no nível estratégico, realizado na cúpula da empresa</p>
                <li>Realizado em nível estratégico</li>
                <ul>
                    <li>Coletar dados e informações</li>
                </ul>
                <li>Trata-se da coleta de dados e informações sobre o ambiente interno e externo</li>
                <h3>Diagnóstico estratégico</h3>
                <li>Diagnostico estratégico interno</li>
                <ul>
                    <li>Analisa variáveis controláveis</li>
                </ul>
                <li>Diagnostico estratégico externo</li>
                <ul>Variaveis não controláveis</ul>
                <li>Não tem controle sobre um fornecedor ou algo parecido</li>
                <h3>O que precisa ter em um plano estratégico?</h3>
                <p>É o resultado do meu plano estratégico, já devo ter resolvido a questão de visão, missão e valores</p>
                <li>Diagnóstico estratégicos, tanto interno quanto externo</li>
                <li>Objetivos estratégicos, vamos desenha um ordenograma</li>
                <ul>
                    <li>Olhar sobre a organização toda, olhar estratégico</li>
                    <ul>
                        <li>Objetivos</li>
                        <li>Metas estratégicas</li>
                    </ul>
                </ul>
                <p>Eu tenho:</p>
                <ol>
                    <li>Diretores</li>
                    <li>Genrencial</li>
                </ol>
                <p>Quando o prazo longo - acima de 4 anos</p>
                <p>Longo: estratégico</p>
                <p>Médio prazo: Tático</p>
                <p>Curto: Operacional</p>
                <li>Clientes: Diagnóstico Externo</li>

                <h3>Analise de Mercado</h3>
                <h4>Análise SWOT</h4>
                <ul>
                    <li>Ferramente de apoio estratégico</li>
                    <li>Utilizada no diagnósitco estratégico</li>
                    <ul>
                        <li>Coleta de dados e informações sobre o ambiente interno e externo</li>
                    </ul>
                </ul>
                <li>Foças - Fraquezas - Opotunidades - ameaças - FOFA</li>
                <li>Oportunidade: variavel esterna</li>

                <div className={styles.tabela}>
                    <table>
                        <thead>
                            <tr>
                                <td>Info</td>
                                <td>Fraquezas</td>
                                <td>Forças</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ameaças</td>

                                <td>Cenário
                                    <ul>
                                        <li>Cenário: Problema</li>
                                        <li>Estratégia: Sobreviver</li>
                                    </ul>
                                </td>
                                <td>Cenário
                                    <ul>
                                        <li>Cenário: Vulnerabilidade</li>
                                        <li>Estratégia: Manutenção</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Oportunidades</td>
                                <td>Cenário
                                    <ul>
                                        <li>Cenário: Limitação</li>
                                        <li>Estratégia: Crescimento</li>
                                    </ul>
                                </td>
                                <td>Cenário
                                    <ul>
                                        <li>Cenário: Alavancagem</li>
                                        <li>Estratégia: Desenvolver</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                <p>Todas as organizações tem entrada e saída, saída tem originarias dos clientes e as entradas tem dos fornecedores.</p>
                <p>Definição de forças do michel Conter </p>
                <Image  src={Estrategiasic} className={styles.imgtotal} alt='estratégias' />
                <li>Três estratégias genéricas</li>
                <p>Na visão de Michel Porter</p>
                <h4>Estratégia</h4>
                <div >
                    <ul>
                        <li>Liderança de custos</li>
                        <ul>
                            <li>Obter custos menores, para ter produtos baratos</li>
                            <li>Eficiencia / Economia de escala</li>
                            <li>Têndencia a padronização, controle e centralização</li>
                        </ul>
                        <li>Diferenciação</li>
                        <ul>
                            <li>Diferenciar-se dos concorrentes / obter muita inovação</li>
                            <li>Incentivar a criatividade para criar coisas unicas / produtos unicos e inovadores</li>
                            <li>Tendência á descentrilazação, autonomia e flexibilidade</li>
                    
                        </ul>
                        <li>Focalização / Nicho</li>
                        <ul>
                            <li>Focalizar em um nicho, mercado, tipo de cliente, região</li>
                            <li>Focalização</li>
                            <ul>
                                <li>Em lideração de custos em atendimento ao nicho</li>
                                <li>Em diferenciar-se em determinado nicho</li>
                            </ul>
                        </ul>
                    </ul>
                    <p>* As estratégias de michel potter, podem ser utilizadas em conjuntos quanto em partes separadas</p>
                </div>

                <h3>Forças competitivas</h3>
                <h4>Cadeia de valor na visão de michel Porter</h4>
                <li>Conjuto de atividades para criar um produto p/ o cliente</li>
                <li>Sua Análise melhorada a compreensão da organização sobre o negócio</li>

                <li>Cadeia de Valor</li>
                <ol>
                    <li>Atividades Primárias</li>
                    <ul>
                        <li>Logistica Interna</li>
                        <li>Operações</li>
                        <li>Grande infraestrutura</li>
                    </ul>
                    <li>Atividades Secundárias</li>
                    <ul>
                        <li></li>
                    </ul>
                </ol>
                <h3>Identidade</h3>
                <h4>Identidade Organizacional</h4>
                <li>Identidade</li>
                <ul>
                    <li>É aquilo que identifica uma organização</li>
                    <li>Real personalidade da organização</li>
                    <li>Tangivel</li>
                    <li>Soma de:</li>
                    <ul>
                        <li>Atributos</li>
                        <li>Comunicação</li>
                        <li>Expressões</li>
                    </ul>
                    <li>Envolve a sua apresentação visual da organização</li>
                    <li>É aquilo que a organização realmente faz</li>
                </ul>
                <ul>
                    <li>Decorre da identidade visual</li>
                </ul>
                <div className={styles.importante}>
                    <p>Obs: Identidade Visual</p>
                    <ul>
                        <li>Elementos visuais, sonoros, simbolos e logos, entre outros.</li>
                    </ul>
                    <li>Distique e identifica</li>
                    <ul>
                        <li>info</li>
                    </ul>
                    <li>Designs gráficos</li>
                </div>
                <h4>Identidade da marca</h4>
                <p>Identidade corporativida, reflete a realidade da organização</p>
                <p>Identidade é o real comportamento da empresa</p>
                <p>Real comportamento + comunicação</p>
                <p>Imagem de uma marca se refere ao plano de elementos de sua simbolismo e projeção publica</p>
                <div>
                    <p>Identidade corporativa</p>
                    <p>Identidade organizacional é de acordo com a cultura organizacional</p>
                </div>


                <div className={styles.espaco}></div>
            </div>
        </>
    )
}