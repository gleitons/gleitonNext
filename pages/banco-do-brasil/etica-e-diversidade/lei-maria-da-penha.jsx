import styles from '../../../styles/Estudos.module.css'
import Image from 'next/image'
import Estrategiasic from '../../../public/imagens/grafico-nao.png'
import Head from 'next/head'
import Menuestudos from '../Menuestudos'
export default function Questoes() {
    return (
        <>
            <Head>
                <title>Questões Conhecimentos Bancários</title>
            </Head>
            <Menuestudos />
            <div className={styles.artigo}>
                <h2>Lei Maria da Penha</h2>
                <p>Se servidora no município, mesmo ela de acordo com o regulamento do órgão, o juiz pode impor prioridade na remoção</p>
                <p>Manutenção do vinculo trabalhista por até 6 meses</p>
                <h3>Juizado especializado</h3>
                <p>Juizado especial para a lei Maria da Penha, precisa ser muito celeres, ser analisadas com muita rapidez</p>
                <p>Atendimentos</p>
                <li>Pericial</li>
                <li>Ineterrupto</li>
                <li>Preferencialmente por servidores femininos preparados</li>
                <p>Terá que julgar, mesmo que, não trate exceção como regra.</p>
                <h4>Regras para lei maria da penha</h4>
                <ul>
                    <li>Uma salvaguardar  da integridade fisica, psiquica e emocional</li>
                    <li>Contato da mulher, em nenhuma hiptese, tá errada, geralmente lei traz excessão. Pra chamar atenção, sempre tem, mas tem no caso sempre em uma hipotese</li>
                    <li>Reviver - revitimização</li>
                    <li>A lei permite a gravação do depoimento por drives, gravadores ou dados magnéticos</li>
                </ul>
                <h4>Providencias pela autoridade Policial</h4>
                <ol>
                    <li>Proteção policial, quando necessário (Comunicação imediata ao MP e ao Juiz)</li>
                    <li>Encaminhamento ao hospital/posto de saúde e ao IML</li>
                    <li>fornecer transporte para a ofendida e seus dependentes para o abrigo ou local seguro, quando houver riscos de vida (Casa Abrigo)</li>
                </ol>
            </div>

        </>
        
    )
}

