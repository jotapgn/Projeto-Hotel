import Reserva from '../models/Reserva';

class ReservaController{

    index(req, res){
        //let reservas = await Reserva.find();
        return res.json({retorno: false});
    }

    async store(req, res) {
        const { responsavel, hotel, período, dataInicial, dataFinal, qtdeHospedes } = req.body;

        let reserva = await Reserva.create({
            responsavel,
            hotel,
            período,
            dataInicial,
            dataFinal,
            qtdeHospedes,
        });

        return res.json(reserva);


    }
}

export default new ReservaController;