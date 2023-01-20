let inputField = document.getElementById("input");
let listContainer = document.getElementById("listContainer");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let count = 0;

//document.querySelector("p").addEventListener("click", g)

add.addEventListener("click", addItem);
remove.addEventListener("click", removePar)
function addItem() {
    count++
    let item = inputField.value;
    let par = document.createElement("p");
    par.addEventListener("click", removePar)
    par.setAttribute("count", count)
    par.innerText = item
    console.log(par.innerText);
    listContainer.appendChild(par)
    inputField.value = "";
}

function removePar() {
    let pr = this.getAttribute("count")
   
}