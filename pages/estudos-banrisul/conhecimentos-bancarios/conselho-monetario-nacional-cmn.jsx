import styles from '../../../styles/Banrisul.module.css'

export default function ConselhoMonetario() {
    return (
        <>
       <h1>Estudos Banrisul</h1>
        <h2>CMN - Conselho monetário Nacional</h2>
        <li>Orgão superior do sistema financeiro nacional.</li>
        <li>Tem a responsabilidade de formular a politica da moeda e do crédito.</li>
        <li><span>Não desempenha</span> atividades executivas, apenas normativas</li>
        <li>Responsável pela fixação das diretrizes gerais das politicas monetárias, creditícia e cambial</li>
        <h3>Composição da CMN - Conselho Monetário Nacional</h3>
        <ul>
            <li>Ministro da economia - Presidente do CMN</li>
            <li>Secretario Especial da Fazenda do ministério da Economia</li>
            <li>Presidente do BACEN - Banco Central</li>
        </ul>
        <p>*Os Membros se reúnem-se ordinariamente uma vez por mês.</p>
        <ul>
            <li>O presente pode convocar reuniões extraordinárias.</li>
            <li>Nos casos de matéria urgente e de interesse relevante o preseidente pode deliberar ad refendum (decide)</li>
        </ul>
        <h3>Funções (atenção aos verbos, pois eles ajudas a diferencias das funcções do BACEN e da CVM)</h3>
        <ul>
            <li>Regular</li>
            <ul>
                <li>Valor interno da moeda.</li>
                <li>Valor externo da moeda e o equilibrio no balando de pagamentos</li>
                <li>A constituição, o funcionamento e a fiscalização dos que exercem atividades subordinadas a SFN, bem como a aplicação das penalidades previstas</li>

            </ul>
            <li>Estabeler:</li>
            <ul>
                <li>As metas de inflação.</li>
                <li>As condições para que o BACEN emita moeda-papel.</li>
            </ul>
            <li>Orientar:</li>
            <ul>
                <li>Aplicação dos recursos das instituições financeiras (Públicas e privadas)</li>
                
            </ul>
            <li>Propiciar:</li>
            <ul>
                <li>Aperfeiçoamento das instituições e dos instrumentos financeiros.</li>
            </ul>
            <li>Zelar:</li>
            <ul>
                <li>Pela Liquidez e solvência das instituições financeiras.</li>
            </ul>
            <li>Coordenar</li>
            <ul>
                <li>As politicas monetárias, crediticia, orçamentária, fiscal e da divida pública, interna e externa.</li>
            </ul>
            <li>Autorizar:</li>
            <ul>
                <li>Emissões de papel-moeda.</li>
            </ul>
            <li>Aprovar:</li>
            <ul>
                <li>Os orçamentos monetários preparados pelo BACEN</li>
            </ul>
            <li>Determinar:</li>
            <ul>
                <li>As caracteristicas gerais das cédulas e das moedas</li>
            </ul>
            <li>Fixar:</li>
            <ul>
                <li>As diretrizes e normas da politica cambial</li>
            </ul>
            <li>Disciplinar:</li>
            <ul>
                <li>O crédito em todas as suas modalidades e as operações crediticias em todas as suas formas.</li>
                <li>As atividades das bolsas de valores e dos corretores de fundos públicos</li>
            </ul>
            <li>Limitar:</li>
            <ul>
                <li>As taxas de juros, descontos, comissões e qualquer outra forma de remuneração de operações e serviços bancários ou financeiros, inclusive  os prestados pelo BACEN</li>
            </ul>
            <li>Expedir:</li>
            <ul>
                <li>Normas gerais de contabilidade e estatísticas a serem observadas pela instituições financeiras</li>
            </ul>
        </ul>
        <li>Funcionamento Junto a CMN (Comissão Mobiliária Nacional) e as seguintes comissões consultivas:</li>
        <ul>
            <li>Normas e Organizações do sistema financeiro</li>
            <li>Mercado de valores mobiliários e de futuros</li>
            <li>Crédito rural</li>
            <li>Crédito Industrial.</li>
            <li>Crédito Habitacional, crédito para saneamento e Infra-Estrutura Urbana.</li>
            <li>Endividamento público</li>
            <li>Politica Monetária e Cambial</li>
        </ul>
        <h2>COMOC (Comissão técnica da moeda e do crédito)</h2>
        <ul>
            <li>Funciona <span className={styles.info}>JUNTO A CMN</span></li>
            <li>Atua como órgão de assessoramento técnico na formulação da política da moeda crédito no Brasil.</li>
            <li>Manifesta-se previamente sobre assuntos de competência do <span className={styles.info}>CMN (Comitê Monetário nacional)</span></li>
            <li>Composição: Presidente e 4 diretores do BACEN, presidente da CVM(Comissão de valores mobiliários), secretario executivo e secretários do tesouro Nacional e de política Econômica do Ministério da Economia</li>

        </ul>
        <li>Finalidades:</li>
        <ul>
            <li>Formulação, execução, acompanhamento e controle das politicas monetárias, cambial, de crédito e de relações finaceiras com o exterior</li>
            <li>Organização, disciplina e fiscalização do sistema financeiro nacional e do sistema de consorcio</li>
            <li>Gestão do sistema de pagamento brasileiro e dos serviços do meio circulante</li>
        </ul>
        <li>Exerce de <span className={styles.info}>maneira exclusiva,</span> a competência da unidao federal para <span className={styles.info}>Emitir Moeda</span></li>
        <li>Regras constitucionais para politica monetária</li>
        <ul>
            <li>É <span className={styles.info}>Vedada</span> ao banco central conceder, direto ou indiretamento, emprestimos ao tesouro nacional ou qualquer orgão ou entidade que não seja uma instituição financeira.</li>
            <li>O banco central poderá comprar e vender titulos de emissão do tesouro Nacional, com o objetivo de <span className={styles.info}>regular a oferta de moeda ou taxa de juros.</span></li>
        </ul>
        <li>Pela <span className={styles.info}>Lei de responsabilidade fiscal</span> é <span> vedado</span> ao BCB (Arts. 35 e 39):</li>
        <ul>
            <li>Emitir titulos da divida pública (desde 2 anos da promulgação da LRF).</li>
            <li>Comprar titulos da divida dos entes, na data de sua colocação do mercado.</li>
            <li>Permutar título da divida de ente da federação com titulo da divida pública federal</li>
            <li>Conceder garantia</li>
        </ul>
        <span className='pc'>O BACEN pode comprar e vender titulos do Tesouro nacional para regular a oferta da moeda ou taxa de juros, todavia, não pode conceder emprestimos diretamente ao Tesouro Nacional.</span>
        <li>A LRF também dispõe que o BCB só pode comprar diretamente titulos emitidos pela união para refinanciar a divida mobiliaria federal que estiver vencendo em sua carteira, e que o tesouro Nacional só pode adquirir títulos da divida pública federal existentes na carteira do BCB para reduzir a dívida Mobiliária</li>
        <li>Funções</li>
        <ul>
            <li>Emitir moeda-papel e moeda metálica</li>
            <li>Executar os serviços do meio-circulante</li>
            <li>Determinar o recolhimento e receber depósitos compulsórios</li>
            <ul>
                <li>Até 100% sobre o total dos depósitos á vista</li>
                <li>Até 60% de outros títulos contábeis das instituições financeiras</li>
                <li>Pode ser recolhido em espécie ou através de titulos emitidos pelo Tesouro nacional.</li>
                <li>Podem ser adotados percentuais diferentes em função:</li>
                <ul>
                    <li>Das regiões geoeconômicas.</li>
                    <li>Das prioridades que atribuir ás aplicações</li>
                    <li>Da natureza das instituições financeiras</li>                    
                </ul>
                <li>Basicamente, os depósitos compulsórios são uma espécie de controle da oferta monetária, pois o dinheiro depositado nos bancos é por eles </li>
            </ul>
        </ul>
        </>
    )
}