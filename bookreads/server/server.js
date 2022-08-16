import express from 'express';
import dotenv from 'dotenv';

import { configDatabase } from './config/configDatabase.js';
import { DEFAULT_PORT } from './constants/index.js';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Application is running correctly.');
});

const PORT = process.env.PORT || DEFAULT_PORT;

configDatabase(app, PORT);