console.log('Hello World')

function submitName(){
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");
    alert("Hello");
    message.innerHTML = "Welcome to the index page, " + userInput.value;
}

document.getElementById("hoverButton").addEventListener("click",messageSent);

function messageSent(){
    alert("Hello");
}