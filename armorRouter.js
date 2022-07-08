import express from 'express';
import fs from 'fs';
import { Sorter } from './sorter.js';

const router = express.Router();

export function armorRouter() {

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

        const sortedArmor = Sorter.applyArmorSortAndFilter(req, armors);

        res.json(sortedArmor);
    });

    return router;
}