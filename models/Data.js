import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  titulo: { type: String },
  descricao: { type: String },
  utilidade: { type: String },
  escola: { type: String },
  local: { type: String },
  pdf: { type: String },
  info: { type: String },
  data: { type: String }, // Continua aceitando datas, mas não é obrigatório
});

export default mongoose.models.Data || mongoose.model('Data', DataSchema);

