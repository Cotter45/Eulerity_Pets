import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

import { Button, ButtonConainer, Container, Image, MainContainer, SmallSplitSection } from '../../../styled_components/components';
import { rescue_pet, save_pet } from '../../../store/pets';

function PetProfile({ pet_from_modal, rescue, nextTimers, setNextTimers, rescues, setRescues }) {
    const { name } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const pets = useSelector(state => state.Pets_Data.pets);

    // find pet by params and pet title the same way as the route was set because there are no ids
    // or if this is a modal, use the pet from the modal
    let pet = pet_from_modal || pets.find(pet => pet.title.split(' ').join('').toLowerCase() === name);

    // keep track of rescue clicks
    const [upForRescue, setUpForRescue] = useState(false);
    // keep track of downloads
    const [saved, setSaved] = useState(false);
    
    // if the pet is already rescued, set the state to display rescue route
    useEffect(() => {
        if (!pet) return;
        setUpForRescue(pet.upForRescue);
    }, [pet]);

    // handy package to handle downloads
    const download = () => {
        saveAs(pet.url, pet.title + '.jpg'); 
        if (pet_from_modal) {
            setNextTimers(nextTimers.filter(timer => timer.title !== pet.title));
            setRescues(rescues.filter(rescue => rescue.title !== pet.title));
        }
        dispatch(save_pet(pet));
        setSaved(true);
    }

    return (
        <MainContainer>
            {pet && (
                <Container>
                    <h2>{pet.title}</h2>
                    <p>Looking for a home since {new Date(pet.created).toLocaleDateString()}</p>
                    <SmallSplitSection>
                        <Image src={pet.url} alt={pet.title} />
                        <p>{pet.description}</p>
                    </SmallSplitSection>
                </Container>
            )}
            <ButtonConainer>
                {!saved && (
                    <Button onClick={download}>Rescue</Button>
                )}
                {!upForRescue && !saved && (
                    <Button
                        onClick={() => {
                            dispatch(rescue_pet(pet));
                            setUpForRescue(true);
                            if (rescue) rescue(pet);
                        }}
                    >Maybe</Button>
                )}
                {upForRescue && <p>Head to the <Button onClick={() => history.push('/rescue')}>rescue</Button> tab to save my friends!</p>}
            </ButtonConainer>
        </MainContainer>
    )
}

export default PetProfile;