function injectScript(path) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL(path);

    script.onload = function () {
        this.remove();
    };

    (document.head || document.documentElement).appendChild(script);
}

chrome.runtime.onMessage.addListener(
    function (state, sender, sendResponse) {
        if (state) {
            injectScript('skrypt.js');
        }
    });

chrome.runtime.sendMessage({
    event: 'state',
}, function (state) {
    if (state) {
        injectScript('skrypt.js');
    }
});
