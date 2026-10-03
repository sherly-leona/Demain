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
function validateLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email === ""){
        showPopup("Please enter your email!");
        return;
    }
    if(!email.includes('@')){
        showPopup("Please enter relevant email!");
        return;
    }
    if(password === ""){
        showPopup("Please enter your password!");
        return;
    }
    window.location.href="../html/main.html";
}