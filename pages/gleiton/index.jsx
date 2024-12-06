export async function getServerSideProps() {
    try {
      const res = await fetch("http://localhost:3000/api/data"); // Substitua pela URL da sua API em produção
      const result = await res.json();
  
      if (!result.success) {
        throw new Error(result.error || "Erro desconhecido");
      }
  
      return { props: { data: result.data } };
    } catch (error) {
      console.error("Erro ao buscar dados:", error.message);
      return { props: { data: [] } };
    }
  }
  

export default function index({data}) {
    return (
        <div className="md:w-2/3 m-auto mt-20 w-[90%]">
            <h2>Cursos Completos</h2>
            <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Conheça todos os cursos</h2>
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item._id} className="mb-4  text-justify border-b pb-2">
                <h3 className="font-semibold text-2xl">{item.titulo || "Sem título"}</h3> <br></br>
                <p>{item.descricao || "Sem descrição"}</p>
                <p>
                  <strong>Utilidade:</strong>{" "}
                  {item.utilidade || "Não informado"}
                </p>
                <p>
                  <strong>Escola:</strong> {item.escola || "Não informado"}
                </p>
                <p>
                  <strong>Local:</strong> {item.local || "Não informado"}
                </p>
                <p>
                  <strong>PDF:</strong>{" "}
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {item.pdf || "Nenhum link"}
                  </a>
                </p>
                <p>
                  <strong>Info:</strong> {item.info || "Sem informações"}
                </p>
                <p>
                  <strong>Data:</strong>{" "}
                  {item.data
                    ? new Date(item.data).toLocaleDateString()
                    : "Não informada"}
                </p>
              </li>
            ))}
          </ul>
        </div>
            
        </div>
    )
};
