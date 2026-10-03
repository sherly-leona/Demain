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
    const postcardData =
        JSON.parse(localStorage.getItem("postcardData"));
    const capsule = {
        title: title,
        receiver: remail,
        date: date,
        time: time,
        theme: postcardData.theme,
        message: postcardData.message,
        status: "SEALED"
    };
    let capsules =
        JSON.parse(localStorage.getItem("capsules")) || [];
    capsules.push(capsule);
    localStorage.setItem(
        "capsules",
        JSON.stringify(capsules)
    );
    localStorage.removeItem("postcardData");
    window.location.href = "../html/mycapsules.html";
}