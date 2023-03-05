import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import BookCard from './BookCard'

const CharacterDetail = ({characters, removeCharacter, books, setBooks, updatedBooks}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const character = characters.find(character => character.id === parseInt(id))
    
    const deleteCharacter = id => {
        console.log('deleteCharacter called with id:', id);
        fetch(`http://localhost:9393/characters/${character.id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Character deleted:', data);
            removeCharacter(data);
            updateBooks();
        })
        .catch(error => {
            console.error('Error deleting character:', error);
        });
        navigate('/characters');
        console.log('Navigated to /characters');
    };

    //update state of every book associated with character

    // const updateBooks = () => {
    //     console.log('updateBooks called');
    //     const characterIndex = character.index;
      
    //     console.log('characterIndex:', characterIndex);
      
    //     const updatedBooks = books.map(book => {
    //       const updatedCharacters = book.characters.filter((_, index) => index !== characterIndex);
    //       return {...book, characters: updatedCharacters};
    //     });
      
    //     console.log('updatedBooks:', updatedBooks);
      
    //     setBooks(updatedBooks);
    //   }
      
    // const updateBooks = () => {
    //     console.log('updateBooks called');
    //     const characterIndex = character.index;
      
    //     console.log('characterIndex:', characterIndex);
      
    //     const updatedBooks = books.map(book => {
    //       const updatedCharacters = [...book.characters];
    //       updatedCharacters.splice(characterIndex, 1);
    //       return {...book, characters: updatedCharacters};
    //     });
      
    //     console.log('updatedBooks:', updatedBooks);
      
    //     setBooks(updatedBooks);
    //   }
      
    const updateBooks = () => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:9393/books');
            const data = await resp.json();
              setBooks(data);
        };
        fetchData();
    }
    // const updateBooks = () => {
    //     console.log('updateBooks called');
    //     const bookIds = character.books.map(book => book.id);
    //     console.log('bookIds:', bookIds);
    //     const updatedBooks = books.map(book => {
    //         if (bookIds.includes(book.id)) {
    //             console.log('book.id:', book.id);
    //             console.log('book:', book);
    //             const characterIndex = book.characters.findIndex(character => character.id === id);
    //             console.log(characterIndex + 1)
    //             const updatedBook = {...book, characters: book.characters.filter(character => character.index !== parseInt(characterIndex + 1))};
    //             console.log('updatedBook:', updatedBook);
    //             return updatedBook;
    //         } else {
    //             return book;
    //         }
    //     });
    //     console.log('updatedBooks:', updatedBooks);
    //     setBooks(updatedBooks)
    // }

    
    



    const bookCards = character.books.map((book, index) => <BookCard key={index} book = {book} character={character}/>)
    return (
        <div>
            <div class="row white-text">
                <div class="col s6 m6">
                    <h1><b>{character.name}</b></h1>
                    <div class="col s6 m6" style={{columnGap: 100}}>
                        <button class="waves-effect waves-light btn" onClick={deleteCharacter}>Delete Character</button>
                        <NavLink to={`/characters/${character.id}/edit`}>
                            <button class="waves-effect waves-light btn">Update Character</button>
                        </NavLink>
                    </div> 
                </div>
            </div> 
            <div class="row white-text">

                <div>
                    <span style={{ fontWeight: 'bold' }}>Description: </span> {character.description}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>Affiliation: </span> {character.location}
                    <br />
                    <h2>Books Featured in:</h2>
                    { bookCards }
                </div>
            </div>
        </div>
        )
}
    


export default CharacterDetail