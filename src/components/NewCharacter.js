import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewCharacter = () => {

    const [newCharacter, setNewCharacter] = useState({
        name: "",
        description: "",
        location: "",
    })
    const navigate = useNavigate()

    function handleChange(e) {
        setNewCharacter({
            ...newCharacter,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = newCharacter
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch('http://localhost:9393/characters', options)
        // const data = await resp.json()

        //redirect
        navigate('/characters')
    }


    return (
        <div>
            <h1>Add a New Character Here</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input name="name" id="name" type="text" value={newCharacter.name} onChange={handleChange} autoFocus={true} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={newCharacter.description} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input name="location" id="description" type="text" value={newCharacter.location} onChange={handleChange}/>
                </div>
                <br />
                <input type="submit" value="Create Character"/>
            </form>
        </div>
    )
}

export default NewCharacter