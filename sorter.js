export class Sorter {

    static applySortAndFilter(req, array) {
        let unfilteredArray = structuredClone(array);

        let filter = {};

        for (const param in req.query) {

            switch (param) {
                case 'sortBy': break;
                case 'sortOrder': break;

                default: filter[param] = req.query[param]; break;
            }
        }

        let filteredArray = [];

        unfilteredArray.forEach((obj) => {

            let matchesFilter = true;

            for (const param in filter) {

                switch (param) {

                    case 'name': if (!obj.name.includes(filter.name)) matchesFilter = false; break;

                    case 'skillSlots':
                        Array.from(filter.skillSlots).forEach((slot, i) => {
                            if (parseInt(slot) != obj.skillSlots[i]) matchesFilter = false;
                        });                        
                        break;

                    case 'slotLevels':
                        Array.from(filter.slotLevels).forEach((slot, i) => {
                            if (parseInt(slot) != obj.slotLevels[i]) matchesFilter = false;
                        });
                        break;

                    case 'element':
                        if (obj.elementDamage) {
                            if (filter.element != obj.elementDamage.type) matchesFilter = false;
                        } else matchesFilter = false;
                        break;

                    case 'elementDamage':
                        if (obj.elementDamage) {
                            if (filter.elementDamage != obj.elementDamage.damage) matchesFilter = false;
                        } else matchesFilter = false;
                        break;

                    default: if (obj[param] != filter[param]) matchesFilter = false; break;
                }
            }

            if (matchesFilter) filteredArray.push(obj);
        });

        const sortOrder = req.query.sortOrder;
        const sortBy = req.query.sortBy;

        switch (sortBy) {

            case 'name':
                filteredArray.sort((a, b) => {
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();

                    switch (sortOrder) {
                        case 'asc': if (x > y) return 1; if (x < y) return -1; break;
                        case 'desc': if (x > y) return -1; if (x < y) return 1; break;
                        default: if (x > y) return -1; if (x < y) return 1; break;
                    }
                });
                break;

            case 'type':
                filteredArray.sort((a, b) => {
                    let x = a.type.toLowerCase();
                    let y = b.type.toLowerCase();

                    switch (sortOrder) {
                        case 'asc': if (x > y) return 1; if (x < y) return -1; break;
                        case 'desc': if (x > y) return -1; if (x < y) return 1; break;
                        default: if (x > y) return -1; if (x < y) return 1; break;
                    }
                });
                break;

            case 'skillSlots':
                filteredArray.sort((a, b) => {

                    let sumA = 0;
                    a.skillSlots.forEach((level) => {
                        sumA += level;
                    });

                    let sumB = 0;
                    b.skillSlots.forEach((level) => {
                        sumB += level;
                    });

                    switch (sortOrder) {
                        case 'asc': return sumA - sumB;
                        case 'desc': return sumB - sumA;
                        default: return sumB - sumA;
                    }
                });
                break;

            case 'slotLevels':
                filteredArray.sort((a, b) => {

                    let sumA = 0;
                    a.slotLevels.forEach((level) => {
                        sumA += level;
                    });

                    let sumB = 0;
                    b.slotLevels.forEach((level) => {
                        sumB += level;
                    });

                    switch (sortOrder) {
                        case 'asc': return sumA - sumB;
                        case 'desc': return sumB - sumA;
                        default: return sumB - sumA;
                    }
                });
                break;
                
            case 'elementDamage':
                filteredArray.sort((a, b) => {
                    switch (sortOrder) {
                        case 'asc': return a.elementDamage.damage - b.elementDamage.damage; break;
                        case 'desc': return b.elementDamage.damage - a.elementDamage.damage; break;
                        default: return b.elementDamage.damage - a.elementDamage.damage; break;
                    }
                });
                break;

            default:
                filteredArray.sort((a, b) => {
                    switch (sortOrder) {
                        case 'asc': return a[sortBy] - b[sortBy]; break;
                        case 'desc': return b[sortBy] - a[sortBy]; break;
                        default: return b[sortBy] - a[sortBy]; break;
                    }
                });
                break;
        }

        return filteredArray;
    }
    
}