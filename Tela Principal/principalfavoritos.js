// Seleciona os elementos
const cestoBtn = document.getElementById("cestoBtn");
const cestoSidebar = document.getElementById("cestoSidebar");
const closeCesto = document.getElementById("closeCesto");

// Abre a aba do cesto
cestoBtn.addEventListener("click", () => {
    cestoSidebar.classList.add("open");
});

// Fecha a aba do cesto
closeCesto.addEventListener("click", () => {
    cestoSidebar.classList.remove("open");
});

// Fecha a aba ao clicar fora dela
window.addEventListener("click", (event) => {
    if (event.target === cestoSidebar) {
        cestoSidebar.classList.remove("open");
    }
});