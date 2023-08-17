import AddLinkButton from './components/AddLinkButton';
import ItemLink from './components/ItemLink';
import Profile from './components/Profile'
import './styles/App.css';
import './styles/style.css';

var links = await loadJSON();

async function loadJSON(){
    const res = await fetch('./links.json');
    const json = await res.json();
    return json;
}

function App() {
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
              <AddLinkButton/>
          </div>
      </div>
    </>
  );
}

export default App;
