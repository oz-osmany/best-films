import { ChevronDown, Heart, MapPin } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import Modal from './Modal';
import ReactModal from 'react-modal';
import { useCinemaStore } from '@/store/cinemaStore';

const Search = () => {
  const { selectedCinema } = useCinemaStore();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    // Check when assembling
    handleResize();
    
    // Listen for size changes
    window.addEventListener('resize', handleResize);

    // Clean up the listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (!modalIsOpen) {
      document.body.classList.remove('overflow-hidden');
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="lg:mx-auto ">
      <div
        ref={searchRef}
        className="relative z-30 md:z-40 pointer-events-auto flex w-full h-[48px] lg:h-[68px] rounded-[8px] border border-solid"
      >
        <input
          type="text"
          name="search"
          placeholder={selectedCinema?.name}
          onClick={openModal}
          className="w-full pl-[54px] pr-[40px] py-2 bg-transparent cursor-pointer"
        />

        <div className="flex mr-2 items-center justify-center h-full w-[40px] bg-transparent">
          <ChevronDown className="stroke-white" />
        </div>
        <div className="hidden lg:flex items-center">
          <Button className="px-4 h-[54px] btn mr-2">
            <MapPin /> Nearby
          </Button>
          <Button className="px-4 h-[54px] btn mr-2">
            <Heart /> My cinema
          </Button>
        </div>
      </div>
      {modalIsOpen ? (
        isLargeScreen ? (
          <div className="relative z-40 w-full bg-white shadow-lg max-h-[500px] overflow-y-scroll ">
            <Modal closeModal={closeModal} />
          </div>
        ) : (
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="fixed lg:left-0 inset-0 bg-black/50 flex justify-center items-center z-40"
            className="modal "
            bodyOpenClassName="overflow-hidden"
          >
            <Modal closeModal={closeModal} />
          </ReactModal>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
