(()=>{
    let youtubeLeftControls,youtubePlayer;

    chrome.runtime.onMessage.addListner((obj,sender,response)=>{
        const {type,value,videoId}=obj;

        if(type==="NEW"){
            currentVideo=videoId;
            newVideoLoaded();
        }
    })
})