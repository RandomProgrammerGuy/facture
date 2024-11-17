/*
contentScript.js 
----------------
Extracts page text content and prints it in the console (for now)
*/
console.log("Content script is running");

// Directly get the text content of the entire page
const pageText = document.body.innerText || document.body.textContent;

// Log it in the console
console.log("Page text content:", pageText);