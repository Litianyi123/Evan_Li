const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

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