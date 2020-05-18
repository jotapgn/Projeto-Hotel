import express from 'express';//const express = require('express');

import mongoose from 'mongoose';

import routes from './routes'; //const routes = require('./routes');

import cors from   'cors';

import path from 'path';

class App {

    constructor() {
        this.app = express();

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        mongoose.connect('mongodb+srv://web202001:web202001@web202001-7q5k2.mongodb.net/test?retryWrites=true&w=majority');
        this.middlewares();
        this.routes();
    }

    middlewares() {

        this.app.use(
            '/imagens',
            express.static(path.resolve(__dirname, '..', '..', 'uploads'))
        )

        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app; //module.exports = new App().app;