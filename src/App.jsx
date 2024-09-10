import Header from "./components/header/Header";
import ListMenuIcon from "./components/list-menu-icon/ListMenuIcon";
import Navbar from "./components/navbar/Navbar";
import './App.css'

function App() {
  return (
      <div className="container">
        <Navbar />
        <Header />
        <div className="list-menu">
          <ListMenuIcon />
        </div>
      </div>
  );
}

export default App;
