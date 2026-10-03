function showPopup(message){
    document.getElementById("popup-message").innerText=message;
    document.getElementById("popup")
    .classList.remove("hidden");
}
function closePopup(){
    document.getElementById("popup")
    .classList.add("hidden");
}
function validateDetails(){
    let title = document.getElementById("title").value;
    let remail = document.getElementById("emailr").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    if(title === ""){
        showPopup("Title cannot be empty!");
        return;
    }
    if(remail === ""){
        showPopup("Please enter the receiver's email.");
        return;
    }
    if(date === ""){
        showPopup("Date cannot be empty!");
        return;
    }
    if(time === ""){
        showPopup("Please set the time!");
        return;
    }
    window.location.href = "../html/mycapsules.html";
}
