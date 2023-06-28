import Menuestudos from '../Menuestudos'
import styles from '../../../styles/Estudos.module.css'
export default function InternetBanking() {
    return(
        <>
        <Menuestudos />
        <div className={styles.artigo}>
            
            <div className={styles.estudoOn}>
                <h2>Conhecimentos Bancários</h2>
                <h3>Aula 1</h3>
                <ul>
                    <a href="./estatistica/representacao-tabular-grafica">
                        <li>Sistema financeiro nacional: Estrutura do Sistema Financeiro Nacional; Órgãos normativos e instituições supervisoras, executoras e operadoras.</li>
                    </a>
                </ul>
                <h3>Aula 2</h3>
                <ul>
                    <a href="./estatistica/">
                        <li>Medidas de tendência central (média, mediana, moda, medidas de posição, mínimo e máximo) e de dispersão (amplitude, ampliturde interquartil, variância, desvio pafrão e coeficiente de variação).6 - População e amostra</li>
                    </a>
                </ul>
                <h3>Aula 3</h3>
                <ul>
                    <a href="./estatistica/">
                        <li>Variáveis aleatórias e distribuição de probabilidade. - 4 - Teorema de Bayes. 5 - Probabilidade condicional</li>
                    </a>
                </ul>
                <h3>Aula 4</h3>
                <ul>
                    <a href="./estatistica/">
                        <li>Variância e covariância</li>
                    </a>
                </ul>
                
                <h3>Aula 5</h3>
                <ul>
                    <a href="./estatistica/">
                        <li>Correlação Linear Simples</li>
                    </a>
                </ul>
                <h3>Aula 6</h3>
                <ul>
                    <a href="./estatistica/">
                        <li>Distribuição binomial e distribuição Normal</li>
                    </a>
                </ul>
                <h3>Aula 7</h3>
                <ul>
                    <a href="./estatistica/">
                        <li>Noções de amostragem e inferência estatística.</li>
                    </a>
                </ul>
                
            </div>
            
            
            
        </div>
        <div className={styles.espaco}></div>
        </>
       
    )
}