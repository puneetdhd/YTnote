(()=>{
    let youtubeLeftControls,youtubePlayer;
    let currentVideo="";
    let currentVideoBookmarks=[];

    chrome.runtime.onMessage.addListner((obj,sender,response)=>{
        const {type,value,videoId}=obj;

        if(type==="NEW"){
            currentVideo=videoId;
            newVideoLoaded();
        }
    });

    //this checks if there are any bookmarks in the video
    const fetchBookmarks=()=>{
        return new Promise((resolve)=>{
            chrome.storage.sync.get([currentVideo],(obj)=>{
                resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]):[])
            });
        });
    }

    const newVideoLoaded=async()=>{
        const bookmarkBtnExists=document.getElementsByClassName("bookmark-btn")[0];
        currentVideoBookmarks= await fetchBookmarks();

        if(!bookmarkBtnExists){
            const bookmarkBtn=document.createElement("img");

            bookmarkBtn.src= chrome.runtime.getURL("assets/bookmark.png");
            bookmarkBtn.className="ytp-button"+"bookmark-btn";
            bookmarkBtn.title="Click to bookmark current timestamp";
        
            youtubeLeftControls=document.getElementsByClassName('ytp-left-controls')[0];
            youtubePlayer=document.getElementsByClassName("video-stream")[0];

            youtubeLeftControls.appendChild(bookmarkBtn); 
            bookmarkBtn.addEventListener("click",addNewBookmarkEventHAndler)
        }

    }
    const addNewBookmarkEventHAndler= async()=>{
        const currentTime=youtubePlayer.currentTime;
        const newBookmark={
            time:currentTime,
            desc:"Bookmark at: "+getTIme(currentTime,)
        }
        //to check if we are always using the most updated bookmarks
        
        currentVideoBookmarks= await fetchBookmarks();
        chrome.storage.sync.set({
        [currentVideo]:JSON.stringify([...currentVideoBookmarks,newBookmark].sort((a,b)=>
            a.time-b.time
        ))
    })
    }
})();
const getTime=(t)=>{
        var date=new Date(0);
        date.setSeconds(t);

        return date.toISOString().slice(11, 19);
};