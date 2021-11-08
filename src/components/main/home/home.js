import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { get_pets } from '../../../store/pets';
import Loading from '../../../util/loading';

function Home() {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

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

    return (
        <main>
            {isLoading && !isError ? <Loading /> : !isLoading && isError ? <p>OOPS! Something went wrong...</p> :
                <>
                    <h1>Welcome to</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur consectetur,
                        nisi nisl aliquam eros, eget tincidunt nisl nisl eget
                        consectetur consectetur.
                    </p>
                </>
            }
        </main>
    )
}

export default Home;