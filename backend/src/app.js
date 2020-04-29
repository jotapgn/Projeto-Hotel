import express from 'express';//const express = require('express');

import mongoose from 'mongoose';

import routes from './routes'; //const routes = require('./routes');

import cors from   'cors';

class App {

    constructor() {
        this.app = express();

        mongoose.connect('mongodb+srv://web202001:web202001@web202001-7q5k2.mongodb.net/test?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app; //module.exports = new App().app;