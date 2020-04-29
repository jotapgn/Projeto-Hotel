import Hotel from '../models/Hotel';

class HotelController {


    async store(req, res) {
        const { nome, uf, municipio, endereco, qtdeAptos, valorDiaria } = req.body;

        let hotel = await Hotel.create({
            nome,
            uf,
            municipio,
            endereco,
            qtdeAptos,
            valorDiaria,
        });

        return res.json(hotel);


    }
    async index(req, res){
        let hoteis = await Hotel.find();
        return res.json(hoteis)
    }

}

export default new HotelController;