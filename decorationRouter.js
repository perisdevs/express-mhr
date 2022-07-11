const express = require('express');
const fs = require('fs');
const Sorter = require('./sorter.js');

const router = express.Router();

module.exports = function decorationRouter() {

    router.get('/', (req, res) => {
        let decorations = [];
        let decorationFiles = fs.readdirSync('data/decorations');        
        decorationFiles.forEach((file) => {
            let decoration = JSON.parse(fs.readFileSync(`data/decorations/${file}`));
            decorations.push(decoration);
        });

        const sortedDecorations = Sorter.applySortAndFilter(req, decorations);

        res.json(sortedDecorations);
    });

    router.get('/:name', (req, res) => {
        let fileName = req.params.name.replace(/\s/g, '-');
        let decorationFile = JSON.parse(fs.readFileSync(`data/decorations/${fileName}.json`));
        res.json(decorationFile);
    });

    return router;
}