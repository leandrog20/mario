var abriu = document.querySelector('.abriu')
var fechou = document.querySelector('.fechou')
abriu.addEventListener('click', abrir)
fechou.addEventListener('click', fechar)

function abrir(){
    fechou.style.width = '50%'
}

function fechar(){
    fechou.style.width = '0px'
}