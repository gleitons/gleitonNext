import Menuestudos from '../Menuestudos'
import styles from '../../../styles/Estudos.module.css'
export default function BancodeDados() {
    return(
        <>
        <Menuestudos />
        <div className={styles.artigo}>
            <div className={styles.estudoOn}>
                <h2>Banco de Dados</h2>
                <p>Curso completo de banco de dados</p>
                <p>Em um projeot de bancod e dados, a modelagem conceitual define, em um nivel conceitual, o SDB compartilha dados, mas nem todos tem acesso a todos os dados, no nivel conveitura não nos precoupamos com mas sem considerar detalhes da implementação</p>
                <h3> Caracteristica das tecnologias de BDs</h3>
               <li>Natureza auto descritiva: O SGBD armazena uma definição completa das restriçoes e estruturas do banco de dados (catalogo). As informações são chamadas de Metadados</li>
               <li>Independecnai entre programas e dados: Permite mudanças na esturura de armazenamento</li>
               <li>Multiplas visoes: Cada usuario pode acessar a diferente visões do banco de dados, quais descrevem somente os dados de interesse do usuário</li>
               <li>Controle de redutndandia: Sno SGBD, cada item logigo do dado é armazenado numunico lugar. - pode haber redunnca controlada, para ganhar performance</li>
               <li>Controle de concorrência</li>
               <ul><li>
                O SGBD deve incluri um software contido para garantir as infromaçoes</li></ul>
                <h3>Caracteristicas</h3>
                <li>Segurancça, restrição de acesso não autorizado</li>
                <li>Backupo e recovery</li>
                <li>Multiplas interfaces para diferentes tipos de ususarios: linhas de comando, gui dentre outros</li>
                <li>Manutenção de restiçoes de integridade dos SDBG</li>
                <h3>Arquitetura de 3 niveis</h3>
                <p>ANSI/SPARC</p>
                <p>Nivel exteno ou de visão - externo/conceitural</p>
                <h3>Nivel externo</h3>
                <li>Inclui Esquemas externos ou visões de usuário</li>
                <li>Cada esquema externo Descreve a parte do banco de dados, na qual a um determinado grupo de usuarios está interessado</li>
                <h3>Esquema conceitual</h3>
                <p>Entidades, tipos de dados, realizionamento, perações de usuário, restrições</p>
                <p>Nivel interno utiliza o modelo de dados fisisco, para fenfinir os detalhes</p>
                <p>Independencia de dados</p>
                <p>É entendido com a capacidade de modificar a definiação de um esquema em um nível de sistema</p>
                <li>Mudança no esquema conceitural não afeta os programas de aplicação ou esquma externo. Implica na modificaçõ e ealteração do banco de dados do banco de dados</li>
                <li>A modificação do essquema fisica não modifica o esquema conceirtual e consequentemente o esquema externo</li>
                <p>Por </p>
                <h3>MER  - diagrama de MER - Modelo de entidade de relacionamento</h3>
                <p>Um sistema de banco de dadso conjuento de programas, sistemas de inter relacionados, conjunto de programas</p>
                <p>para cada abstralã criada no nivel de visao os dados sao repliados no nviel fisico</p>
                <p>O nivel fisioc é o nivel de abstraçaõ mais alto e desvreve apenas parte do banco de dados</p>
                <p>O bnvie de visão é o nivel de abstração mais alto e descreve apenas</p>
            </div>
            
        </div>
        <div className={styles.espaco}></div>
        </>
       
    )
}