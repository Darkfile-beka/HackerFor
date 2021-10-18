let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

//
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
//
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// animated bacgroud

function createBox() {

    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 100;

    span.style.height = 50 + size + 'px';
    span.style.width = 50 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.gradient-baclgroud').appendChild(span);

    setTimeout(() => {
        span.remove();

    }, 3000)


}
setInterval(createBox, 400);