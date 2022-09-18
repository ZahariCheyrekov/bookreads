import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { configDatabase } from './config/configDatabase.js';
import { DEFAULT_PORT } from './constants/index.js';

import userRouter from './routes/user.js';
import bookRouter from './routes/book.js';
import postRouter from './routes/post.js';
import reviewRouter from './routes/review.js';
import genresRouter from './routes/genre.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true, limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/books', bookRouter);
app.use('/', postRouter);
app.use('/', reviewRouter);
app.use('/genres', genresRouter);

app.get('/', (req, res) => {
    res.send('Application is running correctly.');
});

const PORT = process.env.PORT || DEFAULT_PORT;

configDatabase(app, PORT);