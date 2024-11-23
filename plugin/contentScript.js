/*
contentScript.js 
----------------
Extracts page text content and base URL and prints it in the console (for now)
*/


// FOR DEBUGGING PURPOSES, WILL BE REMOVED LATER
console.log("Facture Extension: Content script is running");

// GETS THE ENTIRE TEXT CONTENT FROM THE PAGE
const pageText = document.body.innerText || document.body.textContent;

// LOGS TEXT CONTENT INTO THE CONSOLE
console.log("Facture Extension: Page text content:", pageText);

// GETS BASE URL
const baseUrl = window.location.origin + '/';

// LOGS BASE URL INTO THE CONSOLE
console.log("Facture Extension: Page base URL: ", baseUrl);
