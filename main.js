const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
const userNameValue = usernameInput.value;
const PasswordValue = passwordInput.value;
 let ifSendData = true;


  
   if (userNameValue.length === 0 || userNameValue.indexOf(".") === -1 || userNameValue.indexOf("@") === -1) {
        usernameMsg.innerText = "Please inter a valid Email!"   
          ifSendData =false;
}
  if (PasswordValue.length === 0) {
    passwordMsg.innerText = "Please inter your password "
}else if (PasswordValue.length <= 4 ){
    passwordMsg.innerText = "Password is too short";
    ifSendData = false;
}else{
    passwordMsg.innerText = " ";
    usernameMsg.innerText = " ";
}

if (ifSendData) {
    const body = JSON.stringify({
        username: userNameValue,
        password: PasswordValue,
    })
    const headers ={
        "content-type" : "appliction/jason"
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: body,
        headers: headers
    })
        .then(response => {
            if(response.ok) {
                sigininMsg.innerText = "You signed in successfully"
            }
        })
}
}




// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if(!usernameInput.value.match(mailformat))
//   {
//     alert("Valid email address!");
//    }