export function sortWeaponsByRarityAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return a.rarity - b.rarity});
    return newWeapons;
}

export function sortWeaponsByRarityDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return b.rarity - a.rarity});
    return newWeapons;
}

export function sortWeaponsByTypeAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });
    return newWeapons;
}

export function sortWeaponsByTypeDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) return 1;
        if (x > y) return -1;
        return 0;
    });
    return newWeapons;
}

export function sortWeaponsByNameAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });
    return newWeapons;
}

export function sortWeaponsByNameDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) return 1;
        if (x > y) return -1;
        return 0;
    });
    return newWeapons;
}

export function sortWeaponsByDamageAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return a.damage - b.damage});
    return newWeapons;
}

export function sortWeaponsByDamageDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return b.damage - a.damage});
    return newWeapons;
}

export function sortWeaponsBySlotsAscending(weapons) {
    let newWeapons = structuredClone(weapons);

    newWeapons.sort((a, b) => {

        let sumA = 0;
        a.slotLevels.forEach((slot) => {
            sumA += slot;
        });

        let sumB = 0;
        b.slotLevels.forEach((slot) => {
            sumB += slot;
        });

        return sumA - sumB
    });
    return newWeapons;
}

export function sortWeaponsBySlotsDescending(weapons) {
    let newWeapons = structuredClone(weapons);

    newWeapons.sort((a, b) => {

        let sumA = 0;
        a.slotLevels.forEach((slot) => {
            sumA += slot;
        });

        let sumB = 0;
        b.slotLevels.forEach((slot) => {
            sumB += slot;
        });

        return sumB - sumA
    });
    return newWeapons;
}

export function sortWeaponsByRSlotAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return a.rampageSlot - b.rampageSlot});
    return newWeapons;
}

export function sortWeaponsByRSlotDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return b.rampageSlot - a.rampageSlot});
    return newWeapons;
}

export function sortWeaponsByEDamageAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {
        if (!a.elementDamage) return -1;
        if (!b.elementDamage) return 1;
        return a.elementDamage.damage - b.elementDamage.damage;
    });
    return newWeapons;
}

export function sortWeaponsByEDamageDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {
        if (!a.elementDamage) return 1;
        if (!b.elementDamage) return -1;
        return b.elementDamage.damage - a.elementDamage.damage;
    });
    return newWeapons;
}

export function sortWeaponsByDBonusAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return a.defenseBonus - b.defenseBonus});
    return newWeapons;
}

export function sortWeaponsByDBonusDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return b.defenseBonus - a.defenseBonus});
    return newWeapons;
}

export function sortWeaponsByAffinityAscending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return a.affinity - b.affinity});
    return newWeapons;
}

export function sortWeaponsByAffinityDescending(weapons) {
    let newWeapons = structuredClone(weapons);
    newWeapons.sort((a, b) => {return b.affinity - a.affinity});
    return newWeapons;
}

export function sortWeaponsBySharpnessAscending(weapons) {
    let newWeapons = structuredClone(weapons);

    newWeapons.sort((a, b) => {
        if (!a.sharpness) return -1;
        if (!b.sharpness) return 1;

        let topSumA = a.sharpness.red + a.sharpness.orange + a.sharpness.yellow + a.sharpness.green 
        + a.sharpness.blue + a.sharpness.white + a.sharpness.white;

        let topSumB = a.sharpness.red + a.sharpness.orange + a.sharpness.yellow + a.sharpness.green 
        + a.sharpness.blue + a.sharpness.white + a.sharpness.white;

        let bottomSumA = b.sharpness.red + b.sharpness.orange + b.sharpness.yellow + b.sharpness.green 
        + b.sharpness.blue + b.sharpness.white + b.sharpness.white;
        
        let bottomSumB = b.sharpness.red + b.sharpness.orange + b.sharpness.yellow + b.sharpness.green 
        + b.sharpness.blue + b.sharpness.white + b.sharpness.white;

        let avgA = (topSumA + bottomSumA) / 2;
        let avgB = (topSumB + bottomSumB) / 2;

        return avgA - avgB;
    });
    return newWeapons;
}

