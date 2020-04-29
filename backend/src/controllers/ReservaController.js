import Reserva from '../models/Reserva';
import Hotel from '../models/Hotel';
import Usuario from '../models/Usuario';

class ReservaController{

    async index(req, res){
        let reservas = await Reserva.find({ responsavel });
        return res.json(reservas)
    }

    async store(req, res) {
        const { usuario_id, dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params;
        let reserva = await Reserva.create({
            responsavel: usuario_id,
            hotel: hotel_id,
            dataInicial,
            dataFinal,
            qtdeHospedes,
        });
        await reserva.populate('responsavel').populate('hotel').execPopulate();

        return res.json(reserva);


    }
}

export default new ReservaController;