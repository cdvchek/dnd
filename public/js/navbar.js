const navbarSetup = async () => {
    const rawSession = await fetch('/sessions')
    const session = await rawSession.json();

    // Home
    const homeBtn = document.querySelector('#home-btn');

    const goToHome = () => {
        document.location.replace('/');
    }

    homeBtn.addEventListener('click',goToHome);

    // About
    const aboutBtn = document.querySelector('#about-btn');

    const goToAbout = () => {
        document.location.replace('/about');
    }

    aboutBtn.addEventListener('click',goToAbout);

    // Resources
    const resourcesBtn = document.querySelector('#resources-btn');

    const goToResources = () => {
        document.location.replace('/resources');
    }

    resourcesBtn.addEventListener('click',goToResources);

    // Character Blueprints
    const charbluepsBtn = document.querySelector('#char-blueps-btn');

    const goToCharBlueps = () => {
        document.location.replace(`/charblueps`);
    }

    charbluepsBtn.addEventListener('click',goToCharBlueps);

    // Profile
        // Logout
    const logoutButtonEl = document.querySelector('#logout');

    const logout = () => {
        if(confirm("Are you sure you want to logout?")){
            fetch("/api/users/logout").then(()=>{
                window.location.replace('/');
            });
        }
    }

    logoutButtonEl.addEventListener('click',logout);

        // Opening the profile
    const navbarProfileEl = document.querySelector('#navbar-profile');
    const profileEl = document.querySelector('#profile');
    const openProfile = () => {
        profileEl.style.display = 'inline';
    }

    navbarProfileEl.addEventListener('click',openProfile);

        // Closing the profile
    const closeProfileButtonEl = document.querySelectorAll('.close-profile-btn');

    const closeProfile = () => {
        profileEl.style.display = 'none';
    }

    closeProfileButtonEl.forEach((closeBtn) => {
        closeBtn.addEventListener('click', closeProfile);
    });

        // Editing your username
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

        // Saving your edited username
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

        // Editing your email
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

        // Saving your edited email
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

        // Deleting an invite
    const deleteInvElement = (e) => {
        e.target.parentNode.style.display = "none";
    }

        // Accepting an invite
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

    const inviteUlEl = document.querySelector('#invite-ul');

    const makeInvite = (id,gameid) => {
        const newInvite = document.createElement('li');

        const newAcceptButton = document.createElement('button');
        newAcceptButton.setAttribute('class','accept-invite-button');
        newAcceptButton.setAttribute('data-id',id);
        newAcceptButton.setAttribute('data-gameid',gameid);
        newAcceptButton.textContent = 'Accept';
        newAcceptButton.addEventListener('click',acceptInvite);

        const newDeclineButton = document.createElement('button');
        newDeclineButton.setAttribute('class','decline-invite-button');
        newDeclineButton.setAttribute('data-id',id);
        newDeclineButton.setAttribute('data-gameid',gameid);
        newDeclineButton.textContent = 'Decline';
        newDeclineButton.addEventListener('click',declineInvite);

        newInvite.textContent = "You are invited through socket";
        newInvite.append(newAcceptButton);
        newInvite.append(newDeclineButton);

        inviteUlEl.append(newInvite);
    }

    socket.on('s-invite',(socketObj) => {
        const gameID = socketObj.game_id;
        const inviteID = socketObj.invite_id;
        makeInvite(inviteID,gameID);
    });
    
    const ppFileInputEl = document.querySelector('#profile-picture-input');
    const ppCanvasEl = document.querySelector('#profile-picture');
    
    ppFileInputEl.addEventListener('change', (e) => {
        e.preventDefault();
        const ctx = ppCanvasEl.getContext('2d');
        const img = document.createElement('img');
        img.src = URL.createObjectURL(e.target.files[0]);
        ctx.drawImage(img, 100, 100);
    });

    const notModal = document.querySelector('#not-modal');

    const closeModal = (e) => {
        const modals = document.querySelectorAll('.mymodal');
        console.log(modals);
        modals.forEach(modal => modal.style.display = 'none');
        notModal.setAttribute('style','filter: none;');
        e.target.removeEventListener('click',closeModal);
    }

    const openModal = (e) => {
        e.stopPropagation();
        const modalId = e.target.getAttribute('data-modalid');
        const modal = document.querySelector(`#${modalId}`);
        modal.setAttribute('style','display: inline; position: absolute; left: 20%; top: 5%;');
        notModal.setAttribute('style','filter: brightness(0.5) blur(5px);');
        setTimeout(()=>{
            notModal.addEventListener('click',closeModal);
        },100);
    }

    const ppChangeBtnEl = document.querySelector('#pp-change-btn');

    ppChangeBtnEl.addEventListener('click', openModal);
}
navbarSetup();