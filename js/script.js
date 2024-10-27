let modal = document.querySelector(".modal-container")
let icon = document.querySelector(".icon")
let btn = document.querySelector(".btn")
let btnClose = document.querySelector(".btn-close")

btn.addEventListener('mouseover', over)
btn.addEventListener('mouseout', out)
btn.addEventListener('click', openModal)
btnClose.addEventListener("click", closeModal)

function over(){
    icon.style.animation = "bounce infinite .5s"
}

function out(){
    icon.style.animation = "none"
}

function openModal(){
    modal.style.display = "flex"
}

function closeModal(){
    modal.style.display = "none"
}

