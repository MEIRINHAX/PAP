// script.js

// Função para abrir o modal de login
document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('iniciarSessao');
    if (userIcon) {
        userIcon.addEventListener('click', () => {
            window.location.href = 'login-registrar.html';
        });
    }
});


// Função para abrir o carrinho de compras
const cartIcon = document.querySelector('.cesto');
cartIcon.addEventListener('click', () => {
    // alert('Abrir o Cesto de Compras');
});

// Ação no botão do banner
function explorar() {
    alert("Explore o site agora!");
    // Redirecione para uma seção
    window.location.href = "#categorias";
}

document.addEventListener("DOMContentLoaded", function () {
    const cestoBtn = document.getElementById("cestoBtn");
    const cestoSidebar = document.getElementById("cestoSidebar");
    const closeCesto = document.getElementById("closeCesto");

    // Função para abrir o cesto
    cestoBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página ao clicar no link
        cestoSidebar.style.right = "0"; // Move a sidebar para dentro da tela
    });

    // Função para fechar o cesto
    closeCesto.addEventListener("click", function () {
        cestoSidebar.style.right = "-100%"; // Move a sidebar para fora da tela
    });
});

