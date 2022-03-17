const pageBody = document.querySelector('#page-body');

const cancelBPCreation = () => {
    if(confirm("Pressing 'OK' will disgard this blueprint and it won't be saved.")){
        window.location.replace(`/charblueps`);
    }
}

const cancelBtn = document.querySelector('#cancel-btn');
cancelBtn.addEventListener('click',cancelBPCreation);

let currPage = 0;

const goToNextPage = () => {
    if(currPage == 7) {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[0].style.display = 'inline';
        currPage = 0;
    } else {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[currPage + 1].style.display = 'inline';
        currPage++;
    }
}

const nextBtn = document.querySelector('#next-btn');
nextBtn.addEventListener('click',goToNextPage);

const goToPrevPage = () => {
    if(currPage == 0) {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[7].style.display = 'inline';
        currPage = 7;
    } else {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[currPage - 1].style.display = 'inline';
        currPage--;
    }
}

const backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click',goToPrevPage);

const removeFunctionBtn = (e) => {
    e.target.parentNode.remove();
}

const AAASIDiv = document.querySelector('#aaasi-div');
const addAnotherAbilityScoreIncrease = () => {
    const newDiv = document.createElement('div');

    const newASSelect = document.createElement('select');
    newASSelect.setAttribute('class','as-select');

    const newSTR = document.createElement('option');
    newSTR.value = "strength";
    newSTR.innerText = "Strength";

    const newDEX = document.createElement('option');
    newDEX.value = "dexterity";
    newDEX.innerText = "Dexterity";

    const newCON = document.createElement('option');
    newCON.value = "constitution";
    newCON.innerText = "Constitution";

    const newINT = document.createElement('option');
    newINT.value = "intelligence";
    newINT.innerText = "Intelligence";

    const newWIS = document.createElement('option');
    newWIS.value = "wisdom";
    newWIS.innerText = "Wisdom";

    const newCHA = document.createElement('option');
    newCHA.value = "charisma";
    newCHA.innerText = "Charisma";

    newASSelect.append(newSTR);
    newASSelect.append(newDEX);
    newASSelect.append(newCON);
    newASSelect.append(newINT);
    newASSelect.append(newWIS);
    newASSelect.append(newCHA);

    const newInput = document.createElement('input');
    newInput.type = "number";
    newInput.setAttribute('class','as-input');

    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.setAttribute('class','remove-btn');
    newRemoveBtn.innerText = "Remove";
    newRemoveBtn.addEventListener('click',removeFunctionBtn);

    newDiv.append(newASSelect);
    newDiv.append(newInput);
    newDiv.append(newRemoveBtn);

    AAASIDiv.append(newDiv);
}

const AAASI = document.querySelector('#aaasi-btn');
AAASI.addEventListener('click',addAnotherAbilityScoreIncrease);

const RFDiv = document.querySelector('#rf-div')
const addNewRacialFeature = () => {
    const newRFDiv = document.createElement('div');
    newRFDiv.setAttribute('class','newrf-div');

    const newRFName = document.createElement('h5');
    newRFName.innerText = "Racial Feature Name";

    const newRFNameInput = document.createElement('input');
    newRFNameInput.setAttribute('class','rfname-input')

    const newRFDesc = document.createElement('h5');
    newRFDesc.innerText = "Racial Feature Description";

    const newRFTA = document.createElement('textarea');

    const removeRFBtn = document.createElement('button');
    removeRFBtn.setAttribute('class','remove-btn');
    removeRFBtn.innerText = "Remove";
    removeRFBtn.addEventListener('click',removeFunctionBtn);

    newRFDiv.append(newRFName);
    newRFDiv.append(newRFNameInput);
    newRFDiv.append(newRFDesc);
    newRFDiv.append(newRFTA);
    newRFDiv.append(removeRFBtn);

    RFDiv.append(newRFDiv);
}

const addRacialFeatureBtn = document.querySelector('#arf-btn');
addRacialFeatureBtn.addEventListener('click',addNewRacialFeature);

