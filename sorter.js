import { sortArmorByParam, sortWeaponsAscending, sortWeaponsDescending } from "./sorts.js";

export class Sorter {
    
    static applyWeaponSortAndFilter(req, weapons) {
        let sortedWeapons = structuredClone(weapons);

        const sortOrder = req.query.sortOrder;
        const sortBy = req.query.sortBy;

        switch (sortOrder) {

            case 'asc': sortedWeapons = sortWeaponsAscending(weapons, sortBy); break;

            case 'desc': sortedWeapons = sortWeaponsDescending(weapons, sortBy); break;

            default: sortedWeapons = sortWeaponsDescending(weapons, sortBy); break;
                
        }

        let filter = {};
        if (req.query.damage) filter.damage = req.query.damage;        
        if (req.query.name) filter.name = req.query.name;   
        if (req.query.slotLevels) filter.slotLevels = req.query.slotLevels;
        if (req.query.rampageSlot) filter.rampageSlot = req.query.rampageSlot;
        if (req.query.elementDamage) filter.elementDamage = req.query.elementDamage;
        if (req.query.element) filter.element = req.query.element;
        if (req.query.defenseBonus) filter.defenseBonus = req.query.defenseBonus;
        if (req.query.affinity) filter.affinty = req.query.affinity;
        if (req.query.type) filter.type = req.query.type;
        

        let filteredWeapons = [];

        sortedWeapons.forEach((weapon) => {

            let matchesFilter = true;

            for (const param in filter) {

                switch (param) {

                    case 'name': if (!weapon.name.includes(filter.name)) matchesFilter = false; break;

                    case 'slotLevels':
                        Array.from(filter.slotLevels).forEach((slot, i) => {
                            if (parseInt(slot) != weapon.slotLevels[i]) matchesFilter = false;
                        });
                        break;

                    case 'element':
                        if (weapon.elementDamage) {
                            if (filter.element != weapon.elementDamage.type) matchesFilter = false;
                        } else matchesFilter = false;
                        break;

                    case 'elementDamage':
                        if (weapon.elementDamage) {
                            if (filter.elementDamage != weapon.elementDamage.damage) matchesFilter = false;
                        } else matchesFilter = false;
                        break;
                        
                    default: if (weapon[param] != filter[param]) matchesFilter = false; break;
                }
                
            }

            if (matchesFilter) filteredWeapons.push(weapon);
        });                

        if (filteredWeapons[0]) {
            return filteredWeapons;
        } else return sortedWeapons;
    }

    static applyArmorSortAndFilter(req, armor) {
        let sortedArmor = structuredClone(armor);
        sortedArmor = sortArmorByParam(req.query.sortBy, req.query.sortOrder, armor);

        let filter = {};
        for (const param in req.query) {

            switch (param) {

                case 'sortBy': break;
                case 'sortOrder': break;

                default: filter[param] = req.query[param]; break;
            }            
        }

        let filteredArmor = [];
        
        sortedArmor.forEach((armor) => {

            let matchesFilter = true;

            for (const param in filter) {

                switch (param) {

                    case 'name': if (!armor.name.includes(filter.name)) matchesFilter = false; break;

                    case 'skillSlots':
                        Array.from(filter.skillSlots).forEach((slot, i) => {
                            if (parseInt(slot) != armor.skillSlots[i]) matchesFilter = false;
                        });                        
                        break;

                    default: if (armor[param] != filter[param]) matchesFilter = false; break;
                }
            }

            if (matchesFilter) filteredArmor.push(armor);
        });

        if (filteredArmor[0]) {
            return filteredArmor;
        } else return sortedArmor;
    }
}