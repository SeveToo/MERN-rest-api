import express from 'express';
import goalRouter from './routes/goalRouter.js'  
const app = express();

app.use('/api/goals', goalRouter);

export default app;
