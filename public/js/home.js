const makeGame = (name) => {
    // Making the new elements
    const newGameDiv = document.createElement('div');
    newGameDiv.setAttribute('class','game-card');

    const gameNameDiv = document.createElement('div');
    gameNameDiv.setAttribute('class','game-name-input-field');

    const gameName = document.createElement('h4');
    gameName.setAttribute('class','game-p');
    gameName.textContent = name;

    const launchGameButtonDiv = document.createElement('div');
    launchGameButtonDiv.setAttribute('class','create-game-button-field');

    const launchGameButton = document.createElement('button');
    launchGameButton.setAttribute('class','launch-game-button');
    launchGameButton.textContent = 'Launch Game';

    // Arranging the new elements

    newGameDiv.append(gameNameDiv);
    newGameDiv.append(launchGameButtonDiv);

    gameNameDiv.append(gameName);

    launchGameButtonDiv.append(launchGameButton);

    // Appending to the page

    const parentContainer = document.querySelector('#container');
    const endChild = document.querySelector('#create-game-div');

    parentContainer.insertBefore(newGameDiv,endChild);
}

const wrapper = async () => {
    const rawSession = await fetch('/sessions')
    const session = await rawSession.json();

    const loadGames = () => {
        fetch('/api/users/allmygames').then((response) => {
            return response.json();
        }).then((res) => {
            for(let i = 0; i < res.Games.length; i++){
                makeGame(res.Games[i].name);
            }
        });
    }
    
    loadGames();

    const logoutButtonEl = document.querySelector('#logout-button');
    
    const logout = () => {
        if(confirm("Are you sure you want to logout?")){
            fetch("/api/users/logout").then(()=>{
                window.location.replace('/');
            });
        }
    }
    
    logoutButtonEl.addEventListener('click',logout);
    
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
        })

        // Adding the new game to the page
        makeGame(name);
    }

    createGameButtonEl.addEventListener('click',createGame);
}
wrapper();