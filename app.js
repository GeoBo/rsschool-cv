window.addEventListener("load", function () {
    PR.prettyPrint();
    const nav = document.querySelector("nav");
    const button = document.getElementById("menu-button");

    const toggleMenu = () => {
        nav.classList.toggle("toggle-menu");
    };

    button.addEventListener("click", toggleMenu);
});
