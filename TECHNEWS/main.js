/*querySelector -> Selecciona un elemento, entre () se indica si queremos que seleccione un elemento que tenga alguna clase.
addEventListener -> agrega una accion que ocurra cuando sucede un evento indicado.
classList -> Permite agregar una clase.
toggle -> permite agregar o quitar de acuerdo si ya estaba o no el objeto en cuestión (como una clase).
*/

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
