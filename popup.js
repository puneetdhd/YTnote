import { getActiveTabURL } from "./utils";

//adding a new bookmark row to the popup
const addNewBookmark=(bookmarksElement,bookmark)=>{
    const bookmarkTitleElement=document.createElement("div");
    const newBookmarkElement=document.createElement("div");

    bookmarkTitleElement.textContent=bookmark.desc;
    bookmarkTitleElement.className="bookmark-title";

    newBookmarkElement.id="bookmark-"+bookmark.time;
    newBookmarkElement.className="bookmark";
    newBookmarkElement.setAttribute("timestamp",bookmark.time);
    
    newBookmarkElement.appendChild(bookmarkTitleElement);
    bookmarksElement.appendChild(newBookmarkElement);

};

const viewBookmarks=(currentBookmarks=[])=>{
    const bookmarksElement=document.getElementsByClassName("bookmarks");
    bookmarksElement.innerHTML=""; 
    if(currentBookmarks.length>0){
        for(let i=0;i<currentBookmarks.length;i++){
            const bookmark=currentBookmarks[i];
            addNeweBookmark(bookmarksElement,bookmark);
        }
    }else{
        bookmarksElement.innerHTML='<div class="row">No bookmarks available</div>';
    }
};

const onPlay=e=>{};

const onDelete=e=>{};

const setBookmarkAttributes=()=>{};

document.addEventListener("DOMContentLoaded",async()=>{
    const activeTab=await getActiveTabURL();
    const queryParameteres=activeTab.url.split("?")[1];
    const urlParameteres=new URLSearchParams(queryParameteres);
    //converts it to key value pairs which can be further used

    const currentVideo=urlParameteres.get("v");

    if(activeTab.url.includes("youtube.com/watch")&& currentVideo){
        chrome.storage.sync.get([currentVideo],(data)=>{
            const currentVideoBookmarks=data[currentVideo]?JSON.parse(data[currentVideo]):[];

            //view bookmarks
        })
    }else{
        //when not a yt page
        const container=document.getElementsByClassName("container")[0];
        container.innerHTML='<div class="title">This is not a youtube video page</div>'
    }
});