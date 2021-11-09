const GET_PETS = 'api/get_all_pets';
const RESCUE_PET = 'rescue_pet';
const SAVE_PET = 'save_pet';

const save_pet_action = (pet) => {
    return {
        type: SAVE_PET,
        payload: pet
    }
}

export const save_pet = (pet) => {
    return (dispatch) => {
        dispatch(save_pet_action(pet));
    }
}

const rescue_pet_action = (pet) => {
    return {
        type: RESCUE_PET,
        payload: pet
    }
};

export const rescue_pet = (pet) => {
    return (dispatch) => {
        dispatch(rescue_pet_action(pet));
    }
};

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
        case RESCUE_PET:
            const pet = state.pets.find(pet => pet.title === action.payload.title);
            if (pet) pet.upForRescue = true;
            return { ...state };
        case SAVE_PET:
            state.pets.filter(pet => pet.title !== action.payload.title);
            return { ...state };
        default:
            return state;
    }
}