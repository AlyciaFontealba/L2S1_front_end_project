
/* Fonction qui prend en entrée un ID, le paramètre componentId correspond à l'élément HTML qui a cet ID. Affiche la description correspondante tout en masquant les autres descriptions */
function component_item_display(componentId) { 

    /* Sélectionne toutes les balises p avec la classe components_description */
    const componentDescriptions = document.querySelectorAll(".components_description p"); 

    /* Récupère l'ID de l'élément HTML passé en paramètre */
    const selectedId = componentId.id;

    for (let i = 0; i < componentDescriptions.length; i++) {
        const description = componentDescriptions[i];
        description.hidden = description.id !== selectedId;
    }
}