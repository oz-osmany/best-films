import { useTicket } from '@/store/ticket';
import { Info } from 'lucide-react';
import React from 'react';
interface Info {
  day: string;
  time: string;
}

const InfoTicket = ({ day, time }: Info) => {
  const { selectedTotal, selectedSeat } = useTicket();
  return (
    <>
      <div className="flex flex-col pt-[70px] h-[305px] w-full bg-gray-700 text-white">
        <div className="flex pb-[30px]">
          <div className="flex justify-center w-[33%] px-2">
            <p className="text-[30px] font-bold text-center">{day}</p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-center items-center w-[33%]">
            <p className="text-[30px] font-bold">{time}</p>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col items-center w-[33%]">
            <p className="text-[30px] font-bold">{selectedSeat}</p>
            <p className="text-[30px] font-bold">Seat</p>
          </div>
        </div>
        <div className="w-[90%] p-3 mx-auto rounded-[30px] bg-gray-400 text-center text-white text-[25px] font-medium">
          Change my seat
        </div>
      </div>
      <div className="hidden md:block ticket"></div>
      {selectedTotal == 0 ? (
        <div className="hidden lg:flex justify-between items-center w-full h-[100px] px-[20px] bg-[#ffdc7d] text-black">
          <div className="text-[25px] font-bold">Total</div>
          <div className="text-[25px] font-bold">€ {selectedTotal},00</div>
        </div>
      ) : (
        <div className="w-full h-[200px] bg-white text-black">
          <h1 className=" text-center py-4 font-bold">My ticket</h1>
          <div className="flex justify-between text-[25px] px-6">
            <div className="flex">
              <p className="font-bold">1x</p>
              <p className="ml-4 font-medium text-[25px]">Filmticket Relax Seat</p>
            </div>
            <div className="font-bold"> €{selectedTotal},00 </div>
          </div>
          <div className="flex justify-between text-gray-400 text-[25px] px-6">
            <div className="flex items-center gap-3">
              Booking fees
              <Info stroke="black" />
            </div>
            <div>€0,50</div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoTicket;
