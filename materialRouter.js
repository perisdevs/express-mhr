const express = require('express');
const fs = require('fs');
const Sorter = require('./sorter.js');

const router = express.Router();

module.exports = function materialRouter() {

    router.get('/', (req, res) => {
        let materials = [];
        let materialFiles = fs.readdirSync('data/materials');
        materialFiles.forEach((file) => {
            let material = JSON.parse(fs.readFileSync(`data/materials/${file}`));
            materials.push(material);
        });

        const sortedMaterials = Sorter.applySortAndFilter(req, materials);

        res.json(sortedMaterials);
    });

    router.get('/:name', (req, res) => {
        let fileName = req.params.name.replace(/\s/g, '-');
        let materialFile = JSON.parse(fs.readFileSync(`data/materials/${fileName}.json`));
        res.json(materialFile);
    });

    return router;
}