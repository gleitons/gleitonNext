import { useState } from 'react';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    utilidade: '',
    escola: '',
    local: '',
    pdf: '',
    info: '',
    data: '',
  });
  const [senha, setSenha] = useState(false)
  const [pass, setPass] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Dados cadastrados com sucesso!');
        setFormData({
          titulo: '',
          descricao: '',
          utilidade: '',
          escola: '',
          local: '',
          pdf: '',
          info: '',
          data: '',
        });
      } else {
        alert('Erro ao cadastrar dados!');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar dados!');
    }
  };
  const verificaSenha = (e) => {
    setPass(e.target.value)
  }
  const debloqueia = () => {
    if(pass === "timtim") {
      setSenha(true)
     
    }
  }
  return (
    <>
      <div className='p-2 bg-red-400'>
        <input onChange={verificaSenha} type="text" id='pass' />
        <button onClick={debloqueia}>Verificar</button>
      </div>
      {senha && (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro de Dados</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                id="titulo"
                name="titulo"
                placeholder="Digite o título"
                value={formData.titulo}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <textarea
                id="descricao"
                name="descricao"
                placeholder="Digite a descrição"
                value={formData.descricao}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label htmlFor="utilidade" className="block text-sm font-medium text-gray-700">
                Utilidade
              </label>
              <input
                id="utilidade"
                name="utilidade"
                placeholder="Digite a utilidade"
                value={formData.utilidade}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="escola" className="block text-sm font-medium text-gray-700">
                Escola
              </label>
              <input
                id="escola"
                name="escola"
                placeholder="Digite o nome da escola"
                value={formData.escola}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="local" className="block text-sm font-medium text-gray-700">
                Local
              </label>
              <input
                id="local"
                name="local"
                placeholder="Digite o local"
                value={formData.local}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
                Link do PDF
              </label>
              <input
                id="pdf"
                name="pdf"
                placeholder="Digite o link do PDF"
                value={formData.pdf}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="info" className="block text-sm font-medium text-gray-700">
                Informações adicionais
              </label>
              <textarea
                id="info"
                name="info"
                placeholder="Digite informações adicionais"
                value={formData.info}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label htmlFor="data" className="block text-sm font-medium text-gray-700">
                Data
              </label>
              <input
                id="data"
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
