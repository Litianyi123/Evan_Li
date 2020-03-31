const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let n = 1;
for(let i =0; i<5; i++ ){
    let str = "";
    xxx = str.concat("images/pic",n,".jpg");;
    console.log(xxx);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
    n = n+1;
}


/* Wiring up the Darken/Lighten button */
let dbutton = document.getElementById("darkbutton")
let ld = dbutton.getAttribute("class")
function changeLighting() {
    if (ld==="dark") {
        dbutton.setAttribute("class", "light");
        dbutton.innerHTML("Darken");
        overlay.style.background_color = "rgba(0,0,0,0.5)"
    }
    else {
        dbutton.setAttribute("class", "dark");
        dbutton.innerHTML("Lighten");
        overlay.style.background_color = "rgba(0,0,0,0)"
    }
}