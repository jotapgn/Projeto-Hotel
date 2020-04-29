import { Router } from 'express'; //const { Router } = require('express');

import SessionController from './controllers/SessionController';

import HotelController from './controllers/HotelController';

import ReservaController from './controllers/ReservaController';


const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);
//routes.put('/sessions', SessionController.update);

routes.post('/hoteis', HotelController.store);
routes.get('/hoteis', HotelController.index);


routes.post('/reservas', ReservaController.store);
routes.get('/reservas', ReservaController.index);

export default routes; //module.exports = routes;