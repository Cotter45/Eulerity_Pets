import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PetProfile() {
    const { name } = useParams();

    const pets = useSelector(state => state.Pets_Data.pets);

    // const pet = pets?.find(pet => /pet.name/i.match(name));

    return (
        <div>
            <h1>Pet Profile</h1>
        </div>
    )
}

export default PetProfile;