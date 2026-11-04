const message = document.getElementById("message");
const button = document.getElementById("changeBtn");

function changeMessage() {
    message.textContent = "Hello there!";
}

button.addEventListener("click", changeMessage);
