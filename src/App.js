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
    }
  }

  return (
    <div style={{ height: "100vh", backgroundImage: `url("${backImg}")`, backgroundRepeat:"no-repeat", backgroundSize:"contain, cover" }}>
      <Router>
        <div className="App" >
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home backImg={backImg} setBackImg={setBackImg}/>}/>
            <Route exact path="/characters" element={ <CharacterList backImg={backImg} setBackImg={setBackImg} changeBackground = {changeBackground}/> }/>
            <Route exact path="/books" element={ <BookList backImg={backImg} setBackImg={setBackImg}/> }/> 
            <Route exact path="/books/new" element={ <NewBook backImg={backImg} setBackImg={setBackImg}/> }/> 
            <Route exact path="/books/:id" element={ <BookDetail backImg={backImg} setBackImg={setBackImg}/> }/> 
            <Route exact path="/characters/new" element={ <NewCharacter backImg={backImg} setBackImg={setBackImg}/> }/> 
            <Route exact path="/characters/:id" element={ <CharacterDetail backImg={backImg} setBackImg={setBackImg}/> }/> 
            
            {/* <Route element={<PageNotFound/>} />         */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
