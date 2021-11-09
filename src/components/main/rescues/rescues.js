import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { saveAs } from 'file-saver';
import { useHistory } from 'react-router-dom';


import { SplitSection, SmallSplitSection, ColGrid, MainDragnDropContainer, ButtonConainer, Button } from '../../../styled_components/components';
import PetCard from './pet_card';
import { rescue_pet, save_pet } from '../../../store/pets';

function Rescue() {
    const dispatch = useDispatch();
    const history = useHistory();

    const pets = useSelector(state => state.Pets_Data.pets);

    // complete list of pets
    const [petsList, setPetsList] = useState(pets);
    // list of pets that are in line to be rescued
    const [rescues, setRescues] = useState([]);
    // list of pets that want to be rescued
    const [nextTimers, setNextTimers] = useState([]);
    // reminder to add to queue if no pets are in line and download selected
    const [reminder, setReminder] = useState(false);
    // notice if all pets are selected
    const [notice, setNotice] = useState(false);

    useEffect(() => {
        // need pets to be controlled by state, for drag and drop 
        setNextTimers(pets.filter(pet => !pet.upForRescue));
        setPetsList(pets);
        setRescues(pets.filter(pet => pet.upForRescue))
    }, [nextTimers.length, pets, rescues.length]);

    useEffect(() => {
        if (!reminder) return;

        const timer = setTimeout(() => {
            setReminder(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [reminder]);
    
    useEffect(() => {
        if (!notice) return;

        const timer = setTimeout(() => {
            setNotice(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [notice]);

    const moveCard = (dragIndex, hoverIndex, item) => {
        // find pet in complete list
        const pet = petsList.find(pet => pet.title === item.name);
        // if hasnt been moved, allow to move within nextTimer container
        if (!pet.upForRescue) {
            const dragCard = nextTimers[dragIndex];
            setNextTimers(
                update(nextTimers, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
                );
            // if has been moved, allow to move in rescue container
            } else if (pet.upForRescue) {
            const dragCard = rescues[dragIndex];
            setRescues(
                update(rescues, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            );
        }
    };

    // function just for moving from nextTimer to rescue
    const rescue = (item) => {
        // find actual card to move
        const dragCard = nextTimers.find(pet => pet.title === item.name || pet.title === item.title);
        setRescues([...rescues, dragCard]);
        setNextTimers(nextTimers.filter(pet => pet.title !== item.name || pet.title !== item.title));
    };

    const [{ isOverRescue }, queueRescue] = useDrop({
        accept: 'pet',
        collect: monitor => ({
            isOverRescue: monitor.isOver(),
        }),
        drop: (item, monitor) => {
            const pet = nextTimers.find(pet => pet.title === item.name);
            if (pet) {
                // make sure to mark pet in complete list as rescued
                dispatch(rescue_pet(pet))
                rescue(pet);
            }            
        },
    });

    // function to clear all pets from rescue queue 
    function sorryGuys() {
        setRescues([]);
        petsList.forEach(pet => pet.upForRescue = false);
        setNextTimers(petsList);
    }

    // handy package to handle downloads
    // will download 1 at a time
    function download(pets) {
        if (pets.length === 0) return setReminder(true);
        pets.forEach(pet => {
            // saveAs(pet.url, pet.title + '.jpg'); 
            if (pet) {
                setNextTimers(nextTimers.filter(timer => timer.title !== pet.title));
                setRescues(rescues.filter(rescue => rescue.title !== pet.title));
            }
            dispatch(save_pet(pet));
        })
    }

    // function to add all to rescue queue
    function selectAll() {
        if (nextTimers.length === 0) return setNotice(true);
        setNextTimers([]);
        petsList.forEach(pet => pet.upForRescue = true);
        setRescues(petsList);
    }


    return (
        <MainDragnDropContainer>
            <h2>Drag and drop to queue the rescue!</h2>
            <ButtonConainer>
                <Button onClick={() => {
                    download(petsList);
                    history.push('/about');
                }}>Rescue All</Button>
                <Button onClick={sorryGuys}>Not Today...</Button>
            </ButtonConainer>
            <SmallSplitSection>
                <Button onClick={selectAll}>Select All</Button>
                <Button onClick={() => download(rescues)}>Bring Home</Button>
            </SmallSplitSection>
            {reminder && <h3 style={{color: 'red', textAlign: 'center'}}>Please add pets to queue before downloading</h3>}
            {notice && <h3 style={{color: 'red', textAlign: 'center'}}>You've already selected everyone</h3>}
            <SplitSection>
                <ColGrid>
                    {nextTimers.length > 0 && nextTimers.map((pet, index) => (
                        <PetCard 
                            key={pet.title} 
                            moveCard={moveCard} 
                            pet={pet} 
                            index={index} 
                            nextTimers={nextTimers}
                            setNextTimers={setNextTimers}
                            rescues={rescues}
                            setRescues={setRescues}
                            rescue={rescue}
                        />
                        ))}
                </ColGrid>
                <ColGrid ref={queueRescue} style={{ backgroundImage: '/images/house.jpeg', boxShadow: isOverRescue ? '0px 5px 5px orange' : ''}}>
                    {rescues.length > 0 && rescues.map((pet, index) => (
                        <PetCard 
                            key={pet.title}
                            moveCard={moveCard} 
                            pet={pet} 
                            index={index}
                            nextTimers={nextTimers}
                            setNextTimers={setNextTimers}
                            rescues={rescues}
                            setRescues={setRescues} 
                        />
                    ))}
                </ColGrid>
            </SplitSection>
        </MainDragnDropContainer>
    )
}

export default Rescue;