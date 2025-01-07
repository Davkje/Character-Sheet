// VARIABLES

// Map button IDs to section IDs
const sectionsMap = {
    'feats-btn': 'feats-section',
    'actions-btn': 'actions-section',
    'inventory-btn': 'inventory-section',
};

// Cache buttons and sections
const buttons = Object.keys(sectionsMap).map(id => document.querySelector(`#${id}`));
const sections = Object.values(sectionsMap).map(id => document.querySelector(`#${id}`));

// EVENTS

buttons.forEach(button => {
    button.addEventListener('click', () => toggleSectionVisible(button.id));
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

//

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