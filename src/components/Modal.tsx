import React from 'react';
import { ChevronDown, Heart, MapPin, Search } from 'lucide-react';
import { cinemas } from '../api/cinemas';

type Props = {
  closeModal: () => void;
};
const Modal = ({ closeModal }: Props) => {
  return (
    <>
      <div className="sticky top-0 flex flex-col bg-white z-10 p-4 border-b flex justify-between items-center">
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
              placeholder="Filmspalast, Berlin"
              className="w-[85%] h-[80%] bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 p-4 bg-gray-100">
        <div className="flex items-center w-full h-[50px] bg-white ">
          <MapPin className="text-black mx-3" /> <p className="text-black">Nearby</p>
        </div>
        <div className="flex items-center w-full h-[50px] bg-white mt-2">
          <Heart className="text-black mx-3" /> <p className="text-black">My cinema</p>
        </div>
        <ul className="text-black p-4">
          {cinemas.map((items) => {
            return (
              <li className="border-b border-gray-300">
                <div className="font-medium text-sm">{items.name}</div>
                <div className="text-gray-400 mb-3 text-xs">{items.city}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Modal;
