import styles from '../../../styles/Estudos.module.css'
import Image from 'next/image'
import hardware from '../../../public/imagens/hardware-gleiton-aparecido-soares-de-souza-estudos-banrisul.png'
import software from '../../../public/imagens/software-gleiton-aparecido-soares-de-souza-estudos-banrisul.png'
import figuraUm from '../../../public/imagens/figura1.png'

export default function NocoesSistemas() {
    return (
        <>
        <div>

        </div>
        <div>
            <h2>Noções de sistemas Operacionais</h2>
            <p>O sistema operacional proporciona a base para a execução de todos os demais softwares no computador. Ele é responsável por estabelecer o padrão para a comunicação com o Hardware (através dos drivers). Os computadores podem receber diferentes sistemas, segundo a sua arquitetura de construção.</p>
            <p>É possível termos dois ou mais sistemas operacionais instalados em um dispositivo. No caso de computadores, o usuário pode criar partições (divisórias lógicas) no disco de armazenamento e instalar cada sistema (Windows, Linux e Mac) em uma delas. O usuário também poderá executar no formade de maquina virtual (virtual machime), conforme detalhado no tópico de virtualização.</p>
            <h3>O que os sistemas operacionais tem em comum?</h3>
            <li><strong>Plataforma para execução de programas:</strong> eles oferecem recursos que são compartilhados pelos programas executados, desenvolvidos para serem compatíveis com o sistema operacional;</li>
            <li><strong>Núcleo monolítico:</strong> Arquitetura monobloco, onde um unico processo centraliza e execula as principais funções. No Windows, é o explorer.exe</li>
            <li><strong>Interface gŕafica:</strong> mesmo oferecendo uma interface de linha de comandos, a interface frádfica é a mais utilizada e questionado em provas,com icones que representam os itens existentes no dispositivo.</li>
            <li><strong>Multiusuário:</strong> os sistemas pertimete que vários ususarios utilizem o dispositivo, cada uma com sua respectiva conta e credenciais de acesso;</li>
            <li><strong>Multiprocessamento:</strong> os sistemas possibilitam a execução de vários processos simultaneamente, gerenciando os recusrso oferecidos pelo procesador;</li>
            <li><strong>Preemptivo: </strong>o sistema operacional poderá interromper processos durante a sua execução;</li>
            <li><strong>Multitarefas: </strong>os sistemas operacionais possibilitam a execução de várias tarefas de forma simultanea e concorrentes entre si, atraves do gerenciamento profundo da memória do dispositivo;</li>
            <li><strong>interface com hardware: </strong> o sistema operacional contém arquivos que atual como tradutores, possibilitando a comunicação do software com o hardware.</li>
            <h3>Windows 10 - Sistema operacional</h3>
            <p>O sistema operacional windows foi desenvolvido pela Microsoft para computadores pessoais (PC) em meados dos anos 80, oferecendo uma interface gráfica baseada em janelas, com suporte para apontadores com mouses, touchs pad (área de toque nos portáteis), canetas e mesas digitalizadoras.</p>
            <p>Atualmente o Windows é oferecido na versão 10, que possui suporte para os dispositivos apontadores tradicionais, alem de tela touch screen e câmera (para acompanhar o movimento do usuário, como o sistema kinect do videogame Xbox).</p>
            <p>Em concursos público as tecnologias e suportes avançados são raramente questionados. As questoes são apolicadas nas provas envolvem os conceitos básiocs e o modo de opeçaõ do sistema operacional em um dispositovo computacional padrão (ou tradicional).</p>
            <p>O sistema operacional Windows é um software proprietário, ou seja, não tem o nícleo (kernel) disponível e o usuário precisa adquirir uma licença de uso da <i>Microsoft</i></p>
            <div className={styles.importante}>
            <p>A banca prioriza o conhecimento básioco das configurações do sistema operacional. O usuário não encontrará muitas questçoes sobre a parte prática, como ocorrem com outras organizadores de concursos. Em outras palavras, as primeiras páginas do material sobre o Windows são as mais importantes para aas provas da banca CESPE/Cebraspe.</p>
            </div>
            <h3>Funcionamento do sistema operacional</h3>
            <p>Do momento em que ligameos o computador até o momento em que a interface gráfica está completamente disponível para uso, uma série de ações e configurações são realizadas, tanto nos componentes de harwares como nos aplicativos de software. Acompanhe a seguir estas etapas.</p>
            <div>
                <Image src={hardware} alt='figura windows 10' />
                <Image src={software} alt='figura windows 10'/>
            </div>
            <p>Todo dispositivo possui possui um sistema de inicilaizaçõ. Quando colocamos a chave no contato do carro e damos a primeita mexida, todas as luzes do painel se acendem e somente auqlesa que estivere ativadas permancece. Quando ligamos o micro-ondas, ele acente todo o painel e faz um beep. Quando ligamos o nosso smartphone, el acende a tecla e faz um toque. Estes procedimento são úteis para identifica que os recurso do dispositivo estão disponíveis corretamente para a utilização.</p>
            <li><strong>POST - Power on Self Teste: </strong> autoteste da inicialização. Instuções definada pelo fabricante para a verificação de conponentes conectados;</li>
            <li><strong>BIOS - Basic Input Output System:</strong> sistemas básico de entrada e saida. Informações gravadas em um chip CMOS (complementaru Metal Oxidy semi-conductor) podem ser configurados pelo usuario utilizando o programa SETUP utilizando a tecla DEL ou toutra tecla especifica no momnete que ligamos o computador, na primeita tela de autoteste - POST</li>
            <li><strong>KERNEL - Nucleo do sistema operacional:</strong> I windows tem o nucleo fechado e inacessivel para o usuário, o linux tem o núcleo aberto e codigo fonte disponivel para ser utilizado, copiado, estudado, modificado e redistribuido sem restrição. O kernel do Linux está resitrivuido sem restrição. O lernel do linux está em contatnte desenvolvimento por uma comuniudade de programadores, e para garantir sua integridade e qualidades, as sugestoes de melhorias são analaisadas e aprovadas ou naõ aantes de serem disponibilizadas para download por todos;</li>
            <li><strong>GUI - Graphiscs user Interface:</strong> Interface gráfica, porque o sistema operacional oferece também a interface de comandos (pront de comandos ou linha de comandos)</li>
            <p>Quando o sistema não consegue inicilializa de forma correta, é possivel recuperar o acesso através de ferramentas de inicialização. Para acesso a estes recursos, pode ser necessário uma conta com credenciais de administrador.</p>
            <li><strong>Restauração do sistema: </strong> a cada vez que o Windows foi iniciado com sucesso, um ponto de restauração foi criado. A cada instalação de software ou alterações significativas das configurações, um ponto de restaração é criado. Em caso de instabilidade, o usuario pode retonar o windoes para um podnto de restauração previamente criado.</li>
            <li><strong>Reparação do sistema:</strong> se arquivos do sistema foram seriamentoe modificados ou se tornarem inacesssiveis, o windows não poderá inicar e não conseguira recurperar um ponto de restaduração. o windows permite a criação de um disco de recuperaçõ do sistema, que restaura o windows para as configurações originais.</li>
            <li><strong>Historico de arquivos:</strong> a cada alteração, o windos armazena cópiias dos arquvos originais e regrava novos dados no local. Depois, caso necessário, o usuároo poderar acessos o historioco de aruqivos e retornar para uma cópia anterio do mesmo item.</li>
            <li><strong>Versões anteriores (ou cópias de sombre):</strong> alterações de conteúdos de pastas são monitorado pelo windows. o usuaário podrá acessar no menu de contexto, item propriedades, guia versões anteriores, da mesma pasta, restaurando e descartando as alterações posteriores.</li>
            <p>O windows possui 3 niveis de acesso, que são credenciais.</p>
            <ul>
                <li><strong>Administrador:</strong> usuário que poderá instalar programas e dispositivos, desintalar oualterar as configurações. Os programas podem ser desintalados ou reparados pelo administrador.</li>
                <ul>
                    <li><strong>Administrador local:</strong> Configurado para o dispositivo</li>
                    <li><strong>Administrador de domínio</strong>: quando o dispositivo está conectado em uma rede (dominio), o administrado de redes  também poderá acessar o dispositivo com credenciais globais</li>
                    <li><strong>Usuário:</strong> poderá execurar os programas que foram instalados pelo administrador, mas não podrap desistalar ou alterar as configurações</li>
                    <li><strong>Convidado ou visitante:</strong>poderá acessar apenas os itens liverados previamnte pelo administrador. Esta conta geralmente permanece desativada nas configurações do Windos, por questoes de segurança.</li>
                    <p>No windows, as permissões NTFS podem ser atribuidas em propriedades, guia de segurança. Através de permissões como controle total, modificar, gravar entre outras o usuario podrá definir o que será acessado e executado por outros usuário do sistema, é compativel com windows quanto por linux, e caso tenhamos dois sistemas operacionais ou dois dispositivos na rede comsistemas diferencite, um servidos samba será necessários para realizar a tradução das configurações.</p>
                    <p>O Windows oferece a interface gráfica (a mais usada e questionada) e pode oferecer uma intereface de linha de comandos para a digitação. o prompt de comando é a representação do sistema operacional MS-DOS (Microsoft dist operation system), que era a opção padrão de interface para o usuário antes do windows.</p>
                    <p>O Windows 10 oferece o prompt de comandos básico e tradicional, acionado pela digitação de CMD seguidos por enter, na caica de dialigo executar aberta pelo atalho do teclado windows+R = Run. Além dele, existe o Windows power Shell, ue é a inteface de comandos programavel, acessivel pelo menu do botão iniciar.</p>
                    <p>Para conhecer as configurações do dispositivo, o usuário pode acessar as propriedades do computador no explorador de arquivos, ou o item sistema em configurçãoe (atalho de teclaro windows + i) ou pela central de aões w+a ou adicionar o atalho de teclado windows + pause.</p>
                    <p>A interface gráfica do windows é caractericada pela área de trabalho ou desktop, a tela inicial do windows exibe icones de pastas, arquivos, programas atalhos, barra de tarefas (com programas que podem ser executasos e programas que estão sendo executados e outros componentes do windows)</p>
                </ul>
            </ul>
            <div className={styles.imagem} >
                <Image src={figuraUm} alt='figura windows 10' />
                <p>Figura 1 - Imagem da área de trabalho com Windows 10</p>
            </div>

        </div>
        </>
    )
}