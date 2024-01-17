// contentScript.js

// Function to apply the rule to a single element
function applyRuleToElement(element) {
  // Check if the element meets the specific criteria before changing the background color
  if (!element.classList.contains('spacer') && !element.classList.contains('ellipsis') && !element.classList.contains('character') && !element.classList.contains('primary_photo')) {
    element.style.backgroundColor = 'cyan';
  }
}

// Function to apply the rule to a set of elements
function applyRuleToElements(elements) {
  elements.forEach(applyRuleToElement);
}

// Function to apply the rule
function applyRule(ruleName, ruleDefinition) {
  console.log('Applying Rule:', ruleName);

  try {
    // Traverse the DOM structure manually to find the elements
    const elements = document.querySelectorAll(ruleDefinition);

    // Apply the rule to each element
    applyRuleToElements(elements);

    const castNames = Array.from(elements).map(element => element.textContent.trim());
    console.log(`Cast Names (${ruleName}):`, castNames);
  } catch (error) {
    console.error('Error in applyRule:', error);
  }
}


// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.ruleName && message.ruleDefinition) {
    // Update the current rule definition
    currentRuleDefinition = message.ruleDefinition;

    // Apply the rule initially
    applyRule(message.ruleName, currentRuleDefinition);
  }
});
