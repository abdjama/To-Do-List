let inputField = document.getElementById("input");
let listContainer = document.getElementById("listContainer");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let selectedElement;

add.addEventListener("click", function() {
    let par = document.createElement("p");
    addItem(par);
});
remove.addEventListener("click", removeSelected);

function addItem(par) {
    let inputValue = inputField.value;
    if ((inputValue.match(/^[ ]+$/i))) {
        console.log("invalid");
        inputField.innerText = "";
    }
    else if (inputValue == "") {
        console.log("invaaalid");
    }
    else {
        par.innerText = inputValue;
        listContainer.appendChild(par);
        inputField.innerText = "";
        par.addEventListener("click", function() {
            selectElement(par);
        });
    }
   
}

function selectElement(par) {
    selectedElement = par;
    arr.forEach(p => {
        if (p == selectedElement && p.style.backgroundColor == "lightgray") {
            p.style.backgroundColor = "transparent";
        }
        else if (p == selectedElement && p.style.backgroundColor != "lightgray") {
            p.style.backgroundColor = "lightgray";
        }
        else {
             p.style.backgroundColor = "transparent";
        }
    })
}

function removeSelected() {
    selectedElement.remove();
    selectedElement = null;
}
