import AddLinkButton from './components/AddLinkButton';
import ItemLink from './components/ItemLink';
import Profile from './components/Profile';
import AddLink from './components/addLink';
import './styles/App.css';
import './styles/style.css';
import './styles/style_create_link.css';
import { useState } from 'react';

var links = await loadJSON();

async function loadJSON(){
    const res = await fetch('./links.json');
    const json = await res.json();
    return json;
}

const urlParams = new URLSearchParams(window.location.search);

var link_title = urlParams.get("title");
var link_url = urlParams.get("link");

if(link_title !== null && link_url !== null){
  var new_link = JSON.parse(`{"social_media": "${link_title}", "link": "${link_url}"}`)
  links.push(new_link);
}

function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div id="main-content">
          <Profile/>
          <div id="links_content">
              <div id="links">
                  {links.map((item) => {
                    return <ItemLink title={item.social_media} link ={item.link}/>
                  })}
              </div>
              <AddLinkButton openModal={()=> setOpenModal(true)}/>
              <AddLink isOpen={openModal} closeModal={()=> setOpenModal(!openModal)}/>
          </div>
      </div>
    </>
  );
}

export default App;
