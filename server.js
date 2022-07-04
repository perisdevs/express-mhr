import express from 'express';
import { armorRouter } from './armorRouter.js';
import { decorationRouter } from './decorationRouter.js';
import { weaponRouter } from './weaponRouter.js';

const port = 3000;

const app = express();

app.use('/weapons', weaponRouter());
app.use('/armor', armorRouter());
app.use('/decorations', decorationRouter());

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});