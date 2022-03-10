// Adds functionality to the browser back button
window.history.pushState(null,'',window.location);

const createBtn = document.querySelector('#create-btn');

const goToCreateCharBluep = () => {
    document.location.replace(`/createcharbluep`);
}

createBtn.addEventListener('click',goToCreateCharBluep);