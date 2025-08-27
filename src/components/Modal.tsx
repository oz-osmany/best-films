import React, { ReactNode, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Heart, MapPin, Search } from 'lucide-react';
import { cinemas } from '../api/cinemas';
import { useCinemaStore } from '@/store/cinemaStore';
import { Cinema } from '@/types/typeCinema';

type ModalProps = {
  children?: ReactNode;
  closeModal: () => void;
};
const Modal = ({ closeModal }: ModalProps) => {
  const [search, setSearch] = useState<string>('');

  const { selectCinema } = useCinemaStore();
  const selection = (item: Cinema) => {
    closeModal();
    selectCinema(item);
  };
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  const filterCinema = useMemo(() => {
    return cinemas.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return createPortal(
    <div className="modal inset-0 bg-black/70 flex flex-col justify-center items-center  z-50">
      <div className="sticky top-0 flex flex-col w-full bg-white z-10 p-4 border-b flex justify-between items-center">
        <div className="flex justify-end w-full">
          <button onClick={closeModal} className="text-black hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="w-full">
          <h2 className="text-lg text-black font-bold">Look for a cinema</h2>
          <div className="flex items-center justify-around text-black bg-gray-200 w-full h-[50px]">
            <Search className="w-[16px]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filmspalast, Berlin"
              className="w-[85%] h-[80%] bg-transparent pl-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto w-full flex-1 p-4 bg-gray-100">
        <div className="flex items-center w-full h-[50px] bg-white ">
          <MapPin className="text-black mx-3" /> <p className="text-black">Nearby</p>
        </div>
        <div className="flex items-center w-full h-[50px] bg-white mt-2">
          <Heart className="text-black mx-3" /> <p className="text-black">My cinema</p>
        </div>
        <ul className="modal__list text-black p-4">
          {filterCinema.map((item) => {
            return (
              <li className="border-b border-gray-300" key={item.id}>
                <div className="font-medium text-sm" onClick={() => selection(item)}>
                  {item.name}
                </div>
                <div className="text-gray-400 mb-3 text-xs">{item.city}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
