var content = document.querySelector(".content"),
x = document.querySelector(".X"),
btn = document.querySelector("button"),
outside = document.querySelector(".outside");


btn.addEventListener("click", appear);
function appear(){
    content.style.display = "block";
    outside.style.filter = "blur(10px)"
}


x.addEventListener("click", remove);
function remove(){
    content.style.display = "none";
    outside.style.filter = "blur(0px)"  
}


content.addEventListener("click",removeText)
function removeText(e){
    if(e.target.className == "content"){
        content.style.display = "none";
        outside.style.filter = "blur(0px)"  
    }
}
function disappear(){
    content.style.display = "none";
    outside.style.filter = "blur(0px)" 
}