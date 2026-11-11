
function searching_bar() {
    const textPage = document.querySelector("main").innerText.toLowerCase();
    const searchValue = document.getElementById("search_input").value.toLowerCase();
    const searchResult = document.getElementById("search_result");
    let word = "";
    let count = 0;

    for (let i = 0; i <= textPage.length; i++) {
        if (i === textPage.length || textPage[i] === " " || textPage[i] === "\n" || textPage[i] === "\t") {
            if (word === searchValue && word !== "") {
                count++;
            }
            word = "";
        } else {
            word += textPage[i];
        }
    }

    searchResult.textContent = "Number of occurrences found: " + count;
}

function component_item_display(componentId) {
    const componentDescriptions = document.querySelectorAll(".components_description div");

    for (let i = 0; i < componentDescriptions.length; i++) {
        componentDescriptions[i].hidden = componentDescriptions[i].id !== componentId;
    }
}

function add_description(event) {
    event.preventDefault();

    const element = document.getElementById("element_form").value;
    const component = document.getElementById("component_form").value;
    const color = document.getElementById("color_form").value;
    const option = document.getElementById("option_form").value; 
    const message = document.getElementById("message").value;

    document.getElementById(component).innerHTML += `<${element} style="color: ${color}; ${option}">${message}</${element}>`;
}

window.addEventListener("pageshow", function () {
    document.querySelector(".add_description_form form").reset();
});
