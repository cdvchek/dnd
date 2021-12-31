// TODO: Make a function that accepts an array of select nodes and makes them unique in that they each dynamically remove and add options to make sure they can't have the same option.

const decodeString = (string) => {
    const stringArr = string.split('-')
    for (let i = 0; i < stringArr.length; i++) {
        if(stringArr[i].includes('zz')){
            stringArr[i] = stringArr[i].replaceAll('zz','');
            stringArr[i] = stringArr[i].toUpperCase();
        }
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }
    const stringName = stringArr.join(' ');
    return stringName;
}

const racesSelect = document.querySelector('#Races');
const raceDiv = document.querySelector("#race");
const racesList = Object.entries(races);

racesList.forEach((race,i) => {
    // Creating an option for the user to select each race
    const newRaceOption = document.createElement('option');
    newRaceOption.value = race[0];
    newRaceOption.textContent = decodeString(race[0]);
    racesSelect.append(newRaceOption);

    //Create a div for each race
    const newRaceDiv = document.createElement('div');
    newRaceDiv.setAttribute('class',`${race[0]} race-element`);
    raceDiv.append(newRaceDiv);
    if(i !== 0){
        newRaceDiv.style.display = 'none';
    }

    // Creating the description for each race
    const newRaceDesc = document.createElement('p');
    newRaceDesc.textContent = race[1].description;
    newRaceDiv.append(newRaceDesc);

    // Creating the Subrace Select & Subrace Lists
    const newSubraceSelectLabel = document.createElement('label');
    newSubraceSelectLabel.textContent = "Choose your subrace:"
    newRaceDiv.append(newSubraceSelectLabel);
    const newSubraceSelect = document.createElement('select');
    newSubraceSelect.addEventListener('change',(e) =>{
        const offSubraces = document.querySelectorAll('.subrace-element');
        offSubraces.forEach(element => element.style.display = 'none');
        const onSubrace = document.querySelector(`.${e.target.value}`);
        onSubrace.style.display = 'inline';
    });
    newSubraceSelect.setAttribute('class','subrace-select');
    newRaceDiv.append(newSubraceSelect);

    let subraces;
    if (race[1].subraces) {
        subraces = Object.entries(race[1].subraces)
        subraces.forEach((subrace,i) => {
            // Creating the option for each subrace
            const newSubraceOption = document.createElement('option');
            newSubraceOption.value = subrace[0];
            newSubraceOption.textContent = decodeString(subrace[0]);
            newSubraceSelect.append(newSubraceOption);

            // Creating each subrace div
            const newSubraceDiv = document.createElement('div');
            if (i === 0) {
                newSubraceDiv.setAttribute('class',`subrace-element ${subrace[0]} ${race[0]}-starting`);
            } else {
                newSubraceDiv.setAttribute('class',`subrace-element ${subrace[0]} other`);
            }
            newRaceDiv.append(newSubraceDiv);

            // Creating each subrace title
            const newSubraceTitle = document.createElement('h4');
            newSubraceTitle.textContent = decodeString(subrace[0]);
            newSubraceDiv.append(newSubraceTitle);

            // Creating the subrace features list
            const newUL = document.createElement('ul');
            
            const subraceFeatures = Object.entries(subrace[1]);
            subraceFeatures.forEach((subraceFeature) => {
                if (subraceFeature[0] == "description") {
                    const newDescP = document.createElement('p');
                    newDescP.textContent = subraceFeature[1];
                    newSubraceDiv.append(newDescP);
                } else {
                    const newLI = document.createElement('li');
                    const newSpan = document.createElement('span');
                    newSpan.setAttribute('class','bold');
                    newSpan.textContent = decodeString(subraceFeature[0]);
                    newLI.append(newSpan);
                    if (typeof subraceFeature[1] === "object") {
                        const newP = document.createElement('p');
                        newP.setAttribute('class','inline');
                        newP.textContent = subraceFeature[1].description;
                        newLI.append(newP)
                        const newSelect = document.createElement('select');
                        subraceFeature[1].choice.forEach((choice,k) => {
                            const newOption = document.createElement('option');
                            newOption.value = `${choice},key${k+1}`;
                            newOption.textContent = choice;
                            newSelect.append(newOption);
                        });
                        newLI.append(newSelect);
                        if (subraceFeature[1]["choice-result"]){
                            newSelect.addEventListener('change',(e) => {
                                console.log('i ran');
                                const offSelects = document.querySelectorAll('.race-choice-in-choice');
                                offSelects.forEach(element => element.style.display = 'none');
                                const dataID = e.target.value.split(',')[1];
                                const onSelects = document.querySelectorAll(`.${dataID}`);
                                onSelects.forEach(element => element.style.display = 'block');
                            });
                            const selects = Object.entries(subraceFeature[1]["choice-result"])
                            selects.forEach((select,l) => {
                                if (select[1][0] === "unique") {
                                    for (let j = 1; j < select[1].length; j++) {
                                        const newerSelect = document.createElement('select');
                                        newerSelect.setAttribute('class',`race-choice-in-choice key${l+1}`);

                                        const newerOptions = select[1][j];
                                        newerOptions.forEach((newerOption) => {
                                            const myOption = document.createElement('option');
                                            myOption.value = newerOption;
                                            myOption.textContent = newerOption;
                                            newerSelect.append(myOption);
                                        });
                                        newLI.append(newerSelect);
                                    }
                                } else {
                                    for (let j = 0; j < select[1].length; j++) {
                                        const newerSelect = document.createElement('select');
                                        newerSelect.setAttribute('class',`race-choice-in-choice key${l+1}`);

                                        const newerOptions = select[1][j];
                                        newerOptions.forEach((newerOption) => {
                                            const myOption = document.createElement('option');
                                            myOption.value = newerOption;
                                            myOption.textContent = newerOption;
                                            newerSelect.append(myOption);
                                        });
                                        newLI.append(newerSelect);
                                    }
                                }
                            });
                            newSelect.addEventListener('change',() => {

                            });
                        }
                    } else {
                        const newP = document.createElement('p');
                        newP.setAttribute('class','inline');
                        newP.textContent = subraceFeature[1];
                        newLI.append(newP);
                    }
                    newUL.append(newLI);
                }
            });
            newSubraceDiv.append(newUL);
        });
    }
});

const raceSpan = document.querySelector('#race-span');
racesSelect.addEventListener('change',(e) => {
    // Change the race span
    raceSpan.textContent = decodeString(e.target.value);

    // Grab all race divs and turn them all off
    const allRaceDivs = document.querySelectorAll('.race-element');

    allRaceDivs.forEach((div) => {
        div.style.display = "none";
    });
    // Turn on the correct race div
    const onRace = document.querySelector(`.${e.target.value}`);

    onRace.style.display = 'inline';

    // Only show the starting subrace
    const onSubrace = document.querySelector(`.${e.target.value}-starting`);
    onSubrace.style.display = 'inline';

    const offSubraces = document.querySelectorAll(`.other`);
    offSubraces.forEach(subrace => subrace.style.display = 'none');

    // TODO: Set the subrace back to the standard one because that is the subrace showing

});

const onlyShowStartingSubrace = () => {
    const offSubraces = document.querySelectorAll(`.other`);
    offSubraces.forEach(subrace => subrace.style.display = 'none');
}
onlyShowStartingSubrace();