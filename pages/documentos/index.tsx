import Link from "next/link";
import { useState } from "react";
import Btns from "../../components/Contracheques";
import Head from "next/head";
import AlertaPersonalizado from "../../components/AlertaPersonalizado";

// import { useRouter } from "next/router";

export function Btn({ nome, link, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 ${color} forte  text-white rounded-md hover:opacity-80`}
    >
      {nome}
    </button>
  );
}

export async function redirect({ hashDo, linkDo }) {
  return (
    <Link href={linkDo}>
      <button className={`p-2 bg-blue-600 text-black rounded-md`}>
        {hashDo}
      </button>
    </Link>
  );
}

export default function Index({ data }) {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [mostraFooter, setMostraFooter] = useState(true);

  const handleButtonClick = (link) => {
    setMostraFooter(false);
    setIframeSrc(link);
    setShowIframe(true);
  };

  const handleCloseIframe = () => {
    setMostraFooter(true);
    setShowIframe(false);
    setIframeSrc("");
  };

  const btns = Btns;
  // const data = getServerSideProps();
  return (
    <div className="w-full">
      <AlertaPersonalizado />
      <Head>
        <meta property="og:locale" content="pt_BR" />
        <meta name="author" content="Gleiton Aparecido Soares de Souza" />
        <meta
          name="keywords"
          content="Curriculo, programador Web, Gleiton, Gleiton Aparecido Soares de Souza"
        />
        <meta name="robots" content="index, follow" />
        <title>Gleiton Aparecido Soares de Souza - Documentos</title>
        <meta
          name="description"
          content="Gleiton Aparecido Soares de Souza, informações profissionais, tudo sobre o Curriculum Vitae de Gleiton, site oficial, saiba mais sobre Gleiton - Montagem, configuração e manutenção de hardware de computadores. Além de cuidados no manuseio e utilização de peças e equipamentos de informática, instalação e configuração dos diversos componentes de um microcomputador, seus periféricos e dos dispositivos auxiliares utilizados na computação."
        />
      </Head>
      <div className="m-auto lg:w-2/3 px-6 mt-10 flex flex-col justify-center text-justify">
        <h2 className="font-bold text-xl my-2">
          À Prefeitura Municipal de Lagoa dos Patos - MG
          <br />
          Setor de Recursos Humanos
        </h2>
        <p>
          Ilmo(a). Sr(a). Responsável pelo Setor de Recursos Humanos
          <br />
          <strong>Assunto:</strong> Solicitação de Regularização de Direitos e
          Esclarecimentos
          <br />
          Eu, <strong>Gleiton Aparecido Soares de Souza</strong>, portador do{" "}
          <strong>CPF: 083.030.206-92</strong>, servidor público municipal,{" "}
          <strong>admitido em 01/04/2016</strong> no cargo de{" "}
          <strong>Agente Administrativo Fazendário</strong>,{" "}
          <strong>Matrícula: 1749</strong>, venho, por meio deste, requerer a
          análise, regularização e resposta formal aos seguintes pontos,
          conforme estabelecidos no Plano de Cargos e Salários de Lagoa dos
          Patos - MG, na legislação municipal aplicável e na Constituição
          Federal entre outros.
        </p>
        <div className="text-justify mt-6">
          <h2 className="font-bold text-xl mb-4">Documentos</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Verificação do Salário Base de Acordo com as Leis Informadas
            </li>
            <li>Recebimento de Valores Retroativos</li>
            <li>Aumento de Nível e Progressão Funcional</li>
            <li>Insalubridade</li>
            <li>
              Verificação da Redução do Salário Base Durante Férias Prêmio
            </li>
            <li>Solicitação de Resposta Formal e Prazos</li>
          </ol>
        </div>
        <div className="w-full mt-8">
          {btns.map((e, index) => (
            <div key={index}>
              <div
                className={`${e.color} text-black p-4 rounded-lg shadow-md mb-4`}
              >
                <p>{e.info}</p>
                <Btn
                  nome={e.nome}
                  link={e.link}
                  color={e.color}
                  onClick={() => handleButtonClick(e.documento)}
                />
              </div>
            </div>
          ))}
        </div>
       
        {mostraFooter && (
          <div className="h-screen flex flex-col justify-center items-center mt-10">
            <p className="text-gray-600">
              2024 - Todos os direitos reservados - Futuro Consultoria
            </p>
          </div>
        )}
        {/* Overlay para o iframe */}
        {showIframe && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="relative w-full h-screen">
              <iframe
                src={iframeSrc}
                className="w-full h-full border-none"
                allowFullScreen
              ></iframe>
              <button
                onClick={handleCloseIframe}
                className="absolute top-4 left-4 bg-red-600 text-center text-white p-2 rounded-md hover:bg-red-800"
              >
                ATENÇÃO: NÃO APERTE BOTÃO VOLTAR, clique aqui em Fechar
              </button>
              <Link href={iframeSrc} target="_blank" rel="noopener noreferrer">
                <button
                  onClick={handleCloseIframe}
                  className="absolute bottom-4 right-4 bg-green-600 text-center text-white p-2 rounded-md hover:bg-green-800"
                >
                  CLIQUE PARA VER COMPLETO
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
