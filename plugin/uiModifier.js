/*
extensionCode.js
----------------
Interacts directly with the extension UI. It changes the length of the analysis bars and defines their color.
*/

const doc_root = document.querySelector(':root');  // ALLOWS YOU TO CHANGE GLOBAL CSS VARIABLES 

var authBarLength = '20%'; // CHANGE TO SET THE LENGTH FOR THE AUTHENTICITY BAR
var reptBarLength = '40%'; // CHANGE TO SET THE LENGTH FOR THE WEBSITE REPUTATION BAR
var aigcBarLength = '80%'; // CHANGE TO SET THE LENGTH FOR THE AI-GEN CONTENT BAR


// CONDITIONAL BAR COLOR SETTING 
var authBarColor;
var reptBarColor;
var aigcBarColor;

if (parseFloat(authBarLength) <= 25) {            // CONDTIONAL COLORING FOR THE AUTHENTICITY BAR
    authBarColor = "#ef4e3d";
} else if (parseFloat(authBarLength) <= 50) {
    authBarColor = "#ef883d";
} else if (parseFloat(authBarLength) <= 75) {
    authBarColor = "#efbb3d";
} else {
    authBarColor = "#0eca6f"
}

if (parseFloat(reptBarLength) <= 25) {            // CONDTIONAL COLORING FOR THE REPUTATION BAR
    reptBarColor = "#ef4e3d";
} else if (parseFloat(reptBarLength) <= 50) {
    reptBarColor = "#ef883d";
} else if (parseFloat(authBarLength) <= 75) {
    reptBarColor = "#efbb3d";
} else {
    reptBarColor = "#0eca6f"
}

if (parseFloat(aigcBarLength) <= 25) {            // CONDTIONAL COLORING FOR THE AI-GEN CONTENT BAR
    aigcBarColor = "#0eca6f";
} else if (parseFloat(aigcBarLength) <= 50) {
    aigcBarColor = "#efbb3d";
} else if (parseFloat(aigcBarLength) <= 75) {
    aigcBarColor = "#ef883d";
} else {
    aigcBarColor = "#ef4e3d"
}


// CHANGE BAR LENGTHS IN CSS
doc_root.style.setProperty('--authbarlength', authBarLength);
doc_root.style.setProperty('--reptbarlength', reptBarLength);
doc_root.style.setProperty('--aigcbarlength', aigcBarLength);

// CHANGE BAR COLORS IN CSS 
doc_root.style.setProperty('--authbarcolor', authBarColor);
doc_root.style.setProperty('--reptbarcolor', reptBarColor);
doc_root.style.setProperty('--aigcbarcolor', aigcBarColor);