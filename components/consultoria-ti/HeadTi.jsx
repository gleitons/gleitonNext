import Image from "next/image"
import styles from '../../styles/servicos.module.css'
import servicos from "../../public/img/contratos-de-ti.jpeg"
import wp from "../../public/img/wp.webp"
import { IoArrowBackCircle } from 'react-icons/io5'
import preparado from "../../public/img/voce-preparado.png"
import BannerTopo from "./BannerTopo"
import HeadTopo from "./HeadTopo"
import Sobrenos from "./Sobrenos"

import Link from "next/link"
import { IoLogIn } from "react-icons/io5"
export default function HeadTi() {

    return (
        <>  
            <Link href="/" >
            <div>
                <IoArrowBackCircle className={styles.bottonVoltar} />
                </div>
            </Link>
           
            <div className={styles.icoW}>
                <Link href="https://api.whatsapp.com/send?phone=555180652808&text=Olá, gostaria de uma consulta com a empresa futuro Consultoria.">
                    <Image src={wp} />
                </Link>
            </div>
            <HeadTopo />
            <BannerTopo />
            <Sobrenos />

            <div className={styles.hTopo} >
                <div className={styles.place}>
                    <h2>Suporte e Gestão de TI</h2>
                    <p>Garanta a eficiência dos seus negócios ao eliminar problemas de comunicação, otimizar a velocidade do sistema e resolver falhas nos equipamentos de informática.</p>
                    <Link href="https://api.whatsapp.com/send?phone=555180652808&text=Olá, gostaria de uma consulta com a empresa futuro Consultoria."><button className={styles.pButton}>Fale agora com um Consultor</button></Link>
                </div>

            </div>
            <div className={styles.carInfo}>
                <h2>Suporte e Gestão de TI Soluções Completas</h2>
                <p>Manter seu foco nos negócios e não na operação é determinante para melhorar a performance da empresa. No Outsourcing de TI, a responsabilidade por resolver e planejar ações relacionadas a tecnologias de informação ficam com a gente.

                </p>
            </div>
            <div>
                <div className={`${styles.cardServicos} ${styles.carInfo}`}>
                    <div>
                        <h2>Outsourcing de TI</h2>
                        <p>Potencialize o desempenho da sua empresa ao concentrar-se no seu core business e deixar a operação por nossa conta. Com o Outsourcing de TI, assumimos a responsabilidade de resolver e planejar ações relacionadas à tecnologia da informação. Com mais de 18 anos de experiência no setor, proporcionamos agilidade aos negócios e otimização dos processos.</p>
                        <p>Trabalhando juntos, identificaremos o plano ideal para sua empresa, seja por meio de atendimentos presenciais, remotos ou uma combinação de ambos. Oferecemos consultoria e planejamento para os próximos níveis de TI.</p>
                    </div>
                    <div>
                        <Image src={servicos} width={400} quality={60} />
                    </div>
                </div>
                <div>

                </div>
                <div className={`${styles.Soferecido} ${styles.carInfo} ${styles.suporte}`}>
                    <h2>Suporte e Gestão de TI</h2>
                    <p><strong>A Futuro Consultoria - CNPJ 26.300.217/0001-00</strong> oferece uma variedade de opções de atendimento para atender às suas necessidades:</p>
                    <ul>
                        <li>Atendimentos avulsos, emergenciais e contratos de terceirização estão disponíveis.</li>
                        <li>Nossa equipe de suporte técnico está pronta para ser o primeiro contato para seus chamados, seja por telefone, e-mail ou conexão remota.
                        </li>
                        <li>Lidamos com uma ampla gama de problemas, como lentidão na rede interna, atualizações de software, entre outros, resolvendo-os rapidamente e com impacto mínimo na estrutura do cliente.
                        </li>
                        <li>Temos analistas especializados em várias áreas, incluindo multiplataformas, servidores, rede, sistemas operacionais e computação em nuvem.
                        </li>
                        <li>Oferecemos atendimento no local, se necessário, para problemas que exigem conhecimentos específicos.
                        </li>
                        <li>Além disso, realizamos serviços de manutenção preventiva, reparos básicos em hardware, otimização de desempenho e verificação de computadores, notebooks, impressoras e periféricos.
                        </li>
                    </ul>
                    <p><strong>Confie na Futuro Consultoria - CNPJ 26.300.217/0001-00</strong> para fornecer um suporte completo e soluções eficientes para suas necessidades de TI. Estamos aqui para ajudar você a manter seus sistemas funcionando sem problemas</p>
                </div>
            </div>
            <div className={`${styles.cardServicos} ${styles.carInfo}`}>
                <div>
                    <Image src={preparado} width={500} quality={60} alt="você está preparado" />
                    <p>Mais de 50% das empresas já agiram ousadamente e deram o salto para a terceirização de TI. Quando você vai??</p>
                </div>
                <div>
                    <h2>Contratos de Suporte e Gestão em TI</h2>
                    <h3>Nossos contratos são personalizados de acordo com as necessidades de cada Business</h3>
                    <ol>
                        <li>Suporte Remoto e Presencial</li>
                        <li>Suporte do Básico ao Avançado</li>
                        <li>Escolha o SLA</li>
                        <li>Suporte Ilimitado</li>
                        <li>Suporte 24/07/365</li>
                        <li>Atendimento Multicanal (Omnichannel)</li>
                        <li>Sistema Service Desk/Help Desk</li>
                        <li>Controle Completo de Atendimentos</li>
                    </ol>
                    <p>Cada empresa depende de seus aplicativos e componentes de infraestrutura, como servidores, rede e segurança. A terceirização do gerenciamento da infraestrutura de TI com um provedor confiável oferece benefícios estratégicos e eficiência de custos. Isso permite que os profissionais de gestão dediquem mais atenção às áreas operacionais, alinhem a TI aos objetivos do negócio, otimizem processos e adquiram novas capacidades.</p>
                    <p>As estatísticas demonstram que as empresas que estabelecem parcerias com provedores de gerenciamento de TI têm maior capacidade de capitalizar as mudanças do mercado em comparação com outras. Isso ocorre porque podem aproveitar as economias de escala, o alto desempenho e a entrega aprimorada de serviços dos parceiros de TI para solucionar problemas urgentes e impulsionar a inovação e mudanças significativas.</p>
                </div>

            </div>

            <div className={styles.contatoB}>
                <div className={styles.contatoC}>
                    <h2>Fale Conosco</h2>
                    <div>
                        <p>Nome</p>
                        <input type="text" name="" id="" placeholder="Nome" />
                        <p>Fone</p>
                        <input type="text" name="" id="" placeholder="Fone" />
                        <p>E-mail</p>
                        <input type="text" name="" id="" placeholder="Fone" />
                        <p>Mensagem</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <Link href="https://api.whatsapp.com/send?phone=555180652808&text=Olá, gostaria de uma consulta com a empresa futuro Consultoria." ><button type="submit">Enviar</button></Link>

                    </div>
                </div>
            </div>

            <div>
                <p>TODOS OS DIREITO RESERVADOS - FUTURO CONSULTORIA - 26.300.217/0001-00</p>
            </div>

        </>
    )
}