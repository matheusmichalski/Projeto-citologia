//Lista Header

function mostrarLista() {
    let lista = document.getElementById("minhaLista");
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

// Lista Referencias
function mostrarReferencias() {
    let lista = document.getElementById("minhasReferencias");
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

// Animação header

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

//Pop Up
const citologiaBtn = document.getElementById('citologiaBtn');
const citologiaPopup = document.getElementById('citologiaPopup');
const closeBtn = document.querySelector('.close');

citologiaBtn.onclick = function () {
    citologiaPopup.style.display = 'block';
}

closeBtn.onclick = function () {
    citologiaPopup.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === citologiaPopup) {
        citologiaPopup.style.display = 'none';
    }
}

