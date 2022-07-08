import express from 'express';
import fs from 'fs';
import { Sorter } from './sorter.js';

const router = express.Router();

export function skillRouter() {

    router.get('/', (req, res) => {
        let skills = [];
        let skillFiles = fs.readdirSync('data/skills');
        skillFiles.forEach((file) => {
            let skill = JSON.parse(fs.readFileSync(`data/skills/${file}`));
            skills.push(skill);
        });

        const sortedSkills = Sorter.applySortAndFilter(req, skills);

        res.json(sortedSkills);
    });

    router.get('/:name', (req, res) => {
        let fileName = req.params.name.replace(/\s/g, '-');
        let skillFile = JSON.parse(fs.readFileSync(`data/skills/${fileName}.json`));
        res.json(skillFile);
    });

    return router;
}