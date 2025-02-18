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


// Selecionar os botões das abas
const tabCestoBtn = document.getElementById('tabCestoBtn');
const tabFavoritosBtn = document.getElementById('tabFavoritosBtn');

// Selecionar as divs de conteúdo
const cestoContent = document.getElementById('cestoContent');
const favoritosContent = document.getElementById('favoritosContent');

// Função para mostrar a aba do cesto
function mostrarCesto() {
  // Botões
tabCestoBtn.classList.add('active-tab');
tabFavoritosBtn.classList.remove('active-tab');
  // Conteúdo
cestoContent.classList.add('active');
favoritosContent.classList.remove('active');
}

// Função para mostrar a aba dos favoritos
function mostrarFavoritos() {
tabCestoBtn.classList.remove('active-tab');
tabFavoritosBtn.classList.add('active-tab');
cestoContent.classList.remove('active');
favoritosContent.classList.add('active');
}

// Ao clicar nos botões, alternar
tabCestoBtn.addEventListener('click', mostrarCesto);
tabFavoritosBtn.addEventListener('click', mostrarFavoritos);

// Quando a sidebar abre pela primeira vez, assumimos que queremos mostrar o cesto (ou favoritos, tu decides)
mostrarCesto(); // ou mostrarFavoritos();

// Abrir e fechar a sidebar do cesto
const cestoBtn = document.getElementById('cestoBtn');
const cestoSidebar = document.getElementById('cestoSidebar');
const closeCestoBtn = document.getElementById('closeCesto');

cestoBtn.addEventListener('click', function(e) {
e.preventDefault();
  cestoSidebar.classList.add('open');  // Mostra a sidebar
});

closeCestoBtn.addEventListener('click', function() {
  cestoSidebar.classList.remove('open'); // Fecha a sidebar
});
