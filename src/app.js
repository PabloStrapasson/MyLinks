const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.use('/', router);
app.listen(port);

/*function onResponse(response){
    console.log(response.status);
    response.json().then(json => console.log(json));
}

function onError(error){
    console.log("erro " + error);
}

fetch('../../public/links.json').then(onResponse, onError)

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
}*/