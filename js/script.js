
let icon = document.querySelector(".icon")
let btn = document.querySelector(".btn")

btn.addEventListener('mouseover', over)
btn.addEventListener('mouseout', out)

function over(){
    icon.style.animation = "bounce infinite .5s"
}

function out(){
    icon.style.animation = "none"
}