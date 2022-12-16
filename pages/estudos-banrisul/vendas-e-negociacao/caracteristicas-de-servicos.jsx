import styles from '../../../styles/Estudos.module.css'
import Image from 'next/image'
import Estrategiasic from '../../../public/imagens/grafico-nao.png'
import Head from 'next/head'
import Menuestudos from '../Menuestudos'
export default function Nocoesestrategiasi() {
    return (
        <>
            <Head>
                <title>Caracteristicas dos serviços</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>

                <h2>Caracteristicas dos serviços</h2>
                <p>Apresenta uma situação para resolvermos</p>
                <ul>
                    <li>Intangibilidade</li>
                    <ul>
                        <li>Precisa pegar no serviço, experimentar</li>
                    </ul>
                    <li>Perecibilidade</li>
                    <ul>
                        <li>Inestocabilidade, gerente não veio</li>
                    </ul>
                    <li>Participação do Clinte</li>
                    <ul>
                        <li>O cliente já sabe o serviço desejado</li>
                    </ul>
                    <li>Inseparabilidade</li>
                    <ul>
                        <li>Dois serviços, não pode ser um ou outro, tem que ter os dois juntos</li>
                    </ul>
                    <li>Viariabilidade</li>
                    <ul>
                        <li>Varia, não tem como controlar</li>
                    </ul>

                   
                </ul>
                <h3>Mix de marketing</h3>
                <ul>
                    <li>Preço</li>
                    <li>Praça</li>
                    <li>Produto/serviço</li>
                    <li>Promoção</li>
                </ul>
                <p>Qualidade: São qualidade ou serviços oferecidos pelos bancos, bencmarketing</p>
                <li>Shareholders</li>
                <p>Empresa trabalha em funçãoo do acionista</p>
                <li>Stajeholder</li>
                <p>Empresa, sociedade, funcionario, acionista, ma, sindicado, governo</p>
                <li>Sustentabilidade - Social, economica e ambiental</li>
                <div className={styles.importante}>
                    <h4>Estratégias de pother</h4>
                    <p>Liderança em custo</p>
                    <p>Diferenciação</p>
                    <p>Enfoque / foco / Nicho</p>
                    <ul>
                        <li>Quando a empresa se especializa</li>
                    </ul>
                </div>
                <div className={styles.importante}>
                    <h1>EU SOU CAPAZ</h1>
                </div>
                <h3>Analise Swot</h3>
                <p>Sigla FOFA - fortalezas, oportunidades, fraquezas, ameaças, fofa</p>
                <p>O e A - oportunidades e ameaças, mas são externas, não tem como controlar, fora da instituição, {'EU SOU CAPAZ E VOU CONSEGUIR'}</p>
                <p>Quanto mais variaveis eu utilizar mais conhecimento eu terei conhecimento, mais eu vou conhecer meu mercado.</p>
                <li>Os seguimentos são heterogeneas, e dentro dos seguimentos, heteregeneas, demografico</li>
                <li>Critério Geográfico</li>
                <ul>
                    <li>O motivo da escolha, na padaria de gente pobre, o criterio é tomado em váriaveis comportamentais</li>
                    <li>Um nicho é um segmento dentro de um segmento</li>
                </ul>
                <h3>Matriz BCG</h3>
                <p>Tomadas considerações</p>
                <ul>
                    <li>Participação do Mercado</li>
                </ul>

                <div className={styles.espaco}></div>
            </div>
        </>
    )
}