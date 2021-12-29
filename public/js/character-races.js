const racesSelectEl = document.querySelector('#Races');
const raceDescriptionEl = document.querySelector('#race-description');

const changeRace = () => {
    const raceElements = document.querySelectorAll('.race-element');
    raceElements.forEach(element => element.style.display = "none");
}

const customRaceEl = document.querySelector('#custom-race');

const makeSelect = (anchor,listoptions,options) => {
    const newList = document.createElement('select');
    for (let i = 0; i < listoptions.length; i++) {
        newList.setAttribute(listoptions[i][0],listoptions[i][1]);
    }
    for (let i = 0; i < options.length; i++) {
        const newOption = document.createElement('option');
        newOption.setAttribute('value',options[i][0].split(' ').join('-').toLowerCase());
        newOption.textContent = options[i][0];
        for (let j = 1; j < options[i].length; j++) {
            newOption.setAttribute(options[i][j][0],options[i][j][1]);
            console.log(options[i][j]);
        }
        newList.append(newOption);
    }
    anchor.append(newList);
}

const addNewFeatureList = (list,race) => {
    const nodes = [];
    const newList = document.createElement('ul');
    nodes.push(newList);
    nodes.push([]);
    if (race) {
        newList.setAttribute('class','race-element ' + race);
    } else {
        newList.setAttribute('class','race-element');
    }
    for (let i = 0; i < list.length; i++) {
        const newLI = document.createElement('li');
        nodes[1].push(newLI);
        if (race) {
            newLI.setAttribute('class','race-element ' + race);
        } else {
            newLI.setAttribute('class','race-element');
        }
        const newSpan = document.createElement('span');
        if (race) {
            newSpan.setAttribute('class','race-element bold ' + race);
        } else {
            newSpan.setAttribute('class','race-element bold');
        }
        newSpan.textContent = list[i][0];
        newLI.append(newSpan);
        const newDesc = document.createElement('p');
        if (race) {
            newDesc.setAttribute('class','race-element ' + race);
        } else {
            newDesc.setAttribute('class','race-element');
        }
        newDesc.style.display = 'inline';
        newDesc.textContent = list[i][1];
        newLI.append(newDesc);
        newList.append(newLI);

        customRaceEl.append(newList);
    }
    return (nodes);
}

const changeViewForDragonborn = (e, initial) => {
    const dragonbornElements = document.querySelectorAll('.dragonborn-element');
    dragonbornElements.forEach(element => element.style.display = "none");
    if (initial) {
        const dragonbornTypeEl = document.createElement('h4');
        dragonbornTypeEl.setAttribute('class','race-element dragonborn-element');
        dragonbornTypeEl.textContent = "Standard Dragonborn";
        customRaceEl.append(dragonbornTypeEl);

        addNewFeatureList([['Ability Score Increase:'," Your Strength score increases by 2, and your Charisma score increases by 1."],["Damage Resistance:"," You have resistance to the damage type associated with your ancestry."]],"dragonborn-element");
    } else {
        const dragonbornType = e.target.value.toLowerCase();
        const dragonbornTypeEl = document.createElement('h4');
        dragonbornTypeEl.setAttribute('class','race-element dragonborn-element');
        const dragonbornTypeName = dragonbornType.split('-');
        for (let i = 0; i < dragonbornTypeName.length; i++) {
            dragonbornTypeName[i] = dragonbornTypeName[i].charAt(0).toUpperCase() + dragonbornTypeName[i].slice(1);
        }
        dragonbornTypeEl.textContent = dragonbornTypeName.join(" ");
        customRaceEl.append(dragonbornTypeEl);
        switch(dragonbornType){
            case "standard-dragonborn":
                addNewFeatureList([['Ability Score Increase:',"Your Strength score increases by 2, and your Charisma score increases by 1."],["Damage Resistance:","You have resistance to the damage type associated with your ancestry."]],"dragonborn-element");
            break;
            
            case "draconblood":
                addNewFeatureList([['Ability Score Increase:','Your Intelligence score increases by 2, and your Charisma score increases by 1.'],['Darkvision:',"You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."],['Forceful Presence:',"When you make a Intimidation or Persuasion check, you can do so with advantage once per long rest."]],'dragonborn-element');
            break;
            
            case "ravenite":
                addNewFeatureList([["Ability Score Increase:"," Your Strength score increases by 2, and your Constitution score increases by 1."],["Darkvision:"," You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."],["Vengeful Assault:"," When you take damage from a creature in range of a weapon you are wielding, you can use your reaction to make an attack against that creature. You can do this once per short or long rest."]],"dragonborn-element");
            break;

            case "chromatic-dragon":
                addNewFeatureList([["Ability Score Increase:"," Increase one ability score by 2 and increase a different one by 1, or you increase three different scores by 1."],["Chromatic Ancestry"," You trace your ancestry to a chromatic dragon, granting you a special magical affinity. Choose one type of dragon from the Chromatic Ancestry table. This determines the damage type for your other traits as shown in the table."]],"dragonborn-element");
            break;

            case "gem-dragon":
            break;

            case "metalic-dragon":
            break;
        }
    }
}