export function sortWeaponsBySharpnessDescending(weapons) {
    let newWeapons = structuredClone(weapons);

    newWeapons.sort((a, b) => {
        if (!a.sharpness) return 1;
        if (!b.sharpness) return -1;

        let topSumA = a.sharpness.red + a.sharpness.orange + a.sharpness.yellow + a.sharpness.green 
        + a.sharpness.blue + a.sharpness.white + a.sharpness.white;

        let topSumB = a.sharpness.red + a.sharpness.orange + a.sharpness.yellow + a.sharpness.green 
        + a.sharpness.blue + a.sharpness.white + a.sharpness.white;

        let bottomSumA = b.sharpness.red + b.sharpness.orange + b.sharpness.yellow + b.sharpness.green 
        + b.sharpness.blue + b.sharpness.white + b.sharpness.white;
        
        let bottomSumB = b.sharpness.red + b.sharpness.orange + b.sharpness.yellow + b.sharpness.green 
        + b.sharpness.blue + b.sharpness.white + b.sharpness.white;

        let avgA = (topSumA + bottomSumA) / 2;
        let avgB = (topSumB + bottomSumB) / 2;

        return avgB - avgA;
    });
    return newWeapons;
}

export function sortWeaponsAscending(weapons, sortBy) {
    let sortedWeapons = structuredClone(weapons);

    switch(sortBy) {
        case 'rarity': sortedWeapons = sortWeaponsByRarityAscending(sortedWeapons); break;
        case 'type': sortedWeapons = sortWeaponsByTypeAscending(sortedWeapons); break;
        case 'name': sortedWeapons = sortWeaponsByNameAscending(sortedWeapons); break;
        case 'damage': sortedWeapons = sortWeaponsByDamageAscending(sortedWeapons); break;
        case 'slots': sortedWeapons = sortWeaponsBySlotsAscending(sortedWeapons); break;                    
        case 'rampageSlot': sortedWeapons = sortWeaponsByRSlotAscending(sortedWeapons); break;
        case 'elementDamage': sortedWeapons = sortWeaponsByEDamageAscending(sortedWeapons); break;
        case 'defenseBonus': sortedWeapons = sortWeaponsByDBonusAscending(sortedWeapons); break;
        case 'affinity': sortedWeapons = sortWeaponsByAffinityAscending(sortedWeapons); break;
        case 'sharpness': sortedWeapons = sortWeaponsBySharpnessAscending(sortedWeapons); break;
    }

    return sortedWeapons;
}

export function sortWeaponsDescending(weapons, sortBy) {
    let sortedWeapons = structuredClone(weapons);

    switch(sortBy) {
        case 'rarity': sortedWeapons = sortWeaponsByRarityDescending(sortedWeapons); break;
        case 'type': sortedWeapons = sortWeaponsByTypeDescending(sortedWeapons); break;
        case 'name': sortedWeapons = sortWeaponsByNameDescending(sortedWeapons); break;
        case 'damage': sortedWeapons = sortWeaponsByDamageDescending(sortedWeapons); break;
        case 'slots': sortedWeapons = sortWeaponsBySlotsDescending(sortedWeapons); break;                    
        case 'rampageSlot': sortedWeapons = sortWeaponsByRSlotDescending(sortedWeapons); break;
        case 'elementDamage': sortedWeapons = sortWeaponsByEDamageDescending(sortedWeapons); break;
        case 'defenseBonus': sortedWeapons = sortWeaponsByDBonusDescending(sortedWeapons); break;
        case 'affinity': sortedWeapons = sortWeaponsByAffinityDescending(sortedWeapons); break;
        case 'sharpness': sortedWeapons = sortWeaponsBySharpnessDescending(sortedWeapons); break;
    }

    return sortedWeapons;
}

