const btnMobile = document.getElementById('btn-mobile'); // cria funçao pra selecionar o botao MENU 

// funçao pra o evento que ativa a const do MENU
function toggleMenu(){
    const nav = document.getElementById('nav'); // selecionar o nav do html
    nav.classList.toggle('active');         // adiciona class ao nav   // vs .add .remove    , toggle= adiciona se nao tem, remove se tem
}   

btnMobile.addEventListener('click', toggleMenu); // evento que ativa o botao MENU click