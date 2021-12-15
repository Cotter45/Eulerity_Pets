import { useDrag, useDrop } from 'react-dnd';
import { useRef, useState } from 'react';

import { Card } from "../../../styled_components/components";
import PetModal from './pet_modal';


function PetCard({ pet, index, moveCard, rescue, nextTimers, setNextTimers, rescues, setRescues }) {

    const ref = useRef(null);
    // going to use this to open modal when clicked
    const [showModal, setShowModal] = useState(false);

    const [{ isDragging }, drag] = useDrag({
        type: 'pet',
        item: { name: pet.title, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop] = useDrop({
        accept: 'pet',
        hover(item, monitor) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            // calculate position of dragCard over currentCard
            const hoverBoundary = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundary.bottom - hoverBoundary.top) / 2;
            const hoverActualY = monitor.getClientOffset().y - hoverBoundary.top;

            // only move card if it is past the middle of the hoverCard so 
            // that it doesn't jump to the next card and flicker
            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

            // dont move card if its over 'itself'
            if (dragIndex === hoverIndex) return;

            moveCard(dragIndex, hoverIndex, item);
            item.index = hoverIndex;
        }
    })

    // drag / drop context for specific card
    drag(drop(ref));

    return (
        <Card 
            ref={ref} 
            onClick={() => setShowModal(true)}
            style={{ opacity: isDragging ? .1 : 1}}
            id='pet'
        >
            <img loading='lazy' src={pet.url} alt={pet.title} />
            <p>{pet.title}</p>
            {showModal && (
                <PetModal 
                    rescue={rescue} 
                    index={index} 
                    pet={pet} 
                    setShowModal={setShowModal} 
                    showModal={showModal} 
                    nextTimers={nextTimers}
                    setNextTimers={setNextTimers}
                    rescues={rescues}
                    setRescues={setRescues}
                />
            )}
        </Card>
    )
}

export default PetCard;