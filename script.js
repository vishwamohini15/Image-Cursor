// var elem1=document.querySelector(".elem1")
// var elemimg=document.querySelector(".elem1 img")


// elem1.addEventListener("mousemove",function(det){
//     elemimg.style.left=det.x+'px'
//     elemimg.style.top=det.y+'px'

// })

// elem1.addEventListener("mouseenter",function(det){
// elemimg.style.opacity=1
// })

// elem1.addEventListener("mouseleave",function(det){
//     elemimg.style.opacity=0
//     })
    

var elemm=document.querySelectorAll("#elem")
elemm.forEach(function(val){

    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity=2
    })

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity=0.3
    })

    val.addEventListener("mousemove", function(det){
        val.childNodes[3].style.left=det.x+'px'
        // val.childNodes[3].style.top=det.y+'px'

    })

});
