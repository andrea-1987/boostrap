let badge=document.querySelectorAll(".underCard button")

for(i=0;i<badge.length;i++){
    let buttons=badge[i]
buttons.innerHTML=`<ion-icon name="bookmark-outline"></ion-icon>`
let save=function(){
    buttons.innerHTML=`<ion-icon name="bookmark"></ion-icon>`
}
buttons.addEventListener("click",save)
let unSave=function(){
    if(buttons.target.value=`<ion-icon name="bookmark"></ion-icon>`){
    buttons.innerHTML=`<ion-icon name="bookmark"></ion-icon>`}
buttons.addEventListener("click",unSave)   
}
}