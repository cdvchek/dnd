// Adds functionality to the browser back button
window.history.pushState(null,'',window.location);

// Setting up socket so that a user can recieve invitations
const socket = io.connect();
const joinNotiRoom = () => {
    const email = document.querySelector('#container').getAttribute('data-email');
    const socketObj = {
        email,
    }
    socket.emit('c-joinNotiRoom',socketObj)
}
joinNotiRoom();

// Big wrapper function, everything goes in here
const wrapper = async () => {

    // SESSION SETUP
    // Grabbing session details
    const rawSession = await fetch('/sessions')
    const session = await rawSession.json();

    // MAKING A GAME SETUP
    // Function that makes a new game in the database, but also adds it to the screen
    const makeGame = (name,id, isGM) => {
        // Making the new elements
        const newGameDiv = document.createElement('div');
        newGameDiv.setAttribute('class','game-card');
        newGameDiv.setAttribute('onmouseover','onhover(this)');
        newGameDiv.setAttribute('onmouseleave','onleave(this)');
        newGameDiv.setAttribute('data-uid',`${id}`);
        newGameDiv.setAttribute('data-isNew','true');

        // Adding a data attribute so we can know if they are the gm or not of the game
        if(isGM){
            newGameDiv.setAttribute('data-isgm','true');
        } else {
            newGameDiv.setAttribute('data-isgm','false');
        }
        
        // If a user is the gm, the delete button is added for that game
        if(isGM){
            // Creating the delete button div
            const deleteButtonDiv = document.createElement('div');
            deleteButtonDiv.setAttribute('class','delete-game-button-div');
            
            // Creating the delete button
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class','delete-game-button');
            deleteButton.setAttribute('data-id',`${id}`);
            deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x x" viewBox="0 0 16 16" data-id=${id}><path data-id=${id} d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`;
            deleteButton.addEventListener('click',deleteGame);

            // Appending them to the game card
            newGameDiv.append(deleteButtonDiv);
            deleteButtonDiv.append(deleteButton);
        }
        
        const gameNameDiv = document.createElement('div');
        gameNameDiv.setAttribute('class','game-name-input-field');
    
        const gameName = document.createElement('h4');
        gameName.setAttribute('class','game-p');
        gameName.textContent = name;
    
        const launchGameButtonDiv = document.createElement('div');
        launchGameButtonDiv.setAttribute('class','create-game-button-field');
    
        const launchGameButton = document.createElement('button');
        launchGameButton.setAttribute('data-id',`${id}`);
        launchGameButton.setAttribute('class','launch-game-button');
        launchGameButton.textContent = 'Launch Game';
        launchGameButton.addEventListener('click',launchGame)
    
        // Arranging the new elements
        
        newGameDiv.append(gameNameDiv);
        gameNameDiv.append(gameName);
        
        newGameDiv.append(launchGameButtonDiv);
        launchGameButtonDiv.append(launchGameButton);
    
        // Appending to the page
    
        const parentContainer = document.querySelector('#container');
        const endChild = document.querySelector('#create-game-div');
    
        parentContainer.insertBefore(newGameDiv,endChild);
    }

    const createGameButtonEl = document.querySelector('#create-game-button');
    const gameNameEl = document.querySelector("#game-name-input");
    const gameDescEl = document.querySelector("#game-desc-input");
    
    const createGame = (e) => {
        e.preventDefault();
        const name = gameNameEl.value;
        const description = gameDescEl.value;
        const gm_id = session.user.id;
        
        gameNameEl.value = "";
        gameDescEl.value = "";
        
        fetch("/api/games/",{
            method:"POST",
            body:JSON.stringify({
                name,
                description,
                gm_id,
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response1) => {
            return response1.json();
        }).then((response2) => {
            makeGame(name,response2.id,true)
        });
    }
    
    createGameButtonEl.addEventListener('click',createGame);
    
    const deleteGameButtonEl = document.querySelectorAll('.delete-game-button');
    
    const deleteGame = (e) => {
        e.preventDefault();

        if(confirm("Are you sure you want to delete this game?")){ 
            const gameID = e.target.getAttribute('data-id');
            fetch(`/api/games/${gameID}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            
            const deletedGameEl = document.querySelector(`[data-uid='${gameID}']`);
            deletedGameEl.style.display = 'none';
        }
    }

    deleteGameButtonEl.forEach((dltBtn) => {
        dltBtn.addEventListener('click',deleteGame);
    });

    const launchGameButtonEl = document.querySelectorAll('.launch-game-button');

    const launchGame = (e) => {
        const id = e.target.getAttribute('data-id');
        document.location.replace(`/game${id}`);
    }

    launchGameButtonEl.forEach((btn) => {
        btn.addEventListener('click',launchGame);
    });
}
wrapper();