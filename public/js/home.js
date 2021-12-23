const socket = io.connect();
const joinNotiRoom = () => {
    const email = document.querySelector('#container').getAttribute('data-email');
    const socketObj = {
        email,
    }
    socket.emit('c-joinNotiRoom',socketObj)
}
joinNotiRoom();

const wrapper = async () => {
    const rawSession = await fetch('/sessions')
    const session = await rawSession.json();
    
    const logoutButtonEl = document.querySelector('#logout');
    
    const logout = () => {
        if(confirm("Are you sure you want to logout?")){
            fetch("/api/users/logout").then(()=>{
                window.location.replace('/');
            });
        }
    }
    
    logoutButtonEl.addEventListener('click',logout);
    
    const makeGame = (name,id, isGM) => {
        // Making the new elements
        const newGameDiv = document.createElement('div');
        newGameDiv.setAttribute('class','game-card');
        newGameDiv.setAttribute('onmouseover','onhover(this)');
        newGameDiv.setAttribute('onmouseleave','onleave(this)');
        newGameDiv.setAttribute('data-uid',`${id}`);
        newGameDiv.setAttribute('data-isNew','true');
        if(isGM){
            newGameDiv.setAttribute('data-isgm','true');
        } else {
            newGameDiv.setAttribute('data-isgm','false');
        }
    
        if(isGM){
            const deleteButtonDiv = document.createElement('div');
            deleteButtonDiv.setAttribute('class','delete-game-button-div');
        
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class','delete-game-button');
            deleteButton.setAttribute('data-id',`${id}`);
            deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x x" viewBox="0 0 16 16" data-id=${id}><path data-id=${id} d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`;
            deleteButton.addEventListener('click',deleteGame);

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

    const navbarProfileEl = document.querySelector('#navbar-profile');
    const profileEl = document.querySelector('#profile');
    const openProfile = () => {
        profileEl.style.display = 'inline';
    }

    navbarProfileEl.addEventListener('click',openProfile);

    const closeProfileButtonEl = document.querySelectorAll('.close-profile-btn');

    const closeProfile = () => {
        profileEl.style.display = 'none';
    }

    closeProfileButtonEl.forEach((closeBtn) => {
        closeBtn.addEventListener('click', closeProfile);
    });

    const editUsernameButtonEl = document.querySelector('#edit-username-button-pencil');
    const editUsernameEl = document.querySelectorAll('.edit-username');
    const usernameEl = document.querySelector('#username');

    const editUsername = () => {
        editUsernameEl.forEach((el) => {
            el.style.display = 'inline';
        });
        usernameEl.style.display = 'none';
    }

    editUsernameButtonEl.addEventListener('click',editUsername);

    const saveUsernameButtonEl = document.querySelector('#edit-username-button');
    const saveUsernameInputEl = document.querySelector('#edit-username-input');

    const saveUsername = () => {
        editUsernameEl.forEach((el) => {
            el.style.display = 'none';
        });
        usernameEl.textContent = saveUsernameInputEl.value;
        usernameEl.style.display = 'inline';
        fetch('/api/users/update', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: saveUsernameInputEl.value
            }),
        });
    }

    saveUsernameButtonEl.addEventListener('click',saveUsername);

    const editEmailButtonEl = document.querySelector('#edit-email-button-pencil');
    const editEmailEl = document.querySelectorAll('.edit-email');
    const emailEl = document.querySelector('#email');

    const editEmail = () => {
        editEmailEl.forEach((el) => {
            el.style.display = 'inline';
        });
        emailEl.style.display = 'none';
    }

    editEmailButtonEl.addEventListener('click',editEmail);

    const saveEmailButtonEl = document.querySelector('#edit-email-button');
    const saveEmailInputEl = document.querySelector('#edit-email-input');

    const saveEmail = () => {
        editEmailEl.forEach((el) => {
            el.style.display = 'none';
        });
        emailEl.textContent = saveEmailInputEl.value;
        emailEl.style.display = 'inline';
        fetch('/api/users/update', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: saveEmailInputEl.value
            }),
        });
    }

    saveEmailButtonEl.addEventListener('click',saveEmail);

    const deleteInvElement = (e) => {
        e.target.parentNode.style.display = "none";
    }

    const acceptInviteButtonEl = document.querySelectorAll('.accept-invite-button');

    const acceptInvite = (e) => {
        deleteInvElement(e);
        const game_id = e.target.getAttribute('data-gameid');
        const inv_id = e.target.getAttribute('data-id');
        fetch("/api/usergames/",{
            method:"POST",
            body:JSON.stringify({
                game_id,
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((res) => {
            console.log(res); 
            fetch(`/api/invites/${inv_id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            fetch(`/api/games/${game_id}`).then((res) => {
                return res.json();
            }).then((res) => {
                const gameName = res.name;
                makeGame(gameName,game_id,false);
                deleteInvElement(e);
            });
        });
    }

    acceptInviteButtonEl.forEach((btn) => {
        btn.addEventListener('click', acceptInvite);
    });

    const declineInviteButtonEl = document.querySelectorAll('.decline-invite-button');

    const declineInvite = (e) => {
        const inv_id = e.target.getAttribute('data-id');
        fetch(`/api/invites/${inv_id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            deleteInvElement(e);
        });
    }

    declineInviteButtonEl.forEach((btn) => {
        btn.addEventListener('click', declineInvite);
    });

    const makeInvite = () => {
        const newInvite = document.createElement('li');

        const newAcceptButton = document.createElement('button');
        newAcceptButton.setAttribute('class','accept-invite-button');
        newAcceptButton.setAttribute('data-id',id);
        newAcceptButton.setAttribute('data-gameid',gameid);
        newAcceptButton.textContent = 'Accept';

        const newDeclineButton = document.createElement('button');
        newDeclineButton.setAttribute('class','decline-invite-button');
        newDeclineButton.setAttribute('data-id',id);
        newDeclineButton.setAttribute('data-gameid',gameid);
        newDeclineButton.textContent = 'Decline';

        newInvite.textContent = "You are invited through socket";
        newInvite.append(newAcceptButton);
        newInvite.append(newDeclineButton);
    }

    socket.on('s-invite',(socketObj) => {
        console.log(socketObj);
        // Currently working here... what should be here is the 'makeInvite' function directly above this code
        // but the 'makeInvite' function needs the id of the invite, the id of the game, and some other stuff
        // so the socket object coming in right here should have all those things
        // backtrack with this socket object and then make it have all that information so we can call it here
    });
    
}
wrapper();