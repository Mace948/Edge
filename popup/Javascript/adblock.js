function enableAdblock() {
  chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ["ruleset"] }, function () {
    // Callback function
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("adblock_ruleset is now enabled.");
    }
  });
}

function disableAdblock() {
  chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: ["ruleset"] }, function () {
    // Callback function
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("adblock_ruleset is now disabled.");
    }
  });
}
