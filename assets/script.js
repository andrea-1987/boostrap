let badge=document.querySelectorAll(".underCard button")

for(i=0;i<badge.length;i++){
    let buttons=badge[i]
buttons.innerHTML=`<ion-icon name="bookmark-outline"></ion-icon>`
let save=function(){
    buttons.innerHTML=`<ion-icon name="bookmark"></ion-icon>`
}
buttons.addEventListener("click",save)
}