import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation} from 'react-router-dom'

const NewCharacter = ({books, updateBook, addChar, changeBackground}) => {
    const { bookId } = useParams()
    const book = books.find(book => book.id === parseInt(bookId))
    console.log("book:", book)
    const [newCharacter, setNewCharacter] = useState({
        name: "",
        description: "",
        location: "",
        book_id: bookId,
    })
    console.log("newCharacter:", newCharacter)

    const navigate = useNavigate()
    const location = useLocation();

    function handleChange(e) {
        setNewCharacter({
            ...newCharacter,
            [e.target.name]: e.target.value,
        })
        console.log("newCharacter:", newCharacter)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(newCharacter)
        }
        const resp = await fetch('http://localhost:9393/characters', options)
        const data = await resp.json()
        console.log("handleSubmit data:", data)
        addChar(data)
        updateBookChar()
        navigate(`/books/${book.id}`)
    }

    const updateBookChar = () => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:9393/books/${bookId}`)
            const data = await resp.json()
            console.log("updateBook data:", data)
            updateBook(data)
        }
        fetchData()
            .catch(console.error)
    }

    return (
        <div > 
            <h1 class="white-text">Add a New Character Here</h1>
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col s6 white-text">
                        Name of Character:
                        <div class="input-field inline">
                            <input class="validate white-text" name="name" id="name" type="text" value={newCharacter.name} onChange={handleChange} autoFocus={true} />
                        </div>
                    </div>
                </div>
                    
                <div class="row">
                    <div class="col s6 white-text">
                        Description of Character:
                        <textarea class="materialize-textarea white-text" name="description" id="description" value={newCharacter.description} onChange={handleChange}/>
                    </div>                   
                </div>
                <div class="row">
                    <div class="col s3 white-text">
                        Affiliation:
                        <div class="input-field-inline">
                            <input class="validate white-text" name="location" id="description" type="text" value={newCharacter.location} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <br />
                <input class="waves-effect waves-light btn" type="submit" value="Create Character"/>
            </form>
        </div>
    )
}

// const NewCharacter = ({books, changeBackground}) => {
//     const { bookId } = useParams()
//     const book = books.find(book => book.id === parseInt(bookId))
//     console.log(book)
//     const [newCharacter, setNewCharacter] = useState({
//         name: "",
//         description: "",
//         location: "",
//         book_id: bookId,
//     })

//     const navigate = useNavigate()
//     const location = useLocation();

//     // useEffect(() => {
//     //     changeBackground(location.pathname)
//     //     // const fetchData = async () => {
//     //     //     const resp = await fetch(`http://localhost:9393/books/${bookId}`)
//     //     //     const data = await resp.json()
//     //     //     setBook(data)
//     //     //     setLoading(false)
//     //     // }
//     //     // fetchData()
//     //     //     .catch(console.error)

//     // }, [location.pathname, changeBackground])

//     function handleChange(e) {
//         setNewCharacter({
//             ...newCharacter,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const handleSubmit = async e => {
//         e.preventDefault()
//         const headers = {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }

//         const options = {
//             method: "POST",
//             headers,
//             body: JSON.stringify(newCharacter)
//         }
//         const resp = await fetch('http://localhost:9393/characters', options)
//         const data = await resp.json()
//         updateBook()
//         navigate(`/books/${book.id}`)
//     }



//     const updateBook = () => {
//         const fetchData = async () => {
//             const resp = await fetch(`http://localhost:9393/books/${bookId}`)
//             const data = await resp.json()
//             location.state.setBook(data)
//         }
//         fetchData()
//             .catch(console.error)
//     }


//     return (
//         <div > 
//             <h1 class="white-text">Add a New Character Here</h1>
//             <form class="col s12" onSubmit={handleSubmit}>
//                 <div class="row">
//                     <div class="col s6 white-text">
//                         Name of Character:
//                         <div class="input-field inline">
//                             <input class="validate white-text" name="name" id="name" type="text" value={newCharacter.name} onChange={handleChange} autoFocus={true} />
//                         </div>
//                     </div>
//                 </div>
                    
//                 <div class="row">
//                     <div class="col s6 white-text">
//                         Description of Character:
//                         <textarea class="materialize-textarea white-text" name="description" id="description" value={newCharacter.description} onChange={handleChange}/>
//                     </div>                   
//                 </div>
//                 <div class="row">
//                     <div class="col s3 white-text">
//                         Affiliation:
//                         <div class="input-field-inline">
//                             <input class="validate white-text" name="location" id="description" type="text" value={newCharacter.location} onChange={handleChange}/>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <input class="waves-effect waves-light btn" type="submit" value="Create Character"/>
//             </form>
//         </div>
//     )
// }
    

export default NewCharacter