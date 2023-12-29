let inputs = document.getElementById("inp") 
let todoText = document.getElementById("todo-text")
function add() {
    if (inputs.value == "") {
        alert("Please enter anything first")
    } else {
        let newElm = document.createElement("ul")
        newElm.innerHTML =`${inputs.value} <i class="fa-solid fa-trash"></i>`;  
        todoText.appendChild(newElm);
        inputs.value = "";
        newElm.querySelector("i").addEventListener("click", remove);
        function remove() {
            newElm.remove();
        }
    }
}