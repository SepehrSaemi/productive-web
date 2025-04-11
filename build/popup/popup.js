const platformLogoEl = document.querySelector("#platform-logo");
const platformNameEl = document.querySelector("#platform-name");
const unhookTab = document.querySelector("#unhook-tab");
const controlerTabsContent = document.querySelectorAll(".tab-content");

const supportedPlatforms = ["Youtube"];

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

        switch (platformName) {
            case "Youtube":
                loadYoutubeContent();
                break;
        }
    }
});

function upperCaseFirstLetter(word) {
    // Uppercase the first letter of the word
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function loadYoutubeContent() {
    unhookTab.classList.remove("tab-disabled");

    // Load Appearance tab content
    controlerTabsContent[0].innerHTML = `
        <div class="mb-1 max-h-96 overflow-y-scroll px-2.5">
            <p class="text-neutral-content text-base font-medium">General</p>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Home Feed</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Shorts</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Live Streams</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Ad</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>

            <p class="text-neutral-content mt-2.5 text-base font-medium">Sidebar</p>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Subscriptions</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Explore</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">More from Youtube</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>

            <p class="text-neutral-content mt-2.5 text-base font-medium">Video Page</p>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Title</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Channel Info</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Action Buttons</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Description</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Comments</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Live Chat</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Recommends</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            
            <p class="text-neutral-content mt-2.5 text-base font-medium">Channel Page</p>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Shorts Tab</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Playlists Tab</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Live Tab</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Posts Tab</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Podcasts Tab</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
            <span class="mt-1 flex items-center justify-between pl-5">
                <p class="text-sm">Store Tab</p>
                <input type="checkbox" class="toggle toggle-accent toggle-sm" />
            </span>
        </div>
    `;
}
