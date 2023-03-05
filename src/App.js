import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import NewBook from './components/NewBook';
import BookDetail from './components/BookDetail'
import NewCharacter from './components/NewCharacter';
import CharacterDetail from './components/CharacterDetail';
import EditBook from './components/EditBook';
import EditCharacter from './components/EditCharacter'


function App() {
  const [ backImg, setBackImg ] = useState("https://www.syfy.com/sites/syfy/files/styles/fp_crop_1440x1080_scale_960x720/public/2021/11/theexpanse-s1-web-dynamiclead-desktop-1920x1080.jpg?h=c88edaac")
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('http://localhost:9393/books');
      const data = await resp.json();
      setBooks(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:9393/characters');
      const data = await resp.json();
      setCharacters(data);
    }
    fetchData();
  }, []);

  const removeBook = id => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks)
}

  const addBook = newBook => {
    const updatedBooks = [...books, newBook]
    setBooks(updatedBooks)
  }

  const addChar = newChar => {
    const updatedChars = [...characters, newChar]
    setCharacters(updatedChars)
  }

  const removeCharacter = deletedChar => {
    const updatedChars = characters.filter( character => character.id !== deletedChar.id)
    setCharacters(updatedChars)
}

  const updateBook = updatedBook => {
    const updatedBooks = books.map((book) => {
        if(book.id === updatedBook.id) {
            return updatedBook
        } else {
            return book
        }})
    setBooks(updatedBooks)
}



  function changeBackground(loc) {
    if(loc === "/characters") {
      setBackImg("https://images6.alphacoders.com/673/673773.jpg")
    } else if(loc === "/books") {
      setBackImg("https://c4.wallpaperflare.com/wallpaper/866/229/182/spaceship-the-expanse-stargate-science-fiction-portal-hd-wallpaper-preview.jpg")
    } else if(loc === "/books/new") {
      setBackImg("https://c4.wallpaperflare.com/wallpaper/0/1011/688/the-expanse-space-science-fiction-tv-series-tv-hd-wallpaper-preview.jpg")
    } else if(loc === "/characters/new") {
      setBackImg("https://images4.alphacoders.com/673/673780.jpg")
    } else if(loc === "/") {
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
            <Route exact path="/characters" element={ <CharacterList  characters={characters} setCharacters={setCharacters} changeBackground = {changeBackground}/> }/>
            <Route exact path="/books" element={ <BookList books={books} setBooks={setBooks} changeBackground = {changeBackground}/> }/> 
            <Route exact path="/books/new" element={ <NewBook addBook={addBook} setBooks={setBooks} changeBackground = {changeBackground}/> }/> 
            <Route exact path="/books/:id" element={ <BookDetail books={books} setBooks={setBooks} removeBook={removeBook} changeBackground = {changeBackground}/> }/>
            <Route exact path="/books/:id/edit" element={ <EditBook books={books} updateBook={updateBook} changeBackground = {changeBackground}/> }/> 
            <Route exact path="/books/:bookId/characters/new" element={ <NewCharacter addChar={addChar} updateBook={updateBook} books={books} changeBackground = {changeBackground}/> }/> 
            <Route exact path="/characters/:id" element={ <CharacterDetail updateBook={updateBook} books={books} setBooks={setBooks} removeCharacter={removeCharacter} characters={characters} setCharacters={setCharacters} changeBackground = {changeBackground}/> }/> 
            <Route exact path="/characters/:id/edit" element={ <EditCharacter books={books} changeBackground = {changeBackground}/> }/> 
            
            {/* <Route element={<PageNotFound/>} />         */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
