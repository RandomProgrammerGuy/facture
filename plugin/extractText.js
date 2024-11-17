/* THIS CODE USES 'content_script.js' TO TREAT THE PAGE TEXT */
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["contentScript.js"],
    });
  }
});

