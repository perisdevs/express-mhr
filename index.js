const express = require('express');
const serverless = require('serverless-http');
const armorRouter = require('./armorRouter.js');
const decorationRouter = require('./decorationRouter.js');
const materialRouter = require('./materialRouter.js');
const skillRouter = require('./skillRouter.js');
const weaponRouter = require('./weaponRouter.js');

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

module.exports.handler = serverless(app);