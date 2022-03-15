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
    if(currPage == 6) {
        console.log('i ran');
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
        pageBody.children[6].style.display = 'inline';
        currPage = 6;
    } else {
        pageBody.children[currPage].style.display = 'none';
        pageBody.children[currPage - 1].style.display = 'inline';
        currPage--;
    }
}

const backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click',goToPrevPage);

const removeASInc = (e) => {
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
    newRemoveBtn.addEventListener('click',removeASInc);

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

    newRFDiv.append(newRFName);
    newRFDiv.append(newRFNameInput);
    newRFDiv.append(newRFDesc);
    newRFDiv.append(newRFTA);

    RFDiv.append(newRFDiv);
}

const addRacialFeatureBtn = document.querySelector('#arf-btn');
addRacialFeatureBtn.addEventListener('click',addNewRacialFeature);