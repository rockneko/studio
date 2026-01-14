document.getElementById('scrapeBooks').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab.url.includes('kobo.com')) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['content.js']
      });
    } else if (activeTab.url.includes('readmoo.com')) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['content.js']
      });
    } else {
      console.log('Not on a supported page (Kobo or Readmoo).');
    }
  });
});
