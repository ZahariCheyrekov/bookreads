import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { configDatabase } from './config/configDatabase.js';
import { DEFAULT_PORT } from './constants/index.js';

import userRoutes from './routes/user.js';
import bookRoutes from './routes/book.js';
import postRoutes from './routes/post.js';
import reviewRouter from './routes/review.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userRoutes);
app.use('/books', bookRoutes);
app.use('/', postRoutes);
app.use('/', reviewRouter);

app.get('/', (req, res) => {
    res.send('Application is running correctly.');
});

const PORT = process.env.PORT || DEFAULT_PORT;

configDatabase(app, PORT);