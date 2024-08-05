let main= document.querySelector("#main")
let crsr= document.querySelector(".cursor")

main.addEventListener("mousemove",function(dts) {
crsr.style.left= dts.x+"px"
crsr.style.top= dts.y+"px"
})