const changeViewForRace = (e,initial) => {
    if(initial){
        raceDescriptionEl.textContent = races["dragonborn"].description;
    } else {
        const race = e.target.value;
        raceDescriptionEl.textContent = races[race.toLowerCase()].description;
    }
    let race;
    if (initial) {
        race = "dragonborn";
    } else {
        race = e.target.value.toLowerCase();
    }
    switch(race){

        case "dragonborn":
            changeRace();
            const dragonbornTypeLabelEl = document.createElement('label');
            dragonbornTypeLabelEl.style.display = 'block';
            dragonbornTypeLabelEl.setAttribute('for','dragonborn-type');
            dragonbornTypeLabelEl.setAttribute('class','race-element');
            dragonbornTypeLabelEl.setAttribute('id','dragonborn-type-label');
            dragonbornTypeLabelEl.textContent = 'Choose your Dragonborn Type: ';
            const dragonbornTypeSelectEl = document.createElement('select');

            const standardDragonborn = document.createElement('option');
            standardDragonborn.setAttribute('value','standard-dragonborn');
            standardDragonborn.setAttribute('id','dragonborn-type');
            standardDragonborn.textContent = "Standard Dragonborn";
            dragonbornTypeSelectEl.append(standardDragonborn);
            const draconblood = document.createElement('option');
            draconblood.setAttribute('value','draconblood');
            draconblood.textContent = "Draconblood";
            dragonbornTypeSelectEl.append(draconblood);
            const ravenite = document.createElement('option');
            ravenite.setAttribute('value','ravenite');
            ravenite.textContent = "Ravenite";
            dragonbornTypeSelectEl.append(ravenite);
            const chromaticDragonborn = document.createElement('option');
            chromaticDragonborn.setAttribute('value','chromatic-dragonborn');
            chromaticDragonborn.textContent = "Chromatic Dragonborn";
            dragonbornTypeSelectEl.append(chromaticDragonborn);
            const gemDragonborn = document.createElement('option');
            gemDragonborn.setAttribute('value','gem-dragonborn');
            gemDragonborn.textContent = "Gem Dragonborn";
            dragonbornTypeSelectEl.append(gemDragonborn);
            const metalicDragonborn = document.createElement('option');
            metalicDragonborn.setAttribute('value','metalic-dragonborn');
            metalicDragonborn.textContent = "Metalic Dragonborn";
            dragonbornTypeSelectEl.append(metalicDragonborn);

            dragonbornTypeSelectEl.addEventListener('change',(e) => {
                changeViewForDragonborn(e);
            });

            const dragonbornFeaturesEl = document.createElement('h4');
            dragonbornFeaturesEl.textContent = "Dragonborn Features";
            dragonbornFeaturesEl.setAttribute('class','race-element');    

            customRaceEl.append(dragonbornFeaturesEl);
            const nodes = addNewFeatureList([["Age:"," Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80."],
            ["Alignment:"," Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once."],
            ["Size:"," Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium."],
            ["Speed:"," Your base walking speed is 30 ft."],
            ["Draconic Ancestry:"," You are distantly related to a particular kind of dragon. Choose a type of dragon from the below list; this determines the damage and area of your breath weapon, and the type of resistance you gain."]
            ]);
            makeSelect(nodes[1][nodes[1].length-1],[['class','race-element']],[['Black',['class','race-element'],['data-dragontype','black']],
            ['Blue',['class','race-element'],['data-dragontype','blue']],
            ['Brass',['class','race-element'],['data-dragontype','brass']],
            ['Bronze',['class','race-element'],['data-dragontype','bronze']],
            ['Copper',['class','race-element'],['data-dragontype','copper']],
            ['Gold',['class','race-element'],['data-dragontype','gold']],
            ['Green',['class','race-element'],['data-dragontype','green']],
            ['Red',['class','race-element'],['data-dragontype','red']],
            ['Silver',['class','race-element'],['data-dragontype','silver']],
            ['White',['class','race-element'],['data-dragontype','white']],
            ],'block');
            customRaceEl.append(dragonbornTypeLabelEl);
            customRaceEl.append(dragonbornTypeSelectEl);
            changeViewForDragonborn({},true);
        break;

        case "dwarf":
            changeRace();
        break;

        case "elf":
            changeRace();
        break;

        case "gnome":
            changeRace();
        break;

        case "half-elf":
            changeRace();
        break;

        case "half-orc":
            changeRace();
        break;

        case "halfling":
            changeRace();
        break;

        case "human":
            changeRace();
        break;

        case "tiefling":
            changeRace();
        break;
    }
}
changeViewForRace({},true);

racesSelectEl.addEventListener('change',(e) => {
    changeViewForRace(e);
});