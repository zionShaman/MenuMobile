const btnMobile = document.getElementById('btn-mobile'); // cria funçao pra selecionar o botao MENU 

// funçao pra o evento que ativa a const do MENU
function toggleMenu(){
    if(Event.type === 'touchstart') Event.preventDefault(); // resolve o double click do 'touchstart'
    const nav = document.getElementById('nav'); // selecionar o nav do html
    nav.classList.toggle('active');         // adiciona class ao nav   // vs .add .remove    , toggle= adiciona se nao tem, remove se tem
}   

btnMobile.addEventListener('click', toggleMenu); // evento que ativa o botao MENU click
// no mobile esse evento click(addEventListener('click', toggleMenu), emula o evento de touch, mas demora 300ms 
btnMobile.addEventListener('touchstart', toggleMenu); // touchstart cria standad click event after touch event
// menu abriria e fecharia porque evento se repetem..... criar IF in toggleMenu()