import express, { Request, Response } from 'express';
import cors from 'cors';

import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

export default app;
