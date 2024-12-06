import connectToDatabase from "../../lib/mongodb";
import Data from "../../models/Data";




export async function POST(req) {
  try {
    console.log("Dados recebidos no POST:", req.body);
    const data = await Data.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error("Erro no servidor:", error); // Log detalhado do erro
    res.status(500).json({ success: false, error: error.message });
  }
  

}
export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'POST':
      try {
        console.log("Dados recebidos no POST:", req.body);
        const data = await Data.create(req.body);
        res.status(201).json({ success: true, data });
      } catch (error) {
        console.error("Erro no servidor:", error); // Log detalhado do erro
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'GET':
      try {
        const data = await Data.find({});
        res.status(200).json({ success: true, data });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Método não permitido' });
      break;
  }
}