const CFDiv = document.querySelector('#cf-div')
const addNewClassFeature = () => {
    const newCFDiv = document.createElement('div');
    newCFDiv.setAttribute('class','newcf-div');

    const newCFName = document.createElement('h5');
    newCFName.innerText = "Class Feature Name";

    const newCFNameInput = document.createElement('input');
    newCFNameInput.setAttribute('class','cfname-input')

    const newCFDesc = document.createElement('h5');
    newCFDesc.innerText = "Class Feature Description";

    const newCFTA = document.createElement('textarea');

    const removeCFBtn = document.createElement('button');
    removeCFBtn.setAttribute('class','remove-btn');
    removeCFBtn.innerText = "Remove";
    removeCFBtn.addEventListener('click',removeFunctionBtn);

    newCFDiv.append(newCFName);
    newCFDiv.append(newCFNameInput);
    newCFDiv.append(newCFDesc);
    newCFDiv.append(newCFTA);
    newCFDiv.append(removeCFBtn);

    CFDiv.append(newCFDiv);
}

const addClassFeatureBtn = document.querySelector('#acf-btn');
addClassFeatureBtn.addEventListener('click',addNewClassFeature);

const profsDiv = document.querySelector('#profs-div');
const addProficiency = () => {
    const sepDiv = document.createElement('div');

    const profInput = document.createElement('input');

    const profSelect = document.createElement('select');

    const profOpLangs = document.createElement('option');
    profOpLangs.value = "language";
    profOpLangs.innerText = "Language";

    const profOpTools = document.createElement('option');
    profOpTools.value = "tool";
    profOpTools.innerText = "Tool";

    const profOpWeaps = document.createElement('option');
    profOpWeaps.value = "weapon";
    profOpWeaps.innerText = "Weapon";

    const profOpArmor = document.createElement('option');
    profOpArmor.value = "armor";
    profOpArmor.innerText = "Armor";

    profSelect.append(profOpArmor);
    profSelect.append(profOpLangs);
    profSelect.append(profOpTools);
    profSelect.append(profOpWeaps);

    const removeProfBtn = document.createElement('button');
    removeProfBtn.innerText = "Remove";
    removeProfBtn.setAttribute('class','remove-btn');
    removeProfBtn.addEventListener('click',removeFunctionBtn);

    sepDiv.append(profInput);
    sepDiv.append(profSelect);
    sepDiv.append(removeProfBtn);

    profsDiv.append(sepDiv);
}

const addProfBtn = document.querySelector('#aprof-btn');
addProfBtn.addEventListener('click',addProficiency);

const asOne = document.querySelector('#as-one-in');
const asTwo = document.querySelector('#as-two-in');
const asThree = document.querySelector('#as-three-in');
const asFour = document.querySelector('#as-four-in');
const asFive = document.querySelector('#as-five-in');
const asSix = document.querySelector('#as-six-in');

const rollDice = (n,s) => {
    let total = 0;
    let rolls = [];
    for (let i = 0; i < n; i++) {
        const number = Math.floor(Math.random() * s) + 1;
        total = total + number;
        rolls.push(number);
    }
    return { total: total, rolls: rolls }
}

const removeSmallest = (numbers) => {
    numbers.sort(function(a,b) {
        return a - b;
    });
    numbers.shift();
    return numbers;
}

const addTotal = (numbers) => {
    console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const rollForAS = () => {
    const one = rollDice(4,6);
    const oneTotal = addTotal(removeSmallest(one.rolls));

    asOne.value = oneTotal;

    const two = rollDice(4,6);
    const twoTotal = addTotal(removeSmallest(two.rolls));

    asTwo.value = twoTotal;

    const three = rollDice(4,6);
    const threeTotal = addTotal(removeSmallest(three.rolls));

    asThree.value = threeTotal;

    const four = rollDice(4,6);
    const fourTotal = addTotal(removeSmallest(four.rolls));

    asFour.value = fourTotal;

    const five = rollDice(4,6);
    const fiveTotal = addTotal(removeSmallest(five.rolls));

    asFive.value = fiveTotal;

    const six = rollDice(4,6);
    const sixTotal = addTotal(removeSmallest(six.rolls));

    asSix.value = sixTotal;
}

const asRollBtn = document.querySelector('#as-roll-btn');
asRollBtn.addEventListener('click',rollForAS);