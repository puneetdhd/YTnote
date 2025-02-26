//used to check which tab is being used currently

export async function getActiveTabURL(){
    let queryOptions={active: true ,currentWindow:true};
    let [tab]=await chrome.tabs.query(queryOptions);
    return tab;
}