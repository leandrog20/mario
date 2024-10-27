let modal = document.querySelector(".modal-container")
let icon = document.querySelector(".icon")
let btn = document.querySelector(".btn")
let btnClose = document.querySelector(".btn-close")
let iframe = document.querySelector(".iframe")
let movie = document.querySelector(".movie")
const URL = "https://www.youtube.com/embed/wkn-Gb-Fhac?si=MT557ZvYpNwpPHq6"

btn.addEventListener('mouseover', over)
btn.addEventListener('mouseout', out)
btn.addEventListener('click', openModal)
btnClose.addEventListener("click", closeModal)

function over(){
    icon.style.animation = "bounce infinite .4s"
}

function out(){
    icon.style.animation = "none"
}

function openModal(){
    movie.pause()
    modal.style.display = "flex"
}

function closeModal(){
    movie.play()
    modal.style.display = "none"
    iframe.setAttribute("src", "-")
    iframe.setAttribute("src", URL)
}

