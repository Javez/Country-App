import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import validateEnv from './utils/validateEnv';

validateEnv.validateAppEnv();

const port = process.env.PORT;
const baseUrl = process.env.BASE_URL;
const populationApi = process.env.POPULATION_API;
const flagApi = process.env.FLAG_API;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/countries', async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(`${baseUrl}/AvailableCountries`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

app.get('/country/:code', async (req: Request, res: Response) => {
  try {
    if (!populationApi || !flagApi) throw new Error('No env vars');
    const { code } = req.params;
    const [info, population, flag] = await Promise.all([
      axios.get(`${baseUrl}/CountryInfo/${code}`),
      axios.post(populationApi, { country: code }),
      axios.post(flagApi, { country: code }),
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

app.listen(port, () => console.log(`Server running on port ${port}`));
