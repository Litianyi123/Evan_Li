const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let n = 1;
for(let i =0; i<5; i++ ){
    let str = "";
    let xxx = str.concat("images/pic",n,".jpg");
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.onclick =function(){
        displayedImage.setAttribute('src',xxx);
    }
    thumbBar.appendChild(newImage);
    n = n+1;
}


/* Wiring up the Darken/Lighten button */
let dbutton = document.getElementById("darkbutton")
function changeLighting() {
    if (dbutton.getAttribute("class")==="dark") {
        dbutton.setAttribute('class', "light");
        dbutton.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    else {
        dbutton.setAttribute('class', "dark");
        dbutton.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
    }
}