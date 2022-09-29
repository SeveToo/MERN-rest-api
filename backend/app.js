import express from 'express';
import goalRouter from './routes/goalRouter.js';
import errorHandler from './middlewares/errorMiddleware.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRouter);
app.use(errorHandler)

export default app;
