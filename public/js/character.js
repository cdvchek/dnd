const attributeRollButtonEl = document.querySelector('#roll-ability-scores');
const strengthEl = document.querySelector('#Strength');
const dexterityEl = document.querySelector('#Dexterity');
const constitutionEl = document.querySelector('#Constitution');
const intelligenceEl = document.querySelector('#Intelligence');
const wisdomEl = document.querySelector('#Wisdom');
const charismaEl = document.querySelector('#Charisma');

const rollForAbilityScore = () => {
    const initNumbers = [];
    for (let i = 0; i < 4; i++) {
        initNumbers.push(Math.floor(Math.random()*6) + 1);
    }
    const min = Math.min(...initNumbers);
    let sum = 0;
    for (let i = 0; i < initNumbers.length; i++) {
        sum += initNumbers[i];
    }
    return Number(sum - min);
}

const rollAbilityScores = (e) => {
    e.preventDefault();
    strengthEl.value = Number(rollForAbilityScore());
    dexterityEl.value = rollForAbilityScore();
    constitutionEl.value = rollForAbilityScore();
    intelligenceEl.value = rollForAbilityScore();
    wisdomEl.value = rollForAbilityScore();
    charismaEl.value = rollForAbilityScore();
}

attributeRollButtonEl.addEventListener('click',rollAbilityScores);