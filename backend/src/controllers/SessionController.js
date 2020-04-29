import Usuario from '../models/Usuario'
class SessionController{
    async index(req, res){
        let usuarios = await Usuario.find();
        return res.json(usuarios)
    }
    async store(req, res){
        const { email, nome } = req.body;

        let usuario = await Usuario.findOne({email});

        if(!usuario){
            usuario = await Usuario.create({email, nome});
        }

        return res.json(usuario);
   

    }
    /*async update(req, res){
        const { nome } = req.body;
        const { usuario_id } = req.headers;

        let usuario = await Usuario.findById({_id = usuario_id});

        if(!usuario){
            res.status(403).json({mensagem:"Usuário não autorisado"});
        }
        usuario = await Usuario.findByIdAndUpdate({_id = usuario_id}, {nome});
        return res.json(usuario);

    }*/
   
   
}

export default new SessionController;