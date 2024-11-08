// VARIABLES

// Button Variables
const skillsBtn = document.querySelector('#skills-btn'); //Find Skills Button
const featsBtn = document.querySelector('#feats-btn'); //Find Feats Button
const actionsBtn = document.querySelector('#actions-btn'); //Find Actions Button
const inventoryBtn = document.querySelector('#inventory-btn'); //Find Inventory Button

//Section Variables
const skillsSection = document.querySelector('#skills-section'); // Find Skills Section
const featsSection = document.querySelector('#feats-section'); // Find Feats Section
const actionsSection = document.querySelector('#actions-section'); // Find Actions Section
const inventorySection = document.querySelector('#inventory-section'); // Find Inventory Section


//EVENTS

skillsBtn.addEventListener('click', toggleSkillsVisible); //Add Click to Skills Button

featsBtn.addEventListener('click', toggleFeatsVisible); //Add Click to Skills Button

actionsBtn.addEventListener('click', toggleActionsVisible); //Add Click to Skills Button

inventoryBtn.addEventListener('click', toggleInventoryVisible); //Add Click to Skills Button


// FUNCTIONS

function toggleSkillsVisible() { 
    console.log('show skills')
    skillsSection.classList.add('hidden');
}

function toggleFeatsVisible() { 
    console.log('show feats')

}

function toggleActionsVisible() { 
    console.log('show actions')

}

function toggleInventoryVisible() { 
    console.log('show inventory')

}