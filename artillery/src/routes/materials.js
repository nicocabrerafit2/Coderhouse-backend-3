import { Router } from 'express';
import { getAll, postMaterial, getRandom, getByName } from '../controllers/materials.js';

const app = Router();

app.get('/', getAll);
app.get('/:name', getByName);
app.get('/random', getRandom);
app.post('/', postMaterial);

export default app;
