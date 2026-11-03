
function searching_bar() {
    const searchInput = document.getElementById("search_input");
    const searchValue = searchInput.value.toLowerCase();
    const textPage = document.querySelectorAll("h1, h2, h3, p, li, a");

    for (let i = 0; i < textPage.length; i++) {
        const textPageContent = textPage[i].textContent.toLowerCase();
        var cpt = 0;

        if (textPageContent.includes(searchValue)) {
            textPage[i].style.backgroundColor = "yellow";
            cpt += 1;
        }
    }

    console.log("Number of occurrences found: " + cpt);
    
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
