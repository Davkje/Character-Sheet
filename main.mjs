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

const strSection = document.querySelector('#str-section');
const dexSection = document.querySelector('#dex-section');
const conSection = document.querySelector('#con-section');
const intSection = document.querySelector('#int-section');
const chaSection = document.querySelector('#cha-section');

// Cache buttons and sections
const buttons = Object.keys(sectionsMap).map(id => document.querySelector(`#${id}`));
const sections = Object.values(sectionsMap).map(id => document.querySelector(`#${id}`));

// EVENTS

buttons.forEach(button => {
    button.addEventListener('click', () => toggleSectionVisible(button.id));
});

const abilitiesMap = {
    'str-btn': 'str-section',
    'dex-btn': 'dex-section',
    'con-btn': 'con-section',
    'int-btn': 'int-section',
    'wis-btn': 'wis-section',
    'cha-btn': 'cha-section',
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
    dexSection.innerHTML = `
        <div class="box-header">
            <h3 class="box">Dexterity</h3>
        </div>
        <div class="box">
            <span>Ability Check +${stats.abilities.dexterity.modifier}</span>
        </div>
        <div class="box">
            <span> Saving Throw +${stats.abilities.dexterity.savingThrow.score}</span>
        </div>
        <div class="skill-column">
            <div class="skill-row box">
                <div class="material-icons">radio_button_checked</div>
                <div>Acrobatics</div>
                <div>+4</div>
            </div>
            <div class="skill-row box">
                <div class="material-icons">radio_button_unchecked</div>
                <div>Sleight of Hand</div>
                <div>+2</div>
            </div>
            <div class="skill-row box">
                <div class="material-icons">radio_button_checked</div>
                <div>Stealth</div>
                <div>+2</div>
            </div>
		</div>
		<button name="closing-btn" class="closing-btn material-icons">close</button>
    `;
}


printTopSection();

printSkillSections();