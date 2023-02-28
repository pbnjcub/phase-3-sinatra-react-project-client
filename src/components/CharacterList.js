import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = ({ changeBackground }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:9393/characters');
      const data = await resp.json();
      setCharacters(data);
      setLoading(false);
    }
    fetchData();
    changeBackground(location.pathname);
  }, [location.pathname, changeBackground]);

  if (loading) {
    return <h1 className="white-text"><b>Loading...</b></h1>;
  }

  return (
    <div>
      <div className="row">
        <h1 className="white-text"><b>Characters</b></h1>
        <div className="col s12 m6">
          {characters.map((character, index) => (
            <CharacterCard
              key={index}
              character={character}
              setCharacters={setCharacters}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;





// import React, { useState, useEffect } from 'react'
// import { useLocation} from 'react-router-dom'
// import CharacterCard from './CharacterCard'


// const CharacterList = ({changeBackground} ) => {
//     const [ characters, setCharacters] = useState([])
//     const [loading, setLoading] = useState(true)
//     const location = useLocation();

//     useEffect(() => {
//         async function fetchData() {
//             const resp = await fetch('http://localhost:9393/characters')
//             const data = await resp.json()
//             setCharacters(data);
//             setLoading(false)
//         }
//         fetchData()
//         changeBackground(location.pathname)
//     }, [location.pathname, changeBackground])


//     const characterCards = characters.map((character, index) => <CharacterCard key={index} character={character} setCharacters={setCharacters} />)
 
//     if(loading) {
//         return <h1 class="white-text"><b>loading...</b></h1>
//     } else {
//         return (
//             <div>
//                 <div class="row">
//                     <h1 class="white-text"><b>Characters</b> </h1>
//                     <div class="col s12 m6">
//                         {characterCards}
//                     </div>
//                 </div>
//             </div> 
//         )
//     }
// }

// export default CharacterList
