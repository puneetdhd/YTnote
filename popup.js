import { getActiveTabURL } from "./utils";

//adding a new bookmark row to the popup
const addNeweBookmark=()=>{};

const viewBookmarks=()=>{};

const onPlay=e=>{};

const onDelete=e=>{};

const setBookmarkAttributes=()=>{};

document.addEventListener("DOMContentLoaded",async()=>{
    const activeTab=await getActiveTabURL();
    const queryParameteres=activeTab.url.split("?")[1];
    const urlParameteres=new URLSearchParams(queryParameteres);

    const currentVideo=urlParameteres.get("v");

    if(activeTab.url.includes("youtube.com/watch")&& currentVideo){
        chrome.storage.sync.get([currentVideo],(data)=>{
            const currentVideoBookmarks=data[currentVideo]?JSON.parse(data[currentVideo]):[];
        })
    }
});