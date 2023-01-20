let inputField = document.getElementById("input");
let listContainer = document.getElementById("listContainer");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let count = 0;
let selectedElement;

add.addEventListener("click", function() {
    let par = document.createElement("p");
    addItem(par);
});
remove.addEventListener("click", removeSelected);

function addItem(par) {
    count++;
    let item = inputField.value;
    par.setAttribute("data-count", count);
    par.innerText = item;
    listContainer.appendChild(par);
    inputField.value = "";
    par.addEventListener("click", function() {
        selectElement(par);
    });
}

function selectElement(par) {
    selectedElement = par;
    par.style.backgroundColor = "lightgray";
}

function removeSelected() {
    selectedElement.remove();
    selectedElement = null;
    count--;
}
