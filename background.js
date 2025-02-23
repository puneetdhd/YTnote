//listen to any updates in the tab system and check for the
//most recent tab and check if its a youtube page

chrome.tabs.onUpdated.addListner(()=>{
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryParameters=tab.url.split("?")[[1]];
        const urlParameters= new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tabId,{
            type:"NEW",
            videoId:urlParameters.get("v")
        });  
    }
})