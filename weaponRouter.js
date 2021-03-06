const express = require('express');
const fs = require('fs');
const Sorter = require('./sorter.js');

const router = express.Router();

module.exports = function weaponRouter() {
    
    let weaponTypes = fs.readdirSync('data/weapons');

    weaponTypes.forEach((type) => {
        router.get(`/${type}`, (req, res) => {            
            let weaponFiles = fs.readdirSync(`data/weapons/${type}`);
            let weapons = [];
            weaponFiles.forEach((file) => {
                let weapon = JSON.parse(fs.readFileSync(`data/weapons/${type}/${file}`));
                weapons.push(weapon);
            });
            res.json(weapons);
        });

        router.get(`/${type}/:name`, (req, res) => {
            let file = req.params.name.replace(/\s/g, '-');
            let weaponFile = JSON.parse(fs.readFileSync(`data/weapons/${type}/${file}.json`));
            res.json(weaponFile);
        });
    });

    router.get('/', (req, res) => {        
        let weapons = [];
        let weaponTypes = fs.readdirSync('data/weapons');

        weaponTypes.forEach((type) => {

            let weaponFiles = fs.readdirSync(`data/weapons/${type}`);

            weaponFiles.forEach((file) => {

                let weapon = JSON.parse(fs.readFileSync(`data/weapons/${type}/${file}`));
                weapons.push(weapon);
            });
        });

        const sortedWeapons = Sorter.applySortAndFilter(req, weapons);

        res.json(sortedWeapons);
    });    


    return router;
}