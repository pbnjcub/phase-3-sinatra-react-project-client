import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  // let {bookId} = useParams()
  // let {charId} = useParams()
  
  return (
    <div style={{ height: "100vh", backgroundImage: `url("https://www.syfy.com/sites/syfy/files/styles/fp_crop_1440x1080_scale_960x720/public/2021/11/theexpanse-s1-web-dynamiclead-desktop-1920x1080.jpg?h=c88edaac")`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <Router>
        <div className="App" >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/characters" element={ <CharacterList/> }/>
            <Route exact path="/books" element={ <BookList/> }/> 
            <Route exact path="/books/new" element={ <NewBook/> }/> 
            {/* <Route exact path={`/books/:${bookId}`} element={ <BookDetail/> }/>  */}
            <Route exact path="/books/:id" element={ <BookDetail/> }/> 
            <Route exact path="/characters/new" element={ <NewCharacter/> }/> 
            {/* <Route exact path={`/characters/:${charId}`} element={ <CharacterDetail/> }/>  */}
            <Route exact path="/characters/:id" element={ <CharacterDetail/> }/> 
            
            {/* <Route element={<PageNotFound/>} />         */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
