import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Container, Image, MainContainer, SplitSection } from '../../../styled_components/components';
import Footer from '../../footer/footer';

function Home() {
    const history = useHistory();
    
    // used for carousel of pets
    const [petIndex, setPetIndex] = useState(0);

    const pets = useSelector(state => state.Pets_Data.pets);

    // change petInterval every 5 seconds 
    useEffect(() => {
        if (pets.length === 0) return;
        const length = pets.length;
        const interval = setInterval(() => {
            setPetIndex(petIndex + 1 >= length ? 0 : petIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [petIndex, pets.length])

    return (
        <MainContainer>
            <Container>
                <h1>Welcome to Sean's Pet Sanctuary!</h1>
                <SplitSection>
                    <Image loading='eager' src={pets.length > 0 ? pets[petIndex]?.url : '/images/blur.jpeg'} alt={pets[petIndex]?.name} />
                    <p>
                        Hi! My name is Sean, I'm a software developer based outside of Philly and if there are 
                        two things I love in this world, it's making websites and ANIMALS! This website is a place to rescue these
                        beautiful beings from their cruel JSON cages. Hopefully we won't have to get Sarah McLachlan involved
                        and you can help us out!
                    </p>
                </SplitSection>
                <Container className='description-box'>
                    <h2 onClick={() => history.push(`/rescue/${pets[petIndex].title?.split(' ').join('').toLowerCase()}`)}>Hello, {pets[petIndex]?.title}</h2>
                    <p>
                        {pets[petIndex]?.description}
                    </p>
                </Container>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default Home;