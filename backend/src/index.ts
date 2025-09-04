import 'dotenv/config';


import express, { Request, Response } from 'express';

import {Env} from './config/env.config';

const app = Express();

const BASE_PATH = Env.BASE_PATH;

const allowedOrigins = Env.ALLOWED_ORIGINS?.split(',');

const corsOptions: CorsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      const errorMsg = `CORS error: Origin ${origin} is not allowed`;
      callback(new UnauthorizedException(errorMsg), false);
    }
  },
};
