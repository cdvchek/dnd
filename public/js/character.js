// Page Controll
const sections = [
    "#race",
    "#class",
    "#ability-scores",
    "#character-traits",
    "#background",
];

const turnEverythingOff = () => {
    for (let i = 0; i < sections.length; i++) {
        const thing = document.querySelector(sections[i]);
        thing.style.display = 'none';
    }
}
turnEverythingOff();

const nextButtonEls = document.querySelectorAll('.next');
nextButtonEls.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const next = btn.getAttribute('data-next');
        const current = btn.getAttribute('data-current');
        changeView(next,current);
    });
});
const backButtonEls = document.querySelectorAll('.back');
backButtonEls.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        e.preventDefault();
        const back = btn.getAttribute('data-back');
        const current = btn.getAttribute('data-current');
        changeView(back,current);
    });
});

const changeView = (on,off) => {
    if (on) {
        const onEl = document.querySelector(on);
        onEl.style.display = 'inline';
    }
    if (off) {
        const offEl = document.querySelector(off);
        offEl.style.display = 'none';
    }
}
changeView("#race",false);

// Rolling for ability-scores
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

// Dealing with starting equipment
const startingEquipmentClassUlEl = document.querySelector('#Starting-Equipment-Class');
const startingEquipmentUlEl = document.querySelector('#Starting-Equipment-Background');
const classInputEl = document.querySelector('#Classes');
const backgroundInputEl = document.querySelector('#Backgrounds');

const addStartingEquipment = (equipment,type) => {
    if(typeof equipment === "string"){
        // This code is for the normal equipment that doesnt have a choice or isnt multiple
        const newEquipment = document.createElement('li');
        newEquipment.textContent = equipment;
        if(type === "background"){
            startingEquipmentUlEl.append(newEquipment);
        } else {
            startingEquipmentClassUlEl.append(newEquipment);
        }
    } else if(typeof equipment === "object"){
        if(equipment.name){
            // This code is for when there is a multiple of a starting equipment (5 sticks of incense or 15gp)
            const newMultipleEquipment = document.createElement('li');
            
            const newMultipleLabel = document.createElement('label');
            newMultipleLabel.textContent = `${equipment.amount} ${equipment.name}`;

            newMultipleEquipment.append(newMultipleLabel);

            if(type === "background"){
                startingEquipmentUlEl.append(newMultipleEquipment);
            } else {
                startingEquipmentClassUlEl.append(newMultipleEquipment);
            }
        } else {
            // This code is for if there is a choice in starting equipment
            const newChoiceEquipment = document.createElement('li');

            const newChoiceSelection = document.createElement('select');

            newChoiceEquipment.append(newChoiceSelection);
            for (let i = 0; i < equipment.length; i++) {
                if(typeof equipment[i] === "string"){
                    const newChoice = document.createElement('option');
                    newChoice.setAttribute('value',equipment[i]);
                    newChoice.textContent = equipment[i];
                    newChoiceSelection.append(newChoice);
                } else if(equipment[i].name){
                    const newMultipleChoice = document.createElement('option');
                    newMultipleChoice.setAttribute('value',`${equipment[i].amount} ${equipment[i].name}`);
                    newMultipleChoice.textContent = `${equipment[i].amount} ${equipment[i].name}`;
                    newChoiceSelection.append(newMultipleChoice);
                } else {
                    const choiceInChoice = document.createElement('option');
                    choiceInChoice.setAttribute('value',`${equipment[i][0]},${i}`);
                    choiceInChoice.textContent = equipment[i][0];
                    newChoiceSelection.append(choiceInChoice);

                    for (let j = 1; j < equipment[i].length; j++) {
                        const newChoicesInChoice = document.createElement('select');
                        if (j == 1) {
                            newChoicesInChoice.style.display = 'block';
                        }
                        newChoicesInChoice.setAttribute('data-id',i);
                        if(i != 0){
                            newChoicesInChoice.style.display = 'none';
                        }
                        for (let k = 0; k < equipment[i][j].length; k++) {
                            const newChoicesInChoiceOption = document.createElement('option');
                            newChoicesInChoiceOption.setAttribute('value',equipment[i][j][k]);
                            newChoicesInChoiceOption.textContent = equipment[i][j][k];
                            newChoicesInChoice.append(newChoicesInChoiceOption);
                        }
                        newChoiceEquipment.append(newChoicesInChoice);
                    }

                    newChoiceSelection.addEventListener('change',(e) => {
                        if (e.target.value.split(',').length > 1){
                            e.target.parentNode.childNodes.forEach((child, j) => {
                                if(j > 0){
                                    if(child.getAttribute('data-id') == e.target.value.split(',')[1]){
                                        child.style.display = 'block'
                                    } else {
                                        child.style.display = 'none';
                                    }
                                }
                            });
                        } else {
                            e.target.parentNode.childNodes.forEach((child, j) => {
                                if(j > 0){
                                    child.style.display = 'none';
                                }
                            });
                        }
                    });
                }
            }
            if(type === "background"){
                startingEquipmentUlEl.append(newChoiceEquipment);
            } else {
                startingEquipmentClassUlEl.append(newChoiceEquipment);
            }
        }
    }
}

const findStartingEquipmentClss = (e,initial) => {
    if(initial){
        for (let i = 0; i < classes['barbarian'].equipment.length; i++) {
            addStartingEquipment(classes['barbarian'].equipment[i],"class");
        }
    } else {
        startingEquipmentClassUlEl.textContent = "";
        const myClass = e.target.value.split(' ').join('-').toLowerCase();
        for (let i = 0; i < classes[myClass].equipment.length; i++) {
            addStartingEquipment(classes[myClass].equipment[i],"class");
        }
    }
}
findStartingEquipmentClss({},true);

const findStartingEquipmentBckgrnd = (e,initial) => {
    if(initial){
        for (let i = 0; i < backgrounds['acolyte'].equipment.length; i++) {
            addStartingEquipment(backgrounds['acolyte'].equipment[i],"background");
        }
    } else {
        startingEquipmentUlEl.textContent = "";
        const background = e.target.value.split(' ').join('-').toLowerCase();
        for (let i = 0; i < backgrounds[background].equipment.length; i++) {
            addStartingEquipment(backgrounds[background].equipment[i],"background");
        }
    }
}
findStartingEquipmentBckgrnd({},true);

// This changes the span so that the user knows what class and background the starting equipment is coming from
const classOnPage = document.querySelector('#class-equipment-span');
const backgroundOnPage = document.querySelector('#background-equipment-span');
const changeCBOnPage = (e, choice) => {
    if (choice === "class") {
        classOnPage.textContent = e.target.value;
    }
    if (choice === "background") {
        backgroundOnPage.textContent = e.target.value;
    }
}

classInputEl.addEventListener('change',(e) => {
    findStartingEquipmentClss(e);
    changeCBOnPage(e,"class");
});

backgroundInputEl.addEventListener('change',(e) => {
    findStartingEquipmentBckgrnd(e);
    changeCBOnPage(e,"background");
});