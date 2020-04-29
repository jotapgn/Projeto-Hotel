import { Schema, model } from 'mongoose';

const ReservaSchema = new Schema({
    responsavel: {type: Schema.Types.ObjectId, ref: "Usuario" },
    hotel: {type: Schema.Types.ObjectId, ref: "Hotel" },
    período: Number,
    dataInicial: String,
    dataFinal: String,
    qtdeHospedes: Number,
});

export default model('Reserva', ReservaSchema);