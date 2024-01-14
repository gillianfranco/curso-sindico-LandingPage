document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menuIcon");
    var navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function() {
        // Alternar a classe 'responsive' para mostrar ou ocultar os links da barra de navegação
        navbar.classList.toggle("responsive");
    });
});