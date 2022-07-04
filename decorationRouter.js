import express from 'express';
import fs from 'fs';

const router = express.Router();

export function decorationRouter() {

    router.get('/', (req, res) => {
        let decorations = [];
        let decorationFiles = fs.readdirSync('data/decorations');        
        decorationFiles.forEach((file) => {
            let decoration = JSON.parse(fs.readFileSync(`data/decorations/${file}`));
            decorations.push(decoration);
        });
        res.json(decorations);
    });

    router.get('/:name', (req, res) => {
        let fileName = req.params.name.replace(/\s/g, '-');
        let decorationFile = JSON.parse(fs.readFileSync(`data/decorations/${fileName}.json`));
        res.json(decorationFile);
    });

    return router;
}