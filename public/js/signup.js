const signupFormEl = document.querySelector("#signup-form");
const signupEmailEl = document.querySelector("#signup-email");
const signupUsernameEl = document.querySelector("#signup-username");
const signupPasswordEl = document.querySelector("#signup-password");
const signupPasswordConfirmEl = document.querySelector("#signup-password-confirm");
const signupErrorEl = document.querySelector("#signup-error");

const signup = (e) => {
    e.preventDefault();

    const password = signupPasswordEl.value;
    const passwordConfirm = signupPasswordConfirmEl.value;

    if(password === passwordConfirm){
        const username = signupUsernameEl.value;
        const email = signupEmailEl.value;

        fetch("/api/users/signup",{
            method:"POST",
            body:JSON.stringify({
                username,
                email,
                password,
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {
            if(res.message){
                signupErrorEl.innerHTML = res.message;
                signupPasswordEl.value = "";
                signupPasswordConfirmEl.value = "";
                setTimeout(() => {
                    loginErrorEl.innerHTML = "";
                },5000)
            } else {
                document.location = '/';
            }
        });

    } else {
        signupErrorEl.innerHTML = res.message;
        signupPasswordEl.value = "";
        signupPasswordConfirmEl.value = "";
        setTimeout(() => {
            loginErrorEl.innerHTML = "";
        },5000)
    }
}

signupFormEl.addEventListener('submit', signup)