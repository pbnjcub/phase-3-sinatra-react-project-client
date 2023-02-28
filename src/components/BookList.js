import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { useLocation, NavLink } from 'react-router-dom';

const BookList = ({ changeBackground }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('http://localhost:9393/books');
      const data = await resp.json();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
    changeBackground(location.pathname);
  }, [changeBackground, location.pathname]);

  const renderBookCards = () => {
    return books.map((book, index) => (
      <BookCard key={index} book={book} books={books} setBooks={setBooks} />
    ));
  };

  return (
    <div>
      <div className="row">
        <h1 className="white-text">
          <b>Books</b>
        </h1>
        <div className="col s12 m6">{renderBookCards()}</div>
      </div>
      <div className="row">
        <div className="col s2 m2">
          <NavLink to="/books/new" className="waves-effect waves-light btn">
            New Book
          </NavLink>
        </div>
      </div>
      {loading && <h1 className="white-text"><b>Loading...</b></h1>}
    </div>
  );
};

export default BookList;












// import React, { useEffect, useState} from 'react'
// import BookCard from './BookCard'
// import { useLocation} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'

// const BookList = ({changeBackground}) => {
//     const [ books, setBooks] = useState([])
//     const [loading, setLoading] = useState(true)
//     const location = useLocation();

//     useEffect(() => {
//         async function fetchData() {
//             const resp = await fetch('http://localhost:9393/books')
//             const data = await resp.json()
//             setBooks(data)
//             setLoading(false)
//         }
//         fetchData()
//         changeBackground(location.pathname)
//     }, [location.pathname, changeBackground])


//     const bookCards = books.map((book, index) => <BookCard key={index} book={book} books={books} setBooks={setBooks}/>)
 


//     if(loading) {
//         return <h1 class="white-text"><b>loading...</b></h1>
//     } else {
//         return (
//             <div>
//                 <div class="row">
//                     <h1 class="white-text"><b>Books</b></h1>
//                     <div class="col s12 m6">
//                         {bookCards}
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col s2 m2">
//                         <NavLink to="/books/new" class="waves-effect waves-light btn">
//                                 New Book
//                         </NavLink>     
//                     </div>                
//                 </div>
//             </div>
//         )
//     }
    
// }

// export default BookList