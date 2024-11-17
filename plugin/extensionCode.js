/* BAR SIZE ADJUSTEMENT */
const doc_root = document.querySelector(':root');

var authBarLength = '30%'; /* CHANGE THESE VALUES TO CHANGE THE BAR SIZES */
var reptBarLength = '40%';
var aigcBarLength = '50%';

doc_root.style.setProperty('--authbarlength', authBarLength); /* THESE LINES CHANGE THE BAR VALUES IN CSS*/
doc_root.style.setProperty('--reptbarlength', reptBarLength);
doc_root.style.setProperty('--aigcbarlength', aigcBarLength);