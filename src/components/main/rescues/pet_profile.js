import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Container, Image, MainContainer, SmallSplitSection, SplitSection } from '../../../styled_components/components';

function PetProfile({ pet_from_modal }) {
    const { name } = useParams();

    const pets = useSelector(state => state.Pets_Data.pets);

    // find pet by params and pet title the same way as the route was set because there are no ids
    // or if this is a modal, use the pet from the modal
    let pet = pet_from_modal || pets.find(pet => pet.title.split(' ').join('').toLowerCase() === name);

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
        </MainContainer>
    )
}

export default PetProfile;