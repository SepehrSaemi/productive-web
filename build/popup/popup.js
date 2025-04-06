const platformLogoEl = document.querySelector("#platform-logo");
const platformNameEl = document.querySelector("#platform-name");

const supportedPlatforms = [];

// Check active tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Extract platform name from URL
    const parts = new URL(tabs[0].url).hostname.replace(/^www\./i, "").split(".");

    let platformName = parts.length > 2 ? parts[1] : parts[0];
    platformName = upperCaseFirstLetter(platformName);

    // Replace default popup content with platform specific content
    if (supportedPlatforms.includes(platformName)) {
        platformNameEl.textContent = platformName;
        platformLogoEl.src = `../../assets/platforms-logo/${platformName}.svg`;
    }
});

function upperCaseFirstLetter(word) {
    // Uppercase the first letter of the word
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
