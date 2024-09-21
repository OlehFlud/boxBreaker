import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';

import {config} from './config/index.js';
import {authRouter, historyRouter, lootBoxRouter, rewardRouter, userRouter} from './routes/index.js';

dotenv.config();

class App {

  constructor() {
    this.app = express();
    global.appRoot = path.resolve(process.cwd(), '../');

    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(cors({
      origin: this.configureCors
    }));

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    this.app.use(express.static(path.resolve(global?.appRoot, 'public')));

    this.mountRoutes();
    this.setupDB();
    this.app.use(this.customErrorHandler);

  }

  setupDB() {
    mongoose.connect(config.MONGODB_URL)
      .then(() => console.log('Connected to MongoDB successfully'))
      .catch((err) => console.error('MongoDB connection error:', err));
    mongoose.connection.on('error', console.log.bind(console, 'MONGO ERROR'));
  }

  customErrorHandler(err, req, res, next) {
    res
      .status(err.status)
      .json({
        message: err.message || 'Unknown Error',
        code: err.code
      });

  }

  configureCors = (origin, callback) => {
    const whiteList = config.ALLOWED_ORIGIN.split(';');

    if (!origin) {
      return callback(null, true);
    }
    if (!whiteList.includes(origin)) {
      return callback(new Error('Cors not allowed'),false);
    }

    return callback(null, true);
  }

  mountRoutes() {
    this.app.use('/reward',rewardRouter);
    this.app.use('/lootBox',lootBoxRouter);
    this.app.use('/auth',authRouter);
    this.app.use('/history',historyRouter);
    this.app.use('/users',userRouter);
  }
}

export const app = new App().app;
