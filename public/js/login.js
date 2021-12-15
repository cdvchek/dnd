const loginFormEl = document.querySelector('#login-form');
const loginEmailEl = document.querySelector('#login-email');
const loginPasswordEl = document.querySelector('#login-password');
const loginErrorEl = document.querySelector('#login-error');

const login = (e) => {
    e.preventDefault();
    const email = loginEmailEl.value;
    const password = loginPasswordEl.value;
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify({
            email,
            password,
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res);
        if(res.message){
            loginErrorEl.innerHTML = res.message;
            loginPasswordEl.value = "";
            setTimeout(() => {
                loginErrorEl.innerHTML = "";
            },5000)
        } else {
            document.location.replace('/home');
        }
    });
}

loginFormEl.addEventListener('submit',login);
