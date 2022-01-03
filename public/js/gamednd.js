const virBoardEl = document.querySelector('#vir-board');

const allowDrop = (e) => {
    e.preventDefault();
}
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
  
const drop = (e) => {
    e.preventDefault();
    if (dropping) {
        dropping.setAttribute('data-side-character','false');
    }
    const data = e.dataTransfer.getData("text");
    oldSiblings.forEach((child,i) => {
        if (i === oldSiblings.length - 2) {
            child.style.display = 'inline';
        }
    });
    if(sideCharacter){
        const copy = document.getElementById(data).cloneNode(true);
        copy.id = Math.random()*100000;
        e.target.append(copy);
        sideCharacter = false;
    } else if(e.target.nodeName === "DIV"){
        e.target.append(document.getElementById(data));
    } else {
        e.target.parentNode.append(document.getElementById(data));
        const siblings = e.target.parentNode.childNodes;
        siblings.forEach((sibling,i) => {
            if (i !== siblings.length - 1) {
                sibling.style.display = 'none';
            }
        });
    }
}

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
            const newImg = document.createElement('img');
            newImg.setAttribute('id','drag0');
            newImg.setAttribute('src','../images/panda-square-picture.jpeg');
            newImg.setAttribute('draggable','true');
            newImg.setAttribute('ondragstart','drag(event)');
            newImg.setAttribute('width',`${parseInt(height, 10)}`);
            newImg.setAttribute('height',`${parseInt(height, 10)}`);
            newTile.append(newImg);
        }
        if (i === 1) {
            const newImg = document.createElement('img');
            newImg.setAttribute('id','drag1');
            newImg.setAttribute('src','../images/panda-square-picture.jpeg');
            newImg.setAttribute('draggable','true');
            newImg.setAttribute('ondragstart','drag(event)');
            newImg.setAttribute('width',`${parseInt(height, 10)}`);
            newImg.setAttribute('height',`${parseInt(height, 10)}`);
            newTile.append(newImg);
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