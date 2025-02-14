import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
import { NextFunction, Request, Response } from 'express';
import countriesRouter from './routes/countriesRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/countries', countriesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
