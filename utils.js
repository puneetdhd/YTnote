//used to check which tab is being used currently

export async function geActiveTab(){
    let queryOptions={active: true ,currentWindow:true};
    let [tab]=await chrome.tabs.query(queryOptions);
    return tab;
}