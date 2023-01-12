import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewBook = () => {
    
    const [newBook, setNewBook] = useState({
        title: "",
        year_published: "",
        book_num: "",
        num_pages: "",
        isbn: "",
        award_id: "",
        description: "",
        type_of_book: ""
    })
    const navigate = useNavigate()

    function handleChange(e) {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        })

    }
   

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = newBook
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch('http://localhost:9393/books', options)
        // const data = await resp.json()

        //redirect
        navigate('/books')
    }

    return (
        <div>
            <h1>Add a New Book Here</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input name="title" id="title" type="text" value={newBook.title} onChange={handleChange} autoFocus={true}/>
                </div>
                <div>
                    <label htmlFor="year_published">Year Published:</label>
                    <input name="year_published" id="year_published" type="text" value={newBook.year} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="book_num">Book Number:</label>
                    <input name="book_num" id="book_num" type="text" value={newBook.book_num} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="type_of_book">Type:</label>
                    <input name="type_of_book" id="type_of_book" type="text" value={newBook.type} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="num_pages">Number of Pages:</label>
                    <input name="num_pages" id="num_pages" type="text" value={newBook.pages} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN:</label>
                    <input name="isbn" id="isbn" type="text" value={newBook.isbn} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="isbn">Description:</label>
                    <textarea name="description" id="isbn" value={newBook.description} onChange={handleChange}/>
                </div>
                <br />
                <input type="submit" value="Create Book"/>
            </form>
        </div>
    )
}

export default NewBook