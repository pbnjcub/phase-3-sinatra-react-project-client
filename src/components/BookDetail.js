import React from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import CharacterCard from './CharacterCard'

const BookDetail = ({books, removeBook}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const book = books.find(book => book.id === parseInt(id))
    console.log(book.id)   
    function deleteBook(id) {
        fetch(`http://localhost:9393/books/${book.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Book deleted:', data);
        })
        .catch(error => {
            console.error('Error deleting book:', error);
        });
        removeBook(book.id)
        navigate('/books')
    }
    // const deleteBook = async id => {
    //     const resp = await fetch(`http://localhost:9393/books/${id}`, {
    //         method: 'DELETE',
    //     });
    //     const data = await resp.json()
    //     removeBook(book.id)
    //     navigate('/books')
    // }
    // const deleteBook = async id => {
    //     const resp = await fetch(`http://localhost:9393/books/${id}`, { 
    //         method: 'DELETE',
    //     });
    //     const data = await resp.json()
    //     removeBook(id)
    //     navigate('/books')
    // }

    const characterCards = book.characters.map((character, index) => (<CharacterCard key={index} character={character} book={book} />));
      
      return (
        <div>
          <div class="row white-text">
            <div class="col s6 m6">
              <h1>{book.title}</h1>
              <div class="col s6 m6">
                <button class="waves-effect waves-light btn" onClick={deleteBook}>Delete Book</button>
                <NavLink to={`/books/${book.id}/edit`}>
                  <button class="waves-effect waves-light btn">Update Book</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="row white-text">
            <div class="col s6 m6">
              <span style={{ fontWeight: "bold" }}>Year Published: </span>{" "}
              {book.year_published}
              <br />
              <span style={{ fontWeight: "bold" }}>Book Number: </span> {book.book_num}
              <br />
              <span style={{ fontWeight: "bold" }}>Number of Pages: </span>{" "}
              {book.num_pages}
              <br />
              <span style={{ fontWeight: "bold" }}>Book Type: </span>{" "}
              {book.type_of_book}
              <br />
              <span style={{ fontWeight: "bold" }}>Description: </span>{" "}
              {book.description}
              <br />
              <h2>Featured Characters</h2>
              {characterCards}
            </div>
          </div>
          <div class="row">
            <div class="col s2 m2">
              <NavLink to={`/books/${book.id}/characters/new`} state={{ book: book }}>
                <button class="waves-effect waves-light btn">
                    Add Character to Book
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      );
}      
export default BookDetail