import 'express-async-errors';
import express, { json } from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import router from './routes.js';

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use(errorHandler);

export default app;
