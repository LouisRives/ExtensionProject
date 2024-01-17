// popup.js

document.getElementById('applyRules').addEventListener('click', () => {
	const ruleName = document.getElementById('ruleName').value;
	const ruleDefinition = document.getElementById('ruleDefinition').value;

	// Send rule data to the content script
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { ruleName, ruleDefinition });
  });
});



