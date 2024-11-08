let main=document.getElementById("main-img");
let dot1=document.getElementById("dot1");
let dot2=document.getElementById("dot2");
let dot3=document.getElementById("dot3");
let dot4=document.getElementById("dot4");
let dot5=document.getElementById("dot5");

let images=document.querySelectorAll(".right img");

let popDiv=document.querySelector(".popup");
let image=document.getElementById("big-img");
let close=document.getElementById("close");

for(img of images){
    img.onclick=function(){
        popDiv.style.display="flex";
        close.style.display="block"
        image.src=this.src
    }
}

function closepop(){
    popDiv.style.display="none"
}



dot1.onclick=function(){
    main.src="gym photos/man-8545861.jpg";
    
}
dot2.onclick=function(){
    main.src="gym photos/muscle-2459720_1280.jpg";
    
}
dot3.onclick=function(){
    main.src="gym photos/sports-blonde-woman-sportswear-training-gym.jpg";
    
}
dot4.onclick=function(){
    main.src="gym photos/young-attractive-womans-doing-fitness-exercises.jpg";
    
}
dot5.onclick=function(){
    main.src="gym photos/man-8545861.jpg";
    
}