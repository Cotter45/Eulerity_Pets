import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PetProfile from '../pet_profile';
import { Modal } from '../../../../context/Modal';

import './pet_modal.css';

function PetModal({ pet, showModal, setShowModal, index }) {

    const pets = useSelector(state => state.Pets_Data.pets);

    
    
    const [petIndex, setPetIndex] = useState(index);

    // checks for the target of the event so the modal doesnt close when 
    // trying to scroll pets and adds event listeners to close when 
    // the button is clicked or outside the modal is clicked
    useEffect(() => {
    
        const closer = (e) => {
            if (e.target.closest('.close') || !e.target.closest('#modal-content')) {
                setShowModal(false);
            }
        };

        document.addEventListener('click', closer)

        return () => {
            document.removeEventListener('click', closer);
        }
    }, [showModal, setShowModal]);

    // increments pet index to display next pet in pet list
    const handleScrollUp = () => {
        if (petIndex === pets.length - 1) {
            setPetIndex(0);
        } else {
            setPetIndex(petIndex + 1);
        }
    }

    // decrements pet index to display previous pet in pet list
    const handleScrollDown = () => {
        if (petIndex === 0) {
            setPetIndex(pets.length - 1);
        } else {
            setPetIndex(petIndex - 1);
        }
    }

  return (
    <div>
      {showModal && (
        <Modal id='pet_modal'>
            <button className='close'><i className="fas fa-times fa-2x"></i></button>
            <div className='navigate'>
                <button onClick={handleScrollDown}><i className="fas fa-arrow-left fa-2x"></i></button>
                <h1>Scroll</h1>  
                <button onClick={handleScrollUp}><i className="fas fa-arrow-right fa-2x"></i></button>
            </div>
            <PetProfile pet_from_modal={pets[petIndex]} />
        </Modal>
      )}
    </div>
  );
}

export default PetModal;