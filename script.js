// VARIABLES

// Map button IDs to section IDs
const sectionsMap = {
    'skills-btn': 'skills-section',
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















// MY OLD CODE

// // VARIABLES

// // Map button IDs to section IDs
// const sectionsMap = {
//     'skills-btn': 'skills-section',
//     'feats-btn': 'feats-section',
//     'actions-btn': 'actions-section',
//     'inventory-btn': 'inventory-section',
// };


// //EVENTS

// skillsBtn.addEventListener('click', toggleSkillsVisible); //Add Click to Skills Button

// featsBtn.addEventListener('click', toggleFeatsVisible); //Add Click to Skills Button

// actionsBtn.addEventListener('click', toggleActionsVisible); //Add Click to Skills Button

// inventoryBtn.addEventListener('click', toggleInventoryVisible); //Add Click to Skills Button


// // FUNCTIONS

// function toggleSkillsVisible() { 
//     console.log('show skills')
//     if (featsSection.classList.contains('hidden') && actionsSection.classList.contains('hidden') && inventorySection.classList.contains('hidden')) {
//         return;
//     } else {
//         skillsSection.classList.remove('hidden');
//         featsSection.classList.add('hidden');
//         actionsSection.classList.add('hidden');
//         inventorySection.classList.add('hidden');
//     }
// }

// function toggleFeatsVisible() { 
//     console.log('show feats')
//     if (skillsSection.classList.contains('hidden') && actionsSection.classList.contains('hidden') && inventorySection.classList.contains('hidden')) {
//         return;
//     } else {
//         skillsSection.classList.add('hidden');
//         featsSection.classList.remove('hidden');
//         actionsSection.classList.add('hidden');
//         inventorySection.classList.add('hidden');
//     }
// }

// function toggleActionsVisible() { 
//     console.log('show actions')
//     if (skillsSection.classList.contains('hidden') && featsSection.classList.contains('hidden') && inventorySection.classList.contains('hidden')) {
//         return;
//     } else {
//         skillsSection.classList.add('hidden');
//         featsSection.classList.add('hidden');
//         actionsSection.classList.remove('hidden');
//         inventorySection.classList.add('hidden');
//     }
// }

// function toggleInventoryVisible() { 
//     console.log('show inventory')
//     if (skillsSection.classList.contains('hidden') && featsSection.classList.contains('hidden') && actionsSection.classList.contains('hidden')) {
//         return;
//     } else {
//         skillsSection.classList.add('hidden');
//         featsSection.classList.add('hidden');
//         actionsSection.classList.add('hidden');
//         inventorySection.classList.remove('hidden');
//     }

// }