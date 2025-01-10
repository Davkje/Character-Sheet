// ---------- IMPORTS ----------

import stats from "./stats.mjs";

// ---------- VARIABLES ----------

// Map button IDs to section IDs
const sectionsMap = {
    'feats-btn': 'feats-section',
    'actions-btn': 'actions-section',
    'inventory-btn': 'inventory-section',
};

const abilitiesMap = {
    'str-btn': 'strSection',
    'dex-btn': 'dexSection',
    'con-btn': 'conSection',
    'int-btn': 'intSection',
    'wis-btn': 'wisSection',
    'cha-btn': 'chaSection',
};

const topSection = document.querySelector('#topSection');

// Cache buttons and sections
const buttons = Object.keys(sectionsMap).map(id => document.querySelector(`#${id}`));

const abilityButtons = Object.keys(abilitiesMap).map(id => document.querySelector(`#${id}`));
const abilitySections = Object.values(abilitiesMap).map(id => document.querySelector(`#${id}`));

// EVENTS

// Add event listeners for main and ability buttons
buttons.forEach(button => {
    button.addEventListener('click', () => toggleSection(button.id, sectionsMap));
});

abilityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleSection(button.id, abilitiesMap, true); // true indicates toggle mode
    });
});

// Close any open section when clicking outside
document.addEventListener('click', (event) => {
    abilitySections.forEach(section => {
        if (!section.classList.contains('hidden') && !section.contains(event.target)) {
            section.classList.add('hidden');
        }
    });
});

// ---------- FUNCTIONS ----------

// PRINT TOP SECTION
function printTopSection() {
    topSection.innerHTML = `
        <div class="menu box">
            <span class="material-icons menu-icon">menu</span>
        </div>
        <div class="name box">${stats.name}</div>
        <div class="settings box">
            <span class="material-icons settings-icon">settings</span>
        </div>
        <div class="class-level box">
            <span>${stats.race}</span>
            <span>${stats.class}${stats.level}</span>
        </div>
        <div class="picture-container box">
            <img class="picture" src="assets/vilsen_varg.png" alt="Profile Pic" />
        </div>
        <div class="hp-dice box">
            <span>${stats.hp}HP</span>
            <span>${stats.level}d8</span>
        </div>
        <div class="prof box">AC ${stats.armourClass}</div>
        <div class="prof box">INIT +${stats.initiative}</div>
        <div class="prof box">SPEED ${stats.speed}</div>
        <div class="prof box">PROF +${stats.proficiency}</div>
        <div class="prof box">SPELL ATK +${stats.spellAtk}</div>
        <div class="prof box">SPELL DC ${stats.spellSave}</div>
    `;
}

// PRINT SKILLS
function printSkillSections() {
    const sections = {
        strength: document.querySelector("#strSection"),
        dexterity: document.querySelector("#dexSection"),
        constitution: document.querySelector("#conSection"),
        intelligence: document.querySelector("#intSection"),
        wisdom: document.querySelector("#wisSection"),
        charisma: document.querySelector("#chaSection"),
    };

    Object.keys(stats.abilities).forEach(ability => {
        const abilityData = stats.abilities[ability];
        const section = sections[ability];

        if (!section) return;

        const skillRows = abilityData.skills
            .map(skill => `
                <div class="skill-row box">
                    <div class="material-icons">${skill.proficient ? "radio_button_checked" : "radio_button_unchecked"}</div>
                    <div>${skill.name}</div>
                    <div>${skill.score >= 0 ? `+${skill.score}` : skill.score}</div>
                </div>
            `)
            .join("");

        section.innerHTML = `
            <div class="box-header">
                <h3 class="box">${capitalize(ability)}</h3>
            </div>
            <div class="box">
                <span>Score ${abilityData.score}</span>
            </div>
            <div class="box">
                <span>Modifier ${abilityData.modifier >= 0 ? `+${abilityData.modifier}` : abilityData.modifier}</span>
            </div>
            <div class="box">
                <span>Saving Throw ${abilityData.savingThrow.score >= 0 ? `+${abilityData.savingThrow.score}` : abilityData.savingThrow.score}
                    ${abilityData.savingThrow.proficient ? "(Proficient)" : ""}
                </span>
            </div>
            <div class="skill-column">
                ${skillRows}
            </div>
            <button name="closing-btn" class="closing-btn material-icons">close</button>
        `;
    });

    document.querySelectorAll('.closing-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const section = button.closest('.ability-section');
            if (section) section.classList.add('hidden');
        });
    });
}

// CAPITALIZE
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// TOGGLE SECTIONS
function toggleSection(buttonId, map, toggleMode = false) {
    const targetSectionId = map[buttonId];
    const sections = Object.values(map).map(id => document.querySelector(`#${id}`));

    sections.forEach(section => {
        if (section.id === targetSectionId) {
            if (toggleMode) {
                section.classList.toggle('hidden');
            } else {
                section.classList.remove('hidden');
            }
        } else {
            section.classList.add('hidden');
        }
    });
}

// PRINT - RUNS ON STARTUP
printTopSection();

printSkillSections();
