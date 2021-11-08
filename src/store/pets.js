const GET_PETS = 'api/get_all_pets';

const get_pets_action = (pets) => {
    return {
        type: GET_PETS,
        payload: pets
    }
}

export const get_pets = () => async (dispatch) => {
    const response = await fetch('http://eulerity-hackathon.appspot.com/pets', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const pets = await response.json();
    dispatch(get_pets_action(pets));
    return pets;
}




const initialState = { pets: [] };

export default function Pets_Data(state = initialState, action) {
    switch (action.type) {
        case GET_PETS:
            return { ...state, pets: action.payload };
        default:
            return state;
    }
}