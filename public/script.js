//Seleciona o elemento HTML com a classe .shopping-cart e armazena na variável cart:
//A função document.querySelector() é usada para selecionar o primeiro elemento que corresponde ao seletor CSS fornecido (neste caso, .shopping-cart).
let cart = document.querySelector('.shopping-cart');

//Adiciona um evento de clique ao elemento com o ID #cart:
//Quando o elemento é clicado, a classe active é alternada (toggle()) no elemento cart. Se a classe estiver presente, ela é removida; se não estiver, ela é adicionada. Além disso, a classe active é removida do elemento login.
document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active');
}

//Seleciona o elemento HTML com a classe .login-form e armazena na variável login:
let login = document.querySelector('.login-form');

//Adiciona um evento de clique ao elemento com o ID #login:
//Define um manipulador de evento para o clique no elemento com o ID #login. Quando clicado, a classe active é alternada no elemento login e removida do elemento cart.
document.querySelector('#login').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
}

//Seleciona o elemento HTML com a classe .navbar e armazena na variável navbar:
 let navbar = document.querySelector('.navbar');

//Adiciona um evento de clique ao elemento com o ID #menu:
//Define um manipulador de evento para o clique no elemento com o ID #menu. Quando clicado, a classe active é alternada no elemento navbar, e as classes active são removidas dos elementos cart e login.
 document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active')
    cart.classList.remove('active')
    login.classList.remove('active')
 }

//Remove a classe active de cart, login, e navbar quando a página é rolada:
//Define um manipulador de evento para o evento de rolagem da janela. Quando a página é rolada, a classe active é removida dos elementos cart, login e navbar.
window.onscroll = () => {
    cart.classList.remove('active')
    login.classList.remove('active')
    navbar.classList.remove('active')
}

//Inicializa um swiper para o elemento com a classe .inicio-slider:
//Configura um carrossel (swiper) para o elemento com a classe .inicio-slider, com autoplay, loop, e navegação personalizada.
var swiper = new Swiper(".inicio-slider", {
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    graphCursor:true,
    loop: true,
    conteredSlide:true,
    navigator: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//Inicializa um swiper para o elemento com a classe .menu-slider:
//Configura um carrossel (swiper) para o elemento com a classe .menu-slider, com loop, altura automática, e paginação clicável.
var swiper = new Swiper(".menu-slider", {
    graphCursor:true,
    loop: true,
    autoHeight: true,
    conteredSlide:true,
    spaceBetween:20, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//Seleciona o contêiner .vzl-menu-container e os itens .vzl-menu:
let vzlContainer = document.querySelector('.vzl-menu-container');
let vzlBox = vzlContainer.querySelectorAll('.vzl-menu');

//Adiciona eventos de clique aos elementos .menu .box:
//Para cada elemento .menu .box, adiciona um evento de clique que torna o contêiner vzlContainer visível (display: 'flex') e ativa a classe active nos itens correspondentes.
document.querySelectorAll('.menu .box').forEach(menu =>{
    menu.onclick = () =>{
        vzlContainer.style.display = 'flex';
        let name = menu.getAttribute('data-name');
        vzlBox.forEach(vzl => {
            let target = vzl.getAttribute('data-target')
            if(name == target){
                vzl.classList.add('active')
            }
        });
    };
});

//Adiciona um evento de clique ao elemento com o ID #fechar no contêiner vzlContainer:
//Define um manipulador de evento para fechar o contêiner vzlContainer e remover a classe active de todos os itens vzlBox quando o botão de fechar é clicado.
vzlContainer.querySelector('#fechar').onclick = () =>{
    vzlContainer.style.display = 'none'
    vzlBox.forEach(close =>{
        close.classList.remove('active')
    });
};