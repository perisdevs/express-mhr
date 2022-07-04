import express from 'express';
import { armorRouter } from './armorRouter.js';
import { weaponRouter } from './weaponRouter.js';

const port = 3000;

const app = express();

app.use('/weapons', weaponRouter());
app.use('/armor', armorRouter());

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});