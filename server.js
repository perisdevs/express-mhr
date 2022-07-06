import express from 'express';
import { armorRouter } from './armorRouter.js';
import { decorationRouter } from './decorationRouter.js';
import { materialRouter } from './materialRouter.js';
import { skillRouter } from './skillRouter.js';
import { weaponRouter } from './weaponRouter.js';

const port = 3001;

const app = express();

app.use('/weapons', weaponRouter());
app.use('/armor', armorRouter());
app.use('/decorations', decorationRouter());
app.use('/materials', materialRouter());
app.use('/skills', skillRouter());

app.get('/', (req, res) => {
    res.send('home');
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});