fetch('/links.json').then(onResponse, onError)

function onResponse(response){
    console.log(response.status);
    return response.json().then(loadLinks);
}

function onError(error){
    console.log("erro " + error);
}

function loadLinks(json){
    console.log(json)
    for(link of json){
        let title = link.social_media;
        let url = link.link;
        createLinkItem(title, link);
    }
}

/*async function loadJSON(){
    const response = await fetch("../public/links.json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        });
    const data = await response.json();
    return data;
}*/

const urlParams = new URLSearchParams(window.location.search);

var link_title = urlParams.get("title");
var link_url = urlParams.get("link");

if(link_title !== null && link_url !== null){
    createLinkItem(link_title, link_url);
}

function createLinkItem(title, link){
    var link_list = document.getElementById('links');

    var a_link = document.createElement("A");
    a_link.href = link;
    a_link.target = "_blank";
    
    var p_link = document.createElement("P");
    p_link.textContent = title;

    a_link.appendChild(p_link);
    link_list.appendChild(a_link);
}