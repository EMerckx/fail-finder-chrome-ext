chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript( 
        null, 
        {file: "js/find-fail.js"},
        function(results){
            // set icon of extension according to the result
            if(results[0]){
                chrome.browserAction.setIcon({path:"img/icon-fail.png"});
            } else {
                chrome.browserAction.setIcon({path:"img/icon-ok.png"});
            }

            // reset icon after a while
            setTimeout(function(){ 
                chrome.browserAction.setIcon({path:"img/icon.png"});
            }, 3000);
        }
    );
});
