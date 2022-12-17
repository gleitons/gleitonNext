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
                <h2>Questões e esclarecimentos</h2>
                <p>Financiamento a longo prazo para empresas, de maturidade superior a 1 ano, mais de 365 dias.</p>
                <li>Dados</li>
                <ul>
                    <li>Ações ordinárias</li>
                    <li>Ações Preferenciais</li>                    
                    <ul>
                        <li>As formas acima são consideradas para longo prazo</li>
                        <p>Mas essa forma  não é considerada com captura  de captal de terceiros, mas de capital próprio</p>
                    </ul>
                    <li>Notas comerciais</li>
                    <ul>
                        <li>As notas comerciais são de como as empresas conseguem capital de terceiro, mas tem prazo máximo de 360 dias</li>
                    </ul>
                    <li>Debêntures</li>
                    <ul>
                        <li>Respota correta - debentures</li>
                    </ul>
                    <li>Títulos Públicos</li>
                    <ul>
                        <li>Títulos públicos sem chances alguma de ser aproveitada, como a empresa vai captar de titulo publicos né, quem emite esse tipo de titulo é o tesouro nacional, no caso de titulos publicos federais</li>
                    </ul>
                </ul>
                <h3>CVM</h3>
                <p>A CVM - Comissão de valores mobiliários é uma entidade autárquica em regime especial, vinculada ao minitério da fazenda com personalidade juriica e patrimonio propios, dotada de aturoridade administrativa independede, ausencia de sobordinanação dierárquica, mandato fico e estabilidade de seus dirigentes, e autonomias financeira e orçamentária</p>
                <p>Vamos a seguinte explicação</p>
                <h4>Movimentação anormal em uma conta</h4>
                <p>Quando acontece atipicidade: Depositos, aportes, saques, pedidos de provisionamento para saque ou qualquer outro instrumento de transferencia de recursos em especie, que apresentem atipicida em relação a aatividade economica do cliente ouj incopatibilidade com a sua capacidade financeira.: ATIPICIDADE</p>
                <h3>Cooperativade de Crédito</h3>
                <p>O funcionamento é através da autorização do banco central do Brasil</p>
                <h3>Lavagem de dinheiro</h3>
                <li>A poliitca referida do art 2 deve contrmplar no minimo:
                    
                </li>
                <ul>
                    <li>I - As diretrizes para:</li>
                    <li>{'E)'} - A promoção de cultura organizacional de prevenção a vagem de dinheiro e ao financeiamento do terrorismo, contrmplando, inclusidve,o so funcionarios, os parceiros e os prestadores de serviços terceirizados</li>
                </ul>
                <h3>Garantias fidussiarias</h3>
            </div>

        </>
    )
}
