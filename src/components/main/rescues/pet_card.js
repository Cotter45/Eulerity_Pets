import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

import { Card, Container, Image } from "../../../styled_components/components";


function PetCard({ pet, index, moveCard }) {

    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag({
        type: 'pet',
        item: { name: pet.title, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [{ isOver }, drop] = useDrop({
        accept: 'pet',
        hover(item, monitor) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            // calculate position of dragCard over currentCard
            const hoverBoundary = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundary.bottom - hoverBoundary.top) / 2;
            const hoverActualY = monitor.getClientOffset().y - hoverBoundary.top;

            // only move card if it is not over the middle of the currentCard so 
            // that it doesn't jump to the next card
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
        <Card ref={ref} style={{ opacity: isDragging ? .1 : 1}}>
            <img loading='eager' src={pet.url} alt={pet.title} />
        </Card>
    )
}

export default PetCard;