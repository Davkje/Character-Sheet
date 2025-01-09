const stats = {
    name: "Vilsen Varg",
    race: "Half-Elf",
    class: "Druid",
    level: 2,
    proficiency: 2,
    subclass: "Circle of Spores",
    hp: 18,
    armourClass: 15, // 11 Leather Armour, +2 Dex, +2 Shield
    speed: 30,
    initiative: null, // Placeholder to be calculated dynamically
    spellAtk: null, // Placeholder to be calculated dynamically
    spellSave: null, // Placeholder to be calculated dynamically

    abilities: {
        strength: {
            score: 8,
            modifier: -1,
            savingThrow: { score: -1, proficient: false },
            skills: [
                { name: "Athletics", score: -1, proficient: false },
            ],
        },
        dexterity: {
            score: 14,
            modifier: +2,
            savingThrow: { score: +2, proficient: false },
            skills: [
                { name: "Acrobatics", score: +4, proficient: true },
                { name: "Sleight of Hand", score: +2, proficient: false },
                { name: "Stealth", score: +2, proficient: true },
            ],
        },
        constitution: {
            score: 14,
            modifier: +2,
            savingThrow: { score: +2, proficient: false },
            skills: [],
        },
        intelligence: {
            score: 10,
            modifier: +0,
            savingThrow: { score: null, proficient: true },
            skills: [
                { name: "Arcana", score: +0, proficient: false },
                { name: "History", score: +0, proficient: false },
                { name: "Investigation", score: +0, proficient: false },
                { name: "Nature", score: +2, proficient: true },
                { name: "Religion", score: +0, proficient: false },
            ],
        },
        wisdom: {
            score: 18,
            modifier: +4,
            savingThrow: { score: null, proficient: true },
            skills: [
                { name: "Animal Handling", score: +6, proficient: true },
                { name: "Insight", score: +4, proficient: false },
                { name: "Medicine", score: +4, proficient: false },
                { name: "Perception", score: +6, proficient: true },
                { name: "Survival", score: +4, proficient: false },
            ],
        },
        charisma: {
            score: 10,
            modifier: +0,
            savingThrow: { score: +0, proficient: false },
            skills: [
                { name: "Deception", score: +0, proficient: false },
                { name: "Intimidation", score: +0, proficient: false },
                { name: "Performance", score: +0, proficient: false },
                { name: "Persuasion", score: +0, proficient: false },
            ],
        },
    },
};

// CALCULATIONS

// Spell Atk
stats.spellAtk = stats.proficiency + stats.abilities.wisdom.modifier;
// Spall Save
stats.spellSave = 8 + stats.spellAtk;
// Initiative
stats.initiative = stats.abilities.dexterity.modifier;

// Proficient Saving Throws
// INT SAVE
stats.abilities.intelligence.savingThrow.score = +stats.abilities.intelligence.modifier + stats.proficiency;
// WIS SAVE
stats.abilities.wisdom.savingThrow.score = stats.abilities.wisdom.modifier + stats.proficiency;

export default stats;
