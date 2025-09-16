import { useTicket } from '@/store/ticket';
import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Ticket = () => {
  const { id } = useParams();
  const [count, setCount] = useState<number>(0);
  const [countF, setCountF] = useState<number>(0);
  const { selectTotal, selectedSeat } = useTicket();

  const setFilm = (value: number) => {
    if (value === 0) {
      if (countF > 0) {
        setCountF(countF - 1);
        selectTotal((countF - 1) * 16);
      }
    } else {
      if (countF + 1 <= selectedSeat) {
        setCountF(countF + 1);
        selectTotal((countF + 1) * 16);
      }
    }
  };
  const setStad = (value: number) => {
    if (value === 0) {
      if (count > 0) {
        setCount(count - 1);
        selectTotal((count - 1) * 10);
      }
    } else {
      if (count + 1 <= selectedSeat) {
        setCount(count + 1);
        selectTotal((count + 1) * 10);
      }
    }
  };

  return (
    <div className="h-[100vh] pt-3 pb-[40px] text-black rounded-t-[10px] bg-[#f8f8f8]">
      <div className="bg-[#d8d0d042] rounded-[10px] py-2 px-4 mb-4 mx-3">Auditorium 7</div>
      <div className="w-full lg:w-[90%] mx-auto flex flex-col justify-center">
        <div className="flex items-center flex-col pb-4 lg:pb-8">
          <h1 className="font-bold text-[24px] lg:text-[45px]">Select your rates </h1>
        </div>
        <div className="flex lg:justify-between w-full lg:h-[180px] bg-[#ffdc7d] p-4 lg:rounded-t-[10px]">
          <div className="lg:w-[60%]">
            <strong>
              <h2 className="text-[20px] lg:text-[26px] pb-2">Vouchers</h2>
            </strong>
            <p className="py-3 lg:text-[23px] font-normal">
              Use your vouchers online by entering the code printed on your voucher (16 characters).
            </p>
          </div>
          <div className="hidden lg:flex items-center">
            <button className="h-[65px] px-[35px] rounded-[10px] bg-black text-[20px] text-white">
              Enter the code
            </button>
          </div>
        </div>
        <div className="flex flex-col py-4 lg:rounded-b-[10px] bg-white">
          <div className="flex justify-between p-4">
            <div className="flex flex-col md:flex-row lg:items-center w-[60%] lg:w-[80%]">
              <div className="w-[225px] md:w-[175px] lg:w-[270px]">
                <h2 className="font-bold text-[16px] lg:text-[22px] ">Filmticket Relax Seat</h2>
              </div>
              <div className="w-0 md:w-[350px] lg:w-[90%] h-[1px] bg-gray-300"></div>

              <div className="ml-3">
                <p className="font-bold text-[20px] lg:text-[26px] ">€16,00</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className='flex items-center'>
                <CircleMinus size={40} className="text-gray-300" onClick={() => setFilm(0)} />
              </div>
              <div className="flex items-center text-[30px] font-bold">{countF} </div>
              <div className='flex items-center'>
                <CirclePlus size={40} color="#f3b43fff" onClick={() => setFilm(1)} />
              </div>
            </div>
          </div>

          <div className="flex justify-between px-4 pb-2">
            <div className="flex flex-col md:flex-row lg:items-center w-[60%] lg:w-[80%]">
              <div className="w-[225px] md:w-[175px] lg:w-[270px]">
                <h2 className="font-bold text-[16px] lg:text-[22px] ">Stadspas ticket RS</h2>
              </div>
              <div className="w-0 md:w-[350px] lg:w-[90%] h-[1px] bg-gray-300"></div>
              <div className="ml-3">
                <p className="font-bold text-[20px] lg:text-[26px] ">€10,00</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className='flex items-center'>
                <CircleMinus size={40} className="text-gray-300" onClick={() => setStad(0)} />
              </div>
              <div className="flex items-center text-[30px] font-bold"> {count} </div>
              <div className='flex items-center'>
                <CirclePlus size={40} color="#f3b43fff" onClick={() => setStad(1)} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <p className="text-gray-500 font-medium px-[17px]">
            {' '}
            Transaction fees of € 0,50 can be added at next step{' '}
          </p>
          <div className="absolute bottom-[11%] lg:bottom-[45%] lg:bottom-[10%] lg:right-[50px] font-medium text-gray-500 bg-[#d8d0d042] py-2 px-4 my-4 rounded-[20px]">
            My consents
          </div>
        </div>
      </div>
      {(countF > 0 || count > 0) && (
        <Link to={`/booking/by/${id}`}>
          <div className="fixed bottom-0 flex justify-center items-center max-w-[1440px] w-full h-[60px] lg:h-[100px] bg-[#ffc426] text-[15px] md:text-[20px] lg:text-[30px] font-bold px-[17px]">
            Continue
          </div>
        </Link>
      )}
    </div>
  );
};

export default Ticket;
