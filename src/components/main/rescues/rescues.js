import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { v4 as uuidv4 } from 'uuid';

import { MainContainer, Container, SplitSection, ColDiv, SmallSplitSection, ColGrid, FlexDiv, MainDragnDropContainer, ButtonConainer, Button } from '../../../styled_components/components';
import PetCard from './pet_card';
import { rescue_pet } from '../../../store/pets';

function Rescue() {
    const dispatch = useDispatch();

    const pets = useSelector(state => state.Pets_Data.pets);

    // complete list of pets
    const [petsList, setPetsList] = useState(pets);
    // list of pets that are in line to be rescued
    const [rescues, setRescues] = useState([]);
    // list of pets that want to be rescued
    const [nextTimers, setNextTimers] = useState([]);

    useEffect(() => {
        // need pets to be controlled by state, but not 
        // updated if every pet is rescued
        // if (nextTimers.length || rescues.length) return;
        setNextTimers(pets.filter(pet => !pet.upForRescue));
        setPetsList(pets);
        setRescues(pets.filter(pet => pet.upForRescue))
    }, [nextTimers.length, pets, rescues.length]);

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
        setNextTimers(petsList);
        petsList.forEach(pet => pet.upForRescue = false);
    }


    return (
        <MainDragnDropContainer>
            <h2>Drag and drop to queue the rescue!</h2>
            <ButtonConainer>
                <Button>Rescue All</Button>
                <Button onClick={sorryGuys}>Not Today...</Button>
            </ButtonConainer>
            <SmallSplitSection>
                <Button>Select All</Button>
                <Button>Bring Home</Button>
            </SmallSplitSection>
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