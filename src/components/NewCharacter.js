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
        <div > 
            <h1 class="white-text">Add a New Character Here</h1>
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col s12">
                        <h5 class="white-text">Name of Character:</h5>
                        <div class="input-field inline">
                            <input class="validate white-text" name="name" id="name" type="text" value={newCharacter.name} onChange={handleChange} autoFocus={true} />
                        </div>
                    </div>
                </div>
                    
                <div class="row">
                    <div class="input-field col s9">
                        <h5 class="white-text">Description of Character:</h5>
                        <textarea class="materialize-textarea white-text" name="description" id="description" value={newCharacter.description} onChange={handleChange}/>
                    </div>                   
                </div>
                <div class="row">
                    <div class="col s2">
                        <h5 class="white-text">Affiliation:</h5>
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

export default NewCharacter