let text = document.querySelector("#text");
let bird1 = document.querySelector("#bird1");
let bird2 = document.querySelector("#bird2");
let btn = document.querySelector("#btn");
let rocks = document.querySelector("#rocks");
let forest = document.querySelector("#forest");
let header = document.querySelector("#header");
window.addEventListener("scroll" ,()=>{
    let scrolling = window.scrollY ; 
    text.style.top = 50 + scrolling * -0.5 + "%"
    bird1.style.top =  scrolling * -1.5 + "px"
    bird1.style.left =  scrolling * 2 + "px"
    bird2.style.top = scrolling * -1.5 + "px"
    bird1.style.left =  scrolling * -3 + "px"
    btn.style.marginTop =  scrolling * 1.5 + "px"
    rocks.style.top =  scrolling * -0.12 + "px"
    forest.style.top =  scrolling * 0.25 + "px"
    header.style.top =  scrolling * 0.5 + "px"

    
})