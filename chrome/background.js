function toggleIcon() {
    state = !state;
    setIcon();
}

function setIcon() {
    var iconPath = state ? 'chrome/icons/icon-16-active.png' : 'chrome/icons/icon-16.png';
    chrome.browserAction.setIcon({
        path: iconPath,
    });
}

var state = false;
setIcon();

chrome.browserAction.onClicked.addListener(function (tab) {
    toggleIcon();
    chrome.tabs.sendMessage(tab.id, state);
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.event === 'state') {
        sendResponse(state);
    }
});
