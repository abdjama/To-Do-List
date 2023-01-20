let inputField = document.getElementById("input");
let listContainer = document.getElementById("listContainer");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let count = 0;


add.addEventListener("click", addItem);

function addItem() {
    count++
    let item = inputField.value;
    let p = document.createElement("p");
    p.setAttribute("count", count)
    p.value = item
    listContainer.innerHTML += `<p>${item}</p>`;
    inputField.value = "";
}

