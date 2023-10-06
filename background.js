chrome.runtime.onInstalled.addListener(() => {
    chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            function: checkPageForIframes,
        });
    });
});

// Function to be executed in the content script
function checkPageForIframes() {
    const iframes = document.querySelectorAll('input[type="password"]');
    if (iframes.length > 0) {
        for (pas in iframes) {
            //pas.addEventListener("change", () => {
            //    console.log(pas.value);
            //});
            console.log(pas);
        }
    }
}
