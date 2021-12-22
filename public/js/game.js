const id = document.querySelector('#data').getAttribute('data-id');
const gameName = document.querySelector('#data').getAttribute('data-name');
const isGM = document.querySelector('#data').getAttribute('data-isgm');

const tabsEl = document.querySelectorAll('.tab');
const allTabsEl = document.querySelectorAll('.tabs-content');

const openTab = (e) => {
    allTabsEl.forEach((tab) => {
        tab.style.display = 'none';
    });

    const openingTab = e.target.getAttribute('data-tab');
    const targetTab = document.querySelector(`#${openingTab}`);
    targetTab.style.display = 'inline';
}

tabsEl.forEach((tab) => {
    tab.addEventListener('click',openTab)
});

if(isGM == 'true'){
    const inviteUserFormEl = document.querySelector('#invite-user-form');
    const inviteUserInputEl = document.querySelector('#invite-user-input');
    const inviteMessageEl = document.querySelector('#invite-message');

    const inviteUser = (e) => {
        e.preventDefault();
        fetch('/api/invites/',{
            method:"POST",
            body:JSON.stringify({
                game_id: id,
                user_email: inviteUserInputEl.value,
                game_name: gameName,
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((res) => {
            if(res.message){
                //TODO: display the error message that no user was found with the email
                inviteMessageEl.setAttribute('data-type','error');
                inviteMessageEl.style.display = "inline";
                inviteMessageEl.textContent = res.message;
                setTimeout(() => {
                    inviteMessageEl.textContent = "";
                    inviteMessageEl.style.display = "none"
                },5000)
            } else {
                inviteMessageEl.setAttribute('data-type','success');
                inviteUserInputEl.value = "";
                inviteMessageEl.style.display = "inline"
                inviteMessageEl.textContent = "Invite Sent";
                setTimeout(() => {
                    inviteMessageEl.textContent = "";
                    inviteMessageEl.style.display = "none"
                },5000)
            }
        });
    }
    
    inviteUserFormEl.addEventListener('submit', inviteUser);
}