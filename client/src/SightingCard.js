import { deleteSighting } from "./SightingService"
import styled from 'styled-component'

const cardOfSighting = styled.div`
    display: flex;
    flex-direction: column;
    
`

const SightingCard = ({sighting, removeSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }
    return (
        <div>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </div>
    )
}

export default SightingCard;