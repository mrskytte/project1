const icon = document.querySelector("#hamburger-icon")
icon.addEventListener("click", openMenu)

function openMenu(){
    if(line1.classList == "lines top" ){
        line1.classList.add("topback")
        line1.classList.remove("top")
        line2.classList.add("middleback")
        line2.classList.remove("middle")
        line3.classList.add("bottomback")
        line3.classList.remove("bottom")
        BG.classList.add("BGanimationback")
        BG.classList.remove("BGanimation")
        menuCon.classList.add("menu-contentback")
        menuCon.classList.remove("menu-content")
} else{ line1.classList.add("top")
       line1.classList.remove("topback")
       line2.classList.add("middle")
       line2.classList.remove("middleback")
       line3.classList.add("bottom")
       line3.classList.remove("bottomback")
       BG.classList.add("BGanimation")
       BG.classList.remove("BGanimationback")
       menuCon.classList.add("menu-content")
    menuCon.classList.remove("menu-contentback")
}
}


const menuCon =document.querySelector("#menu-content")
const BG =document.querySelector("#BG")
const line1 =document.querySelector("#line1")
const line2 =document.querySelector("#line2")
const line3 =document.querySelector("#line3")



//
// console.log("opening...")
//    line1.classList.toggle("top")
//    line2.classList.toggle("middle")
//    line3.classList.toggle("bottom")
//    console.log(line1)
//    console.log(line2)
//    console.log(line3)
//}
