const gameid = document.querySelector('#data').getAttribute('data-id');

const virBoardEl = document.querySelector('#vir-board');

const junkBoxEl = document.querySelector('#junk-box');
const deleteToken = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    junkBoxEl.append(document.getElementById(data));
}

const allowDrop = (e) => {
    e.preventDefault();
}

const rightBoxEl = document.querySelector('#right-box');
rightBoxEl.setAttribute('ondragover','allowDrop(event)');
rightBoxEl.setAttribute('ondrop','deleteToken(event)');

let oldSiblings = [];
let dropping;
let sideCharacter = false;
const drag = (e) => {
    if (e.target.getAttribute('data-side-character') == "true") {
        e.dataTransfer.setData('text',e.target.id);
        dropping = e.target;
        sideCharacter = true;
    } else {
        e.dataTransfer.setData("text", e.target.id);
        oldSiblings = e.target.parentNode.childNodes;
    }
}

const showCharacterInfo = (e) => {
    e.preventDefault();
    console.log('this code ran');
}

const makeNewToken = (node,nodeid,anchor) => {
    node.id = Math.random() * 10000;
    node.addEventListener('click',showCharacterInfo);
    if (anchor.nodeName === "DIV") {
        anchor.append(node);
    } else {
        anchor.parentNode.append(node);
        const siblings = anchor.parentNode.childNodes;
        siblings.forEach((sibling,i) => {
            if (i !== siblings.length - 1) {
                sibling.style.display = 'none';
            }
        });
    }
}

const moveOldToken = (target,data) => {
    if (target.nodeName === "DIV") {
        target.append(document.getElementById(data));
    } else {
        target.parentNode.append(document.getElementById(data));
        const siblings = target.parentNode.childNodes;
        siblings.forEach((sibling,i) => {
            if (i !== siblings.length - 1) {
                sibling.style.display = 'none';
            }
        });
    }
}

const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    oldSiblings.forEach((child,i) => {
        if (i === oldSiblings.length - 2) {
            child.style.display = 'inline';
        }
    });
    if(sideCharacter){
        const copy = document.getElementById(data).cloneNode(true);
        copy.setAttribute('data-side-character','false');
        makeNewToken(copy,'banana',e.target);
        sideCharacter = false;
        const socketObj = {
            node: copy.id,
            anchor: e.target,
            game_id: gameid,
        }
        socket.emit('c-newToken',socketObj);
    } else {
        moveOldToken(e.target,data);
    }
}

// TODO: set up socket so that when you drop a new token it will be created for everyone in the game.

const makeVirBoard = (sides) => {
    let height;
    for (let i = 0; i < Math.pow(sides,2); i++) {
        const newTile = document.createElement('div');
        newTile.setAttribute('class','tile');
        newTile.setAttribute('id',`div${i}`);
        newTile.setAttribute('ondrop','drop(event)');
        newTile.setAttribute('ondragover','allowDrop(event)');
        newTile.style.width = `${(100/sides)}%`;
        virBoardEl.append(newTile);
        if (i === 0) {
            height = `${newTile.clientWidth}px`;
        }
        newTile.style.height = height;
    }
    const charactersDiv = document.querySelector('#characters');
    const newImg = document.createElement('img');
    newImg.setAttribute('data-side-character','true');
    newImg.setAttribute('id','drag4');
    newImg.setAttribute('src','../images/panda-square-picture.jpeg');
    newImg.setAttribute('draggable','true');
    newImg.setAttribute('ondragstart','drag(event)');
    newImg.setAttribute('width',`${parseInt(height, 10)}`);
    newImg.setAttribute('height',`${parseInt(height, 10)}`);
    charactersDiv.append(newImg);
}
makeVirBoard(15);