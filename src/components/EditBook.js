import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditBook = ({updateBook, books, changeBackground}) => {
    const { id } = useParams()
    const book = books.find(book => book.id === parseInt(id))
    const [updatedBook, setUpdatedBook] = useState({
        title: book.title,
        year_published: book.year_published,
        book_num: book.book_num,
        num_pages: book.num_pages,
        isbn: book.isbn,
        award_id: "",
        description: book.description,
        type_of_book: book.type_of_book
    })
    const navigate = useNavigate()

    function handleChange(e) {
        setUpdatedBook({
            ...updatedBook,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = updatedBook
        const options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch(`http://localhost:9393/books/${book.id}`, options)
        const data = await resp.json()
        updateBook(data)
        //redirect
        navigate(`/books/${book.id}`)
    }

    return (
        <div>
            <h1 class="white-text">Update {book.title}</h1>
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col s6 white-text">
                        Book Title:
                        <div class="input-field inline">
                            <input class="validate white-text" name="title" id="title" type="text" value={updatedBook.title} onChange={handleChange} autoFocus={true}/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        Year Published:
                        <div class="input-field inline">
                            <input class="validate white-text" name="year_published" id="year_published" type="text" value={updatedBook.year} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col s6 white-text">
                        Book Number:
                        <div class="input field-inline">
                            <input class="validate white-text" name="book_num" id="book_num" type="text" value={updatedBook.book_num} onChange={handleChange}/>
                        </div>
                    </div>                   
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        Type of Book:
                        <div class="input field-inline">
                            <input class="validate white-text" name="type_of_book" id="type_of_book" type="text" value={updatedBook.type} onChange={handleChange}/>
                        </div>
                    </div>                  
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        Number of Pages:
                        <div class="input field-inline">
                            <input class="validate white-text" name="num_pages" id="num_pages" type="text" value={updatedBook.pages} onChange={handleChange}/>
                        </div>
                    </div>                   
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        ISBN:
                        <div class="input field-inline">
                            <input class="validate white-text" name="isbn" id="isbn" type="text" value={updatedBook.isbn} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 white-text">
                        Description:
                        <textarea class="materialize-textarea white-text" name="description" id="description" value={updatedBook.description} onChange={handleChange}/>
                    </div>
                </div>
                <br />
                <input class="waves-effect waves-light btn" type="submit" value="Update"/>
            </form>
        </div>
    )
}


export default EditBook