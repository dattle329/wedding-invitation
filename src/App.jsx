import Header from "./components/header/Header";
import ListMenuIcon from "./components/list-menu-icon/ListMenuIcon";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import ImgIntro from "./components/img-intro/ImgIntro";
import Invitation from "./components/invitation/Invitation";
import AlbumPhoto from "./components/album-photo/AlbumPhoto";

function App() {
  return (
    <div className="container">
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="header-content">
        <Header />
      </div>
      <div className="img-intro-app">
        <ImgIntro />
      </div>
      <div className="invitation-app">
        <Invitation />
      </div>
      <div className="list-menu">
        <ListMenuIcon />
      </div>
      <div className="album-photo-app"> 
        <AlbumPhoto />
      </div>
    </div>
  );
}

export default App;
