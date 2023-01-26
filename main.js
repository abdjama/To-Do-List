let inputField = document.getElementById("input");
let listContainer = document.getElementById("listContainer");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let selectedElement;
let arr = [];

add.addEventListener("click", function() {
    let par = document.createElement("p");
    addItem(par);
});
remove.addEventListener("click", removeSelected);

function addItem(par) {
    let inputValue = inputField.value;
    if ((inputValue.match(/^[ ]+$/i))) {
        console.log("invalid");
        inputField.value = "";
    }
    else if (inputValue == "") {
        // no need to do anything
    }
    else {
        par.innerText = inputValue;
        listContainer.appendChild(par);
        arr.push(par)
        inputField.value = "";
        par.addEventListener("click", function() {
            selectElement(par);
        });
    }
}

function selectElement(par) {
    selectedElement = par;
    arr.forEach(p => {
        if (p == selectedElement && p.style.backgroundColor == "rgb(200, 8, 200)") {
            p.style.backgroundColor = "transparent";
        }
        else if (p == selectedElement && p.style.backgroundColor != "rgb(200, 8, 200)") {
            p.style.backgroundColor = "rgb(200, 8, 200)";
        }
        else {
             p.style.backgroundColor = "transparent";
        }
    })
}

function removeSelected() {
    if (selectedElement) {
        selectedElement.remove();
        selectedElement = null;
    }  
}
