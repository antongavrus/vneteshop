let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');


menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

close.addEventListener('click', function(){
    close.classList.toggle('active');
    menu.classList.toggle('active');
})

