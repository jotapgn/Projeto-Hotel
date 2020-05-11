import { Router } from 'express'; //const { Router } = require('express');

import SessionController from './controllers/SessionController';

import HotelController from './controllers/HotelController';

import ReservaController from './controllers/ReservaController';

import multer from 'multer';

import uploadConfig from './config/upload';


const routes = new Router();

const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);
//routes.put('/sessions', SessionController.update);

routes.post('/hoteis', HotelController.store);
routes.get('/hoteis', upload.single('imagem'), HotelController.index);


routes.post('/hoteis/:hotel_id/reserva', ReservaController.store);
routes.get('/hoteis/:hotel_id/reserva', ReservaController.index);

export default routes; //module.exports = routes;