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


var typed = new Typed('.input', {
    strings: ['Siddhartha ...'],
    typeSpeed: 180,
    backSpeed: 150,
});

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


gsap.from("body",{
    opacity:0,
    x:30,
    delay:0.5,
    duration:0.8
})
gsap.from("#image img",{
    opacity:0,
    delay:1,
    duration:1.5
})
gsap.from("h3",{
    opacity:0,
    x:100,
    stagger:1
})
gsap.from(".Text",{
    opacity:0,
    x:100,
    stagger:1
})