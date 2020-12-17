const first = document.createElement('button');
first.innerText = "SET DATA";
first.id = "first";


const second = document.createElement('button');
second.innerText = "Shoutout to backend";
second.id = "second";


document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', ()=>{
    // chrome.storage.sync
    chrome.storage.local.set({'password': '123'});
    console.log("I SET DATA");
})


second.addEventListener('click', ()=>{
    chrome.runtime.sendMessage({message: "Yo check the storage"});
    console.log("I SENT A MESSAGE");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.message);
})

document.querySelector('img#hplogo').classList.add('spinspinspin');
