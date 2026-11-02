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
    const message = document.getElementById("message").value;

    document.getElementById(component).innerHTML += `<${element} style="color: ${color};">${message}</${element}>`;
}

window.addEventListener("pageshow", function () {
    document.querySelector(".add_description_form form").reset();
});
