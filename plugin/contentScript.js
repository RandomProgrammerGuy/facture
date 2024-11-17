/* THIS CODE EXTRACTS THE TEXT FROM THE WEBPAGE, BUT THE MAIN FUN HAPPENS IN 'extractText.js' */
console.log("Content script is running");

// Directly get the text content of the entire page
const pageText = document.body.innerText || document.body.textContent;

// Log it in the console
console.log("Page text content:", pageText);