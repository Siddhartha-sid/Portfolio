var cursor = document.querySelector("#cursor")
var cursor1 = document.querySelector("#cursor1")
var cursor2 = document.querySelector("#cursor2")
var cursor3 = document.querySelector("#cursor3")
var cursor4 = document.querySelector("#cursor4")
var cursor5 = document.querySelector("#cursor5")

window.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
        delay: 0,
        duration: 0.2,
        ease: "back-out"
    })
})
window.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor1", {
        x: dets.x,
        y: dets.y,
        delay: 0.01,
        duration: 0.3,
        ease: "back-out"
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor2, {
        x: dets.x,
        y: dets.y,
        delay: 0.03,
        duration: 0.35,
        ease: "back-out"
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor3, {
        x: dets.x,
        y: dets.y,
        delay: 0.04,
        duration: 0.38,
        ease: "back-out"
    })
})
window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor4, {
        x: dets.x,
        y: dets.y,
        delay: 0.05,
        duration: 0.39,
        ease: "back-out"
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor5, {
        x: dets.x,
        y: dets.y,
        delay: 0.06,
        duration: 0.41,
        ease: "back-out"
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor6, {
        x: dets.x,
        y: dets.y,
        delay: 0.07,
        duration: 0.45,
        ease: "back-out"
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor7, {
        x: dets.x,
        y: dets.y,
        delay: 0.08,
        duration: 0.47,
        ease: "back-out"
    })
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor8, {
        x: dets.x,
        y: dets.y,
        delay: 0.09,
        duration: 0.49,
        ease: "back-out"
    })
})


var menu=document.querySelector("#menuButton i")
var close=document.querySelector("#closeButton i")

var tl = gsap.timeline()
tl.to("#full", {
    right: 0,
    duration: 0.2,
    delay: 0.1
})
tl.from("#half", {
    x: -150,
    opacity: 0,
    delay: 0.2,
    duration: 0.3
})
tl.from("#half a", {
    x: 150,
    opacity: 0,
    delay: 0.1,
    duration: 0.1,
    stagger: 0.3,
})
tl.from("#half i", {
    delay: 0,
    opacity: 0,
    duration: 0
})


tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})

gsap.from("#left",{
    opacity:0,
    x:-30,
    delay:0.3,
    duration:0.5,
    stagger:1
})

gsap.from("p",{
    opacity:0,
    y:-50,
    stagger:0.5
})
gsap.from("#skills",{
    opacity:0,
    delay:15,
    y:-50,
    stagger:0.5

})

function animation(){

    var p=document.querySelector("p")

var pText=p.textContent

var splitText = pText.split("")


// console.log(splitText)
clutter=""

splitText.forEach(function(elem){
    clutter+=`<span class=>${elem}</span>`
    
})
p.innerHTML=clutter

}
animation()

gsap.from("p span",{
    y:50,
    opacity:0,
    delay:0,
    duration:0.03,
    stagger:0.02,
    background:"white",
    color:"black"
})
