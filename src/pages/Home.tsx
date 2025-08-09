import Banner from '@/components/Banner';

import { ChevronDown, Heart, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Now from '@/components/Now';
import Special from '@/components/Special';
import New from '@/components/New';
import Comming from '@/components/Comming';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import Modal from '../components/Modal';

ReactModal.setAppElement('#root');
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

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

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <section className="banner relative z-0 h-[544px] md:h-[580px] xl:h-[780px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <Banner />
        <div className="separador"></div>
      </section>
      <div className="show__content show__content-fix md:bottom-[60px] ">
        {/* Search */}
        <div className="lg:w-[90%] lg:mx-auto ">
          <div
            ref={searchRef}
            className="relative z-30 md:z-40 pointer-events-auto flex w-full h-[64px] rounded-sm border border-solid"
          >
            <input
              type="text"
              name="search"
              placeholder="Look for a cinema"
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
        {/* Now showing */}
        <section className="w-full h-[370px]">
          <Now />
        </section>
        {/* Special&Events */}
        <section className="w-full h-[370px]">
          <Special />
        </section>
        <section className="overflow-x-auto w-full h-[400px] md:h-[500px]">
          <New />
        </section>
        {/* Comming soon */}
        <section className="w-full h-[370px]">
          <Comming />
        </section>
        {/* Footer */}
        <section className="w-full h-auto">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
