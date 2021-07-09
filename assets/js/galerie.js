const photosGalerie = document.getElementById("photos").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.getElementById("page-num");
const maxPhotos = 12;
let index = 1;

const pagination = Math.ceil(photosGalerie.length / maxPhotos); 
/*Calcul du ratio de photos qui sert dans le calcul de showPhotos */

/* Relie les boutons prev et next du HTML et lance les fonctions check() et showPhotos()
Pour le prev l'index diminue 
Pour le next l'index augmente */
prev.addEventListener("click", function(){
    index--;
    check();
    showPhotos();
})
next.addEventListener("click", function(){
    index++;
    check();
    showPhotos();
})

/* Fonction qui permet de désactiver le "prev" / "next" par rapport à l'index 
le disabled est lui aussi défini dans street.scss
classlist vient ajouter cette classe de manière fictive*/
function check() {
    if(index==pagination) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

    if(index == 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
}

/*Cette fonction permet de n'afficher qu'une partie des photos de la galerie (selon l'index)
classlist vient ajouter de manière fictive la classe show ou hide selon index et le maxPhotos(déclaré plus haut) de la Galerie 
Show et hide sont définis dans street.scss*/
function showPhotos() {
    for(let i = 0; i < photosGalerie.length; i++) {
        photosGalerie[i].classList.remove("show");
        photosGalerie[i].classList.add("hide");

        if(i >= (index * maxPhotos) - maxPhotos && i < index * maxPhotos) {
            photosGalerie[i].classList.add("show");
        }

        page.innerHTML = index;
    }
}


window.onload = function(){
    showPhotos();
    check();
};