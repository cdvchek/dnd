const logoutButtonEl = document.querySelector('#logout-button');

const logout = () => {
    fetch("/api/users/logout").then(()=>{
        window.location.replace('/');
    });
}

logoutButtonEl.addEventListener('click',logout);