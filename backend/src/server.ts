import express, { Request, Response } from 'express';
import script from './controllers/script';
import cors from 'cors';

const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.post('/hero', async (req: Request, res: Response) => {
    const data = req.body;
    const scriptHero = await script.getHeroesFromApi();
    res.send(scriptHero);
});

server.get('/villain', async (req: Request, res: Response) => {
    const scriptVillain = await script.getVillainsFromApi();
    res.send(scriptVillain);
});

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrado');
});

server.listen(port, () => {
  console.log(`Backend ouvindo na porta ${port}`);
});
