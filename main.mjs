// IMPORTS

import stats from "./stats.mjs"

// VARIABLES

// Map button IDs to section IDs
const sectionsMap = {
    'feats-btn': 'feats-section',
    'actions-btn': 'actions-section',
    'inventory-btn': 'inventory-section',
};

const topSection = document.querySelector('#topSection');

// Cache buttons and sections
const buttons = Object.keys(sectionsMap).map(id => document.querySelector(`#${id}`));
const sections = Object.values(sectionsMap).map(id => document.querySelector(`#${id}`));

// EVENTS

buttons.forEach(button => {
    button.addEventListener('click', () => toggleSectionVisible(button.id));
});

const abilitiesMap = {
    'str-btn': 'strSection',
    'dex-btn': 'dexSection',
    'con-btn': 'conSection',
    'int-btn': 'intSection',
    'wis-btn': 'wisSection',
    'cha-btn': 'chaSection',
};

// Cache all buttons and sections
const abilityButtons = Object.keys(abilitiesMap).map(id => document.querySelector(`#${id}`));
const abilitySections = Object.values(abilitiesMap).map(id => document.querySelector(`#${id}`));

// Add event listeners for ability buttons
abilityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent this click from triggering the document click handler
        toggleAbilitySection(button.id);
    });
});

// Close button functionality
document.querySelectorAll('.closing-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the document click handler from firing
        const section = button.closest('.ability-section');
        if (section) section.classList.add('hidden');
    });
});

// Close any open section when clicking outside
document.addEventListener('click', (event) => {
    abilitySections.forEach(section => {
        // Close the section only if it is visible and the click is outside of it
        if (!section.classList.contains('hidden') && !section.contains(event.target)) {
            section.classList.add('hidden');
        }
    });
});


// FUNCTIONS

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

function printSkillSections() {
    const sections = {
        strength: document.querySelector("#strSection"),
        dexterity: document.querySelector("#dexSection"),
        constitution: document.querySelector("#conSection"),
        intelligence: document.querySelector("#intSection"),
        wisdom: document.querySelector("#wisSection"),
        charisma: document.querySelector("#chaSection"),
    };

    console.log("Sections Object:", sections); // Debug: Check if sections are found

    Object.keys(stats.abilities).forEach(ability => {
        const abilityData = stats.abilities[ability];
        const section = sections[ability];

        if (!section) {
            console.warn(`No section found for ${ability}`); // Debug: Missing section
            return;
        }

        console.log(`Updating section for ${ability}`); // Debug: Which section is being updated

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
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



function toggleSectionVisible(buttonId) {
    const targetSectionId = sectionsMap[buttonId];

    sections.forEach(section => {
        if (section.id === targetSectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    console.log(`show ${targetSectionId.replace('-section', '')}`);
}

// Function to toggle the visibility of ability sections
function toggleAbilitySection(buttonId) {
    const targetSectionId = abilitiesMap[buttonId];

    abilitySections.forEach(section => {
        if (section.id === targetSectionId) {
            section.classList.toggle('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}



printTopSection();

printSkillSections();