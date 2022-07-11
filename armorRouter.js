const express = require('express');
const fs = require('fs');
const Sorter = require('./sorter.js');

const router = express.Router();

module.exports = function armorRouter() {

    let armorTypes = fs.readdirSync('data/armors');

    armorTypes.forEach((type) => {
        router.get(`/${type}`, (req, res) => {
            let armorFiles = fs.readdirSync(`data/armors/${type}`);
            let armors = [];
            armorFiles.forEach((file) => {
                let armor = JSON.parse(fs.readFileSync(`data/armors/${type}/${file}`));
                armors.push(armor);
            });
            res.json(armors);
        });

        router.get(`/${type}/:name`, (req, res) => {
            let file = req.params.name.replace(/\s/g, '-');
            let armorFile = JSON.parse(fs.readFileSync(`data/armors/${type}/${file}.json`));
            res.json(armorFile);
        });
    });

    router.get('/', (req, res) => {
        let armors = [];
        let armorTypes = fs.readdirSync('data/armors');

        armorTypes.forEach((type) => {

            let armorFiles = fs.readdirSync(`data/armors/${type}`);

            armorFiles.forEach((file) => {

                let armor = JSON.parse(fs.readFileSync(`data/armors/${type}/${file}`));
                armors.push(armor);
            });
            
        });

        const sortedArmor = Sorter.applySortAndFilter(req, armors);

        res.json(sortedArmor);
    });

    return router;
}