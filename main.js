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
    let inputField = inputField.value;
    if ((inputField.match(/^[ ]+$/i))) {
        console.log("invalid");
    }
    else if (inputField == "") {
        console.log("invaaalid");
    }
    else {
        let item = inputField.value;
        par.setAttribute("data-count", count);
        par.innerText = item;
        arr.push(par)
        console.log(arr);
        listContainer.appendChild(par);
        inputField.value = "";
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
