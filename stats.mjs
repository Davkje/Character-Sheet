const stats = {
    name: "Vilsen Varg",
    race: "Half-Elf",
    class: "Druid",
    level: 2,
    proficiency: 2,
    subclass: "Circle of Spores",
    hp: 18,
    armourClass: 15,
    speed: 30,
    initiative: 2,
    abilities: [
        { name: "Strength", score: 8, modifier: -1 },
        { name: "Dexterity", score: 14, modifier: 2 },
        { name: "Constitution", score: 14, modifier: 2 },
        { name: "Intelligence", score: 10, modifier: 0 },
        { name: "Wisdom", score: 18, modifier: 4 },
        { name: "Charisma", score: 10, modifier: 0 },
    ],
};

stats.spellAtk = stats.proficiency + stats.abilities.find(ability => ability.name === "Wisdom").modifier;
stats.spellSave = 8 + stats.spellAtk;

export default stats;
