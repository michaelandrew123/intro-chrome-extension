/**
 * the background is automatically enjected 
 * 
*/
let active_tab_id = 0;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;
        //console.log(current_tab_info.url);
        if(/^https:\/\/www\.google/.test(current_tab_info.url)){ 
           // https://www.google.com/
            chrome.tabs.insertCSS(null, {file: './mystyle.css'})
            chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=> console.log("I injected"))
        } 
    }); 
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { 
    if(request.message === 'Yo check the storage'){

        chrome.tabs.sendMessage(active_tab_id, {message: 'Yo, I got your message'})
      //  sendResponse({ message: 'Yo check the storage' });
        chrome.storage.local.get("password", value =>{
            console.log(value)
        });
    }
})