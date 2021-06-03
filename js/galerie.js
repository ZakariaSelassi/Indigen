const photosGalerie = document.getElementById("photos").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.getElementById("page-num");
const maxPhotos = 8;
let index = 1;

const pagination = Math.ceil(photosGalerie.length / maxPhotos);

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

function check() {
    if(index == 1 ) {
        prev.classList.add("disabled");
        console.log(index);
    } else {
        prev.classList.remove("disabled");
        console.log(index);
    }

    if(index==pagination) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

}

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

window.onload = showPhotos();