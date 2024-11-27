import express, { Request, Response } from 'express';

const app = express();

// Middleware para parsing de JSON
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API está funcionando!');
});

export default app;
