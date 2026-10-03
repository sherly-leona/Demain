function showPopup(message){
    document.getElementById("popup-message").innerText =
    message;
    document.getElementById("popup")
    .classList.remove("hidden");
}
function closePopup(){

    document.getElementById("popup")
    .classList.add("hidden");
}
function togglepassword(){
    let password = document.getElementById("password");
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
function validateRegister(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(username === ""){
        showPopup("Please enter your username!");
        return;
    }
    if(email === ""){
        showPopup("Please enter your email!");
        return;
    }
    if(!email.includes('@')){
        showPopup("Please enter a valid email!");
        return;
    }
    if(password === ""){
        showPopup("Please enter password!");
        return;
    }
    if(
        !password.includes('@') &&
        !password.includes('#') &&
        !password.includes('*')
    ){
        showPopup("Password must contain @ or # or *");
        return;
    }
    window.location.href = "../html/login.html";
}