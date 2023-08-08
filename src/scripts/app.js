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
    console.log(a_link.getAttribute('target'));
    
    var p_link = document.createElement("P");
    p_link.textContent = title;

    a_link.appendChild(p_link);
    link_list.appendChild(a_link);
}