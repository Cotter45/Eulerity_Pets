import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


import { get_pets } from '../../../store/pets';
import { Container, Image, MainContainer, SplitSection } from '../../../styled_components/components';
import Loading from '../../../util/loading';
import Footer from '../../footer/footer';

function Home() {
    const dispatch = useDispatch();

    // if fetch takes too long, or to prevent memory leak 
    const [isLoading, setIsLoading] = useState(true);
    // if there is an error, set to true
    const [isError, setIsError] = useState(false);
    // used for carousel of pets
    const [petIndex, setPetIndex] = useState(0);

    const pets = useSelector(state => state.Pets_Data.pets);

    // on page load, fetch pets
    useEffect(() => {
        if (!isLoading) return;
        dispatch(get_pets())
            .catch(err => {
                setIsError(true);
                setIsLoading(false);
            });
        setIsLoading(false);
    }, [dispatch, isLoading, pets.length]);

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
            {isLoading && !isError ? <Loading /> : !isLoading && isError ? <p>OOPS! Something went wrong...</p> :
            <>
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
                    <Container>
                        <h1>Hello, {pets[petIndex]?.title}</h1>
                        <p>
                            {pets[petIndex]?.description}
                        </p>
                    </Container>
                </Container>
            </>
            }
            <Footer />
        </MainContainer>
    )
}

export default Home;