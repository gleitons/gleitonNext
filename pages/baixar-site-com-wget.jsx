export default function baixarWget() {
    return (
        <>
       
       
<p>Muitas vezes você encontra um site cheio de coisas interessantes, mas não dispõe de tempo para ler on line na hora. Ou, encontra algo tão importante que pretende guardar em CD ou DVD, para nunca perder. A natureza dos sites da web não permitem isso. Você entra, acessa um site e navega pela página. Se quiser outro conteúdo, deve clicar num link, então o mesmo é descarregado até a sua tela. Fica complicado, por exemplo, querer salvar um site inteiro no seu computador clicando nos links e salvando página por página.</p>
<p>Lá vem a computação novamente, com sua rapidez e “inteligência”. Sim, inteligencia entre aspas porque as máquinas em si são burras, meros papagaios, como você sabe só fazem aquilo que foi previamente programado. Há programas que podem baixar os sites inteiros, sem que você precise entrar e clicar em link por link. O que esses programas fazem é seguir os links das páginas, deifinidos em HTML pela tag &lt;a href=…&gt;. No final do processo, você pode ter todo o site ou várias páginas e arquivos do seu interesse.</p>
<p>Existem vários programas que se propõem a isso, a maioria para Windows, normalmente pagos. Quase sempre o que se encontra são sharewares, que se limitam a funcionar por um período determinado ou baixam apenas um certo número de páginas, sendo liberados somente na versão completa. Há um gratuito e open source, o HTTrack (WinHTTrack, na versão para Windows), é bom e relativamente bastante usado, por ser fácil e bastante personalizável. Mas há muito tempo há uma outra solução gratuita e aberta, muito conhecida pelos usuários de Linux: o <strong>wget</strong>. O wget é um programa criado inicialmente para o ambiente Unix/Linux, cujo objetivo principal é baixar arquivos da internet. Ele pode ser usado em scripts, tornando a programação de diversas “aplicações” bem mais fácil. Para felicidade de quem usa Windows, saiba que há uma versão portada dele para o Windows, que funciona exatamente da mesma forma da versão Unix. E para quem quer baixar sites inteiros ou várias páginas, ele também tem esse recurso. De quebra, é um programa bem pequenininho, operado via linha de comando, o que permite o uso fácil em scripts ou a criação de interfaces.</p><div >
<div id="div-gpt-ad-incontent-1" class="ad-slot">
   
</div></div>

<p>Antes de começar, tenha em mente que baixar sites inteiros pode prejudicar os sites. Além dos sites em si, essa tarefa que pode consumir muita banda de download deles, você pode acabar prejudicando outros sites que estejam hospedados no mesmo servidor, especialmente se for um hospedeiro compartilhado – mesmo comercial. Muita gente não tem noção de que baixar sites de uma vez ou acessar excessivamente arquivos grandes pode ser prejudicial, e faz isso sem saber; é bom que você esteja consciente para não abusar.</p>
<div>
<h3>Obtendo o wget</h3>
</div>
<p>Quase toda distribuição de Linux inclui ele. Caso não inclua, experimente instalá-lo usando o gerenciador de pacotes da sua distribuição. Se você usa Windows, pode baixá-lo em:</p>

   

<p><a class="" href="http://pages.interlog.com/%7Etcharron/wgetwin.html">http://pages.interlog.com/~tcharron/wgetwin.html</a></p>
<div>
<h3>O básico do wget</h3>
</div>
<p>Para baixar um arquivo com o wget, basta dar o comando <em>wget</em> seguido pelo caminho do arquivo na internet. Exemplo:</p>
<div class="cmdmargin">wget <a class="" href="http://www.umsitequalquer.com.etc/arquivo.zip">http://www.umsitequalquer.com.etc/arquivo.zip</a></div>
<p>E o arquivo será baixado na pasta atual do prompt de comando. Caso o download seja interrompido (porque o computador trave, ou o usuário tecle CTRL + C no prompt), é possível recontinuar do ponto em que parou, caso o servidor suporte o recurso. Basta informar, antes da URL, o parâmetro <em>-c</em>, e claro, usar a mesma pasta que contém o “pedaço” anterior do arquivo:</p>
<div class="cmdmargin">wget -c <a class="" href="http://www.umsitequalquer.com.etc/arquivo.zip">http://www.umsitequalquer.com.etc/arquivo.zip</a></div>
<p>Muita gente usa o wget como gerenciador de downloads (no Linux), em vez de baixar os arquivos pelos navegadores. Ele não acelera os downloads (como fazem os “aceleradores de downloads”, que abrem várias conexões), mas permitir recontinuar do ponto em que parou é muito útil, especialmente para quem acessa com conexão lenta ou instável, que cai toda hora.</p>
<div>
<h3>Baixando sites inteiros</h3>
</div>
<p>Passando o parâmetro <em>-r</em>, ele baixará todos os arquivos encontrados no domínio. Cuidado, use com atenção e responsabilidade! Além de poder atrapalhar o site, você poderá baixar muita coisa inútil. A sintaxe seria:</p>
<div class="cmdmargin">wget -r http://www.umsitequalquer.com.etc</div>
<p>
Ele seguirá os links definidos em HTML, pela tag &lt;a href…&gt; nas páginas. Links em JavaScript ou em flash não serão reconhecidos, e as páginas não serão baixadas. No caso do JavaScript, é quase impossível um programa sair baixando tudo realmente, pois há várias formas de se “programar” links em JavaScript.</p>
<p>Por padrão, o wget ignora os arquivos que o produtor do site pediu para ignorar, por meio de um arquivo especial, o “robots.txt”. Esse arquivo serve para os motores de busca de sites de pesquisa; eles lêem o arquivo e ficam sabendo para quais arquivos não devem seguir os links. Isso impede que o wget baixe determinados arquivos, arquivos esses que muitas vezes são justamente os que você precisa. Para fazê-lo ignorar os arquivos “robots.txt” e baixar tudo o que encontrar, basta usar o parâmetro <em>-erobots=off</em>. Ficaria assim:</p>
<div class="cmdmargin">wget -r -erobots=off <a class="" href="http://www.umsitequalquer.com.etc/">http://www.umsitequalquer.com.etc</a></div>
<p>Apesar de tecnicamente possível, é um meio não muito legal fazer isso. Essa opção <em>-erobots=off</em> não é comentada em muitos lugares. Novamente alerto, use com responsabilidade ou quando precisar “mesmo”, afinal não devemos ser contra a divulgação de informações. Você pode usá-la, por exemplo, quando quiser baixar um arquivo linkado mas que não esteja disponível para ser indexado pelos buscadores (via robots.txt), já que o wget o ignoraria.</p>
<p>Uma dica para reduzir a quantidade de downloads é baixar apenas arquivos de determinado tipo, por exemplo, apenas páginas HTML. Isso é possível com o parâmetro <em>-A</em>, especificando a seguir o tipo de arquivo pela extensão. Veja:</p>
<div class="cmdmargin">wget -r -A “.html” <a class="" href="http://www.umsitequalquer.com.etc/">http://www.umsitequalquer.com.etc</a></div>
<p>As páginas ASP, PHP, entre outras, serão convertidas em HTML pelo wget (até porque serão páginas já processadas quando o wget acessá-las), ou seja, você não precisará se preocupar em ficar digitando todas as extensões possíveis para as páginas. Da mesma forma, fica fácil baixar todas as imagens:</p>
<div class="cmdmargin">wget -r -A “.gif” <a class="" href="http://www.umsitequalquer.com.etc/">http://www.umsitequalquer.com.etc</a></div>
<p>ou</p>
<div class="cmdmargin">wget -r -A “.jpg” <a class="" href="http://www.umsitequalquer.com.etc/">http://www.umsitequalquer.com.etc</a></div>
<p>Depende do que você precisa.</p>
<p><strong>Dica direta para baixar sites inteiros:</strong> o wget possui o parâmetro <em>-m</em>, ideal para fazer espelhamentos de sites (mirroring), onde ele já ativa as opções necessárias. Se seu objetivo é fazer um <em>mirror</em> do site, pode ir direto ao ponto:</p>
<div class="cmdmargin">wget -m <a class="" href="http://www.umsitequalquer.com.etc/">http://www.umsitequalquer.com.etc</a></div>
<p>Outra coisa é a identidade do navegador. Alguns sites só oferecem o conteúdo ao verificarem que é determinado navegador que está acessando a página (como o IE, por exemplo), e o wget não conseguiria acesso aos arquivos. Pode-se fingir a identidade de navegador com esse parâmetro:</p>
<div class="rawoutput">–user-agent=”Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)”</div>
<p>Colocando no texto entre aspas a identificação do navegador e sistema que você quiser.</p>
<div>
<h3>Páginas protegidas com senha</h3>
</div>
<p>Páginas que exibem uma tela de login personalizada, via web mesmo, provavelmente não poderão ser baixadas. Digamos que você queira baixar todo o conteúdo do Orkut, ou de uma comunidade ou fórum restrito. Ao acessar a página, vem uma página do site que pede o login e a senha. O wget pararia nela e se limitaria a pegar as páginas linkadas à ela diretamente.</p>
<p>No entanto, páginas que pedem senha diretamente pelo servidor, podem ser baixadas. Estas podem ser acessadas passando o nome e a senha diretamente na URL, com o wget não seria diferente:</p>
<div class="cmdmargin">wget http://usuario:senha@servidor.com.etc/arquivo.etc</div>
<p>Também pode ser usado para servidores FTP, bastando trocar o http:// por ftp://.</p>
<div>
<h3>Outros parâmetros importantes</h3>
</div>
<p>Através de diversos parâmetros podemos controlar melhor o donwnload dos arquivos. Eis alguns importantes:</p>
<div class="cmdmargin">-t0</div>
<p>Número de vezes que ele deve tentar baixar um arquivo, caso não consiga. Definindo zero deixa configurado como “ilimitado”, o que faz ele ficar tentando até conseguir baixar. Observe que deve-se deixar o número logo ao lado da letra “t”, sem espaço. É bom usá-lo mas com cuidado, num site com muitos arquivos e uma conexão ruim, você pode ficar forçando o download de vários arquivos que nunca serão baixados, à toa. Por precaução, defina um número menor, como -t3 ou -t5.</p>
<div class="cmdmargin">-c</div>
<p>Permite continuar downloads interrompidos, sem que ele precise baixar o que já foi baixado, incluindo pedaços de arquivos (e não apenas páginas). É bom usá-lo, principalmente quando não der tempo de baixar o que você quer em uma única vez.</p>
<div class="cmdmargin">-np</div>
<p>Ideal para baixar páginas de uma mesma área de um site. Com o -np (no-parent) ele baixa apenas os arquivos da URL definida sem pegar a pasta pai dela. Por exemplo, utilize caso queira baixar o site <a class="" href="http://www.site.com.etc/algumacoisa">http://www.site.com.etc/algumacoisa</a>, mas não o conteúdo do <a class="" href="http://www.site.com.etc/">http://www.site.com.etc</a> (e sim apenas da pasta /algumacoisa).</p>
<div class="cmdmargin">-T30</div>
<p>Define o timeout (limite de tempo) para 30 segundos. Quando ele fica à espera do arquivo, em conexões lentas, esse parâmetro orienta a refazer a conexão para puxar tal arquivo a cada 30 segundos, até conseguir. Observe a diferença que este é em letra maiúscula.</p>
<div>
<h3>E os donos dos sites, como ficam?</h3>
</div>
<p>Certamente não gostam nada nada disso. É possível aplicar alguns bloqueios diretamente no servidor (o que foge ao objetivo deste texto, além do que variará muito dependendo do software de servidor utilizado), por exemplo, bloqueando IPs que acessem várias páginas por segundo (mais precisamente um número maior de bytes definido por você), reduzir a velocidade, ou até mesmo banir o IP por um período.</p>
<p>Mas não haverá muito o que fazer para páginas em si. O pessoal dá um jeito, afinal se pode ser acessado pelo navegador, poderá ser baixado e salvo.</p>
<p>Uma dica para evitar downloads automático de arquivos grandes, poupando banda do servidor, é usar um link definido em JavaScript. Praticamente nenhum programa copiador de sites identificaria o link, mas nos navegadores funcionaria normal. Estar com o JavaScript habilitado nos micros clientes hoje é praticamente <em>obrigatório</em>, não existe mais aquele papo de problemas de compatibilidade. Sendo assim, não se preocupe com o link em JavaScript, pois ele funcionará.</p>
<p>A criação do link fica a seu critério, evite colocar o nome do arquivo por inteiro. Um exemplo prático: definindo uma função na página:</p>


<p>Um outro meio um pouco mais complicado de implementar, é aplicar CAPTHA, aquela verificação de letras e números aleatórios em determinadas seções do site. O programa pára ali. Mas cuidado, a maioria dos sistemas não permitem o uso por deficientes visuais, o que prejudica legal a acessibilidade do seu site, especialmente se usar isso em áreas essenciais.</p>
<p>É isso. Responsabilidade sempre!</p>

     
        
        
        </>
    )
}