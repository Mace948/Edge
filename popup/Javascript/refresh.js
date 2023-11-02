function refresh() {
  // Query for the currently active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0) {
      // Reload the active tab
      chrome.tabs.reload(tabs[0].id);
    }
  });
}
