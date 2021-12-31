const virBoardEl = document.querySelector('#vir-board');

const allowDrop = (e) => {
    e.preventDefault();
}
  
const drag = (e) => {
    e.dataTransfer.setData("text", ev.target.id);
}
  
const drop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}

const makeVirBoard = (sides) => {
    for (let i = 0; i < sides; i++) {
        const newTile = document.createElement('div');
        newTile.setAttribute('class','tile');
        newTile.setAttribute('id',`div${i}`);
        newTile.setAttribute('ondrop','drop(event)');
        newTile.setAttribute('ondragover','allowDrop(event)');
    }
}

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>