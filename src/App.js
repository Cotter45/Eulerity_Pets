import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { get_pets } from './store/pets';
import Loading from './util/loading';

import NavBar from "./components/nav_bar/nav_bar";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();

    // if fetch takes too long, or to prevent memory leak 
    const [isLoading, setIsLoading] = useState(true);
    // if there is an error, set to true
    const [isError, setIsError] = useState(false);

    const pets = useSelector(state => state.Pets_Data.pets);

    // on app load, fetch pets
    useEffect(() => {
        if (!isLoading) return;
        dispatch(get_pets())
            .catch(err => {
                setIsError(true);
                setIsLoading(false);
            });
        setIsLoading(false);
    }, [dispatch, isLoading, pets.length]);

  return (
    <>
    {isLoading && !isError ? <Loading /> : !isLoading && isError ? <p>OOPS! Something went wrong...</p> :
    <>
      <NavBar />
      <Routes />
    </>
  }
    </>
  );
}

export default App;
