function searching_bar() {
    const textPage = document.querySelector("main").innerText.toLowerCase(); // On récupère le texte de la page et on le met en minuscule pour éviter des problèmes de casse
    const searchValue = document.getElementById("search_input").value.toLowerCase(); // On récupère la valeur entrée par l'utilisateur et on la met aussi en minuscule pour éviter des problèmes de casse
    const searchResult = document.getElementById("search_result"); // Correspond à l'élément qui affichera le résultat
    let cpt = 0; // Compteur pour le mot cherché

    for (let i = 0; i < textPage.length; i++) { // Parcours du texte par indice (caractère par caractère)
        let found = true; // On initialise une variable à la valeur True, qui indique si on a trouvé le mot de l'utilisateur ou pas

        for (let j = 0; j < searchValue.length; j++) { // Parcours du mot cherché carctère par carctère
            if (textPage[i + j] !== searchValue[j]) { // Si la lettre du texte d'indice i+j ne correspond pas à la lettre du mot cherché d'indice j on passe la variable found à false (car on n'a pas trouvé notre mot) et on sort de la boucle en revenant à la boucle précédente. La variable i est donc incrémentée d'1 et les comparaisons vont continuer avec la prochaine lettre du texte
                found = false;
                break;
            }
        }

        // Si en comparant toutes les lettres du mot cherché au texte on n'entre pas dans le if, c'est qu'on a trouvé une correspondance. Le found a donc tjrs la même valeur qu'à son initialisation (True)
        if (found) {
            cpt++; // On peut alors incrémenter notre compteur de 1
        }
    }

    searchResult.textContent = `"${searchValue}" appears ${cpt} times`; // La variable searchResult contient le mot cherché par l'utilisateur et son nombre d'occurence
}

