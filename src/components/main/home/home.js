import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { get_pets } from '../../../store/pets';
import Loading from '../../../util/loading';
import { HeaderContainer, ImageCarousel, MainContainer, SplitArticle } from '../../../styled_components/components';

function Home() {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [petIndex, setPetIndex] = useState(0);

    const pets = useSelector(state => state.Pets_Data.pets);

    useEffect(() => {
        if (!isLoading) return;
        dispatch(get_pets())
            .catch(err => {
                setIsError(true);
                setIsLoading(false);
            });
        setIsLoading(false);
    }, [dispatch, isLoading]);

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
                <HeaderContainer>
                    <h1>Welcome to Sean's Pet Sanctuary!</h1>
                    <SplitArticle>
                        <ImageCarousel src={pets[petIndex]?.url} alt={pets[petIndex]?.name} />
                        <p>
                            Hi! My name is Sean, I'm a software developer based outside of Philadelphia and if there are 
                            two things I love in this world, it's making websites and ANIMALS! This website is a place to rescue these
                            beautiful beings from their cruel JSON cages. Hopefully we won't have to get Sarah McLachlan involved
                            and you can help us out!
                        </p>
                    </SplitArticle>
                </HeaderContainer>
            }
        </MainContainer>
    )
}

export default Home;