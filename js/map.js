// Mobile seulement : clic sur "Filtrer les formations" pour déployer les différents filtres
const filterTitle = document.querySelector(".map__title h2");
const filters = document.querySelector(".map__filters");   

filterTitle.onclick = () => {
    if (window.innerWidth < 992) {
        filters.classList.toggle("-active");
    }
}

// Clic sur "Lancer la recherche" => affiche les résultats sans détail
const inputSearch = document.querySelector(".map__filters .input-search");   
const mapResults = document.querySelector(".map__results");   

inputSearch.onclick = () => {
    mapResults.classList.add("-launched");
}

// Clic sur un des résultats de la liste => affiche le détail
const closeBtn = document.getElementById("close-map");   
const results = document.querySelectorAll('.result-title');

results.forEach(result => {
    result.onclick = () => {
    // Fermer tous les accordéons
        results.forEach(a => {
            if (a !== this && a.classList.contains('-active')) {
            a.classList.remove('-active');
            a.nextElementSibling.classList.remove('-display');
            closeBtn.classList.remove("-display");
        }
      });
  
    // Ouvrir l'accordéon au clic
        result.classList.toggle('-active');
        result.nextElementSibling.classList.toggle("-display");
        closeBtn.classList.add("-display");

    // Clic sur le bouton X pour fermer le détail
        closeBtn.onclick = () => {
            closeBtn.classList.remove("-display");
            result.classList.remove("-active");
            result.nextElementSibling.classList.remove("-display");
        }
    };
});