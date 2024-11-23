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

// AI STUFF STARTS FROM HERE
// -------------------------

// CHECKS IF THE API IS AVAILABLE AND STORES ITS CAPABILITIES
const {capabilities, defaultTemperature, defaultTopK, maxTopK } = await chrome.aiOriginTrial.languageModel.capabilities();

// START SESSION WITH DEFAULT TEMPERATURE AND TOPK
if (capabilities !== 'no') {
  const session = await chrome.aiOriginTrial.languageModel.create({
    systemPrompt: 'ALL OF YOUR RESPONSES MUST BE MADE UP OF ONLY A PERCENTAGE FROM 0% TO 100%. DO NOT INCLUDE ANY EXTRA EXPLANATIONS, CHARACTERS OR WHITESPACE IN THEM. EXAMPLE RESPONSE: "58%"',
  });

  // THESE PROMPTS WILL BE FED TO THE AI TO ANALYZE
  const authPrompt = "ANALYZE THE FOLLOWING ARTICLE FOR FAKE OR MISLEADING INFORMATION. GIVE IT AN AUTHENTICITY SCORE BETWEEN 0% AND 100%, 0% MEANING IT'S COMPLETELY FAKE AND 100% MEANING THAT IT'S COMPLETELY TRUE ".concat(pageText);
  const reptPrompt = "GIVE THE FOLLOWING WEBSITE A REPUTATION SCORE FROM 0% TO 100%, 0% MEANING THAT ITS REPUTATION IS REALLY BAD AND 100% MEANING THAT ITS REPUTATION IS REALLY GOOD ".concat(baseUrl);
  const biasPrompt = "GIVE THE FOLLOWING WEBSITE A POLITICAL BIAS SCORE FROM 0% TO 100%, 0% MEANING THAT ITS FAR-LEFT ORIENTED, 50% MEANING ITS TRULY NEUTRAL AND 100% MEANING THAT ITS FAR-RIGHT ORIENTED ".concat(baseUrl);
  const aigcPrompt = "ANALYZE THE FOLLOWING ARTICLE FOR POSSIBLY AI-GENERATED CONTENT. GIVE IT A SCORE BETWEEN 0% AND 100%, 0% MEANING IT'S SURELY HUMAN-MADE AND 100% MEANING THAT IT'S SURELY AI-MADE ".concat(pageText);

  // FEEDING PROMPTS TO AI
  const auth = await session.prompt(authPrompt);
  const rept = await session.prompt(reptPrompt);
  const bias = await session.prompt(biasPrompt);
  const aigc = await session.prompt(aigcPrompt);

  // DESTROYING SESSION TO ENSURE IT DOESN'T HINDER PERFORMANCE
  session.destroy();

  // FOR DEBUGGING PURPOSES
  console.log("Facture Extension: Authenticity Score = ", auth);
  console.log("Facture Extension: Reputation Score = ", rept);
  console.log("Facture Extension: Bias score = ", bias);
  console.log("Facture Extension: AI-Generated Content Score = ", aigc)
}

