// Write your code here!
const main = document.querySelector("#main");
main.remove();

let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader = document.querySelector("h1");
newHeader.id = "victory";
newHeader.textContent = 'Zack is the champion'
