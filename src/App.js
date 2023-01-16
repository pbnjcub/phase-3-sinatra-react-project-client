import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import NewBook from './components/NewBook';
import BookDetail from './components/BookDetail'
import NewCharacter from './components/NewCharacter';
import CharacterDetail from './components/CharacterDetail';
import PageNotFound from './components/PageNotFound';


function App() {
  const [ backImg, setBackImg ] = useState("https://www.syfy.com/sites/syfy/files/styles/fp_crop_1440x1080_scale_960x720/public/2021/11/theexpanse-s1-web-dynamiclead-desktop-1920x1080.jpg?h=c88edaac")

  function changeBackground(loc) {
    if(loc == "/characters") {
      setBackImg("https://images6.alphacoders.com/673/673773.jpg")
    } else if(loc == "/books") {
      setBackImg("https://c4.wallpaperflare.com/wallpaper/866/229/182/spaceship-the-expanse-stargate-science-fiction-portal-hd-wallpaper-preview.jpg")
    } else if(loc == "/books/new") {
      setBackImg("https://c4.wallpaperflare.com/wallpaper/0/1011/688/the-expanse-space-science-fiction-tv-series-tv-hd-wallpaper-preview.jpg")
    } else if(loc == "/characters/new") {
      setBackImg("https://images4.alphacoders.com/673/673780.jpg")
    } else if(loc == "/") {
      setBackImg("https://www.syfy.com/sites/syfy/files/styles/fp_crop_1440x1080_scale_960x720/public/2021/11/theexpanse-s1-web-dynamiclead-desktop-1920x1080.jpg?h=c88edaac")
    } 
  }

  return (
    <div style={{ height: "150vh", backgroundImage: `url("${backImg}")`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <Router>
        <div className="App" >
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home changeBackground = {changeBackground}/>}/>
            <Route exact path="/characters" element={ <CharacterList  changeBackground = {changeBackground}/> }/>
            <Route exact path="/books" element={ <BookList changeBackground = {changeBackground}/> }/> 
            <Route exact path="/books/new" element={ <NewBook changeBackground = {changeBackground}/> }/> 
            <Route exact path="/books/:id" element={ <BookDetail changeBackground = {changeBackground}/> }/> 
            <Route exact path="/characters/new" element={ <NewCharacter changeBackground = {changeBackground}/> }/> 
            <Route exact path="/characters/:id" element={ <CharacterDetail changeBackground = {changeBackground}/> }/> 
            
            {/* <Route element={<PageNotFound/>} />         */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
