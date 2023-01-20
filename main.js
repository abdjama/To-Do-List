let inputField = document.getElementById("input");
let listContainer = document.getElementById("listContainer");
let add = document.getElementById("add");
let remove = document.getElementById("remove");

add.addEventListener("click", addItem);

function addItem() {
    let item = inputField.value;
    console.log(item);
    listContainer.innerHTML = item
}