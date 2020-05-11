import Reserva from '../models/Reserva';
import Hotel from '../models/Hotel';
import Usuario from '../models/Usuario';
import * as yup from 'yup';

class ReservaController{

    async index(req, res){
        const { responsavel } = req.body;
        let reservas = await Reserva.find({ responsavel });
        return res.json(reservas);
    }

    async store(req, res) {
        const { usuario_id } = req.headers;
        const { dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params;
        const schema = yup.object().shape(
            {
                dataInicial: yup
                .string()
                .required(),
                dataFinal: yup.string()
                .required(),
                qtdeHospedes: yup.
                number().
                required(),
            }
        );
        if(! (await schema.isValid(req.body))){
            return res.status(400).json({mensaem: 'Dados inválidos!'})
        }

        Usuario.findById(usuario_id).catch((err) =>{
            return res.status(401).json({mensaem: 'Usuário não autorizado!'})
        });

        Hotel.findById(hotel_id).catch((err) =>{
            return res.status(400).json({mensaem: 'Hotel inválido!'})
        });

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