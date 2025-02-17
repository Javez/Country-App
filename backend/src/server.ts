import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import validateEnv from './utils/validateEnv';

validateEnv.validateAppEnv();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const POPULATION_API = process.env.POPULATION_API;
const FLAG_API = process.env.FLAG_API;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/countries', async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(`${BASE_URL}/AvailableCountries`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

app.get('/country/:code', async (req: Request, res: Response) => {
  try {
    if (!POPULATION_API || !FLAG_API) throw new Error('No env vars');
    const { code } = req.params;
    const [info, population, flag] = await Promise.all([
      axios.get(`${BASE_URL}/CountryInfo/${code}`),
      axios.post(POPULATION_API, { country: code }),
      axios.post(FLAG_API, { country: code }),
    ]);
    res.json({
      borders: info.data.borders,
      population: population.data.data.populationCounts,
      flag: flag.data.data.flag,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country info' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
