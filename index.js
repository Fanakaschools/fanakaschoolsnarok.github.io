//slider images
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initializeslider();

//document.addEventListener("DOMcontentLoaded", initializeslider);

function initializeslider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displayslide");
        intervalId = setInterval(nextslide, 5000);

    }
}

function showslide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;

    }

    slides.forEach(slide =>{
        slide.classList.remove("displayslide");
    })

    slides[slideIndex].classList.add("displayslide");

}

function prevslide(){
    clearInterval(intervalId);
    slideIndex--;
    showslide(slideIndex);

}

function nextslide(){
    slideIndex++;
    showslide(slideIndex);
}

// resposive navigation bar code....

const menuopen = document.getElementById("menuopen");
const menuclose = document.getElementById("menuclose");
const menu =document.getElementById("menu");

menuopen.addEventListener("click", event =>{
    menu.style.display = "block";
})


menuclose.addEventListener("click", event =>{

    menu.style.display = "none";
})

// read more paragraph code....

function myFunction(){
    var dot = document.getElementById("dot");
    var more = document.getElementById("more");
    var btnmore = document.getElementById("btnmore");

    if (dot.style.display === "none"){
        dot.style.display = "inline";
        btnmore.innerHTML = "Read more";
        more.style.display = "none";
    } 
    else {
        dot.style.display = "none";
        btnmore.innerHTML = "Read less";
        more.style.display = "inline";
    }
}

function myFunction1(){
    var dot = document.getElementById("dot1");
    var more = document.getElementById("more1");
    var btnmore = document.getElementById("btnmore1");

    if (dot.style.display === "none"){
        dot.style.display = "inline";
        btnmore.innerHTML = "Read more";
        more.style.display = "none";
    } 
    else {
        dot.style.display = "none";
        btnmore.innerHTML = "Read less";
        more.style.display = "inline";
    }
}




