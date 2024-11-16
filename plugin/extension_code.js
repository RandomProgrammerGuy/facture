/* BAR SIZE ADJUSTEMENT */
var doc_root = document.querySelector(':root');

var auth_bar_length = '30%'; /* CHANGE THESE VALUES TO CHANGE THE BAR SIZES */
var rept_bar_length = '40%';
var aigc_bar_length = '50%';

doc_root.style.setProperty('--authbarlength', auth_bar_length); /* THESE LINES CHANGE THE BAR VALUES IN CSS*/
doc_root.style.setProperty('--reptbarlength', rept_bar_length);
doc_root.style.setProperty('--aigcbarlength', aigc_bar_length);