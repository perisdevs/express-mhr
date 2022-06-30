import express from 'express';
import { weaponRouter } from './weaponrouter.mjs';

const port = 3000;

const app = express();

app.use('/weapons', weaponRouter());

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});