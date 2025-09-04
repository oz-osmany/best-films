import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { Sofa } from 'lucide-react';
import { useTicket } from '@/store/ticket';

const Booking = () => {
  const { id } = useParams();
  const [select, setSelect] = useState<number[]>([]);
  const [selected, setSelected] = useState(false);
  const [seat, setSeat] = useState(true);
  const [rows, setRows] = useState<number[]>([]);
  const [cols, setCols] = useState<number[]>([]);
  const [occupied, setOccupied] = useState<number[]>([35, 36]);
  const { selectSeat, selectedSeat } = useTicket();

  const r = 9;
  const c = 15;

  const cells = Array.from({ length: r * c });

  const getInfo = (pos: number) => {
    if (!select.includes(pos)) {
      setSelect([...select, pos]);
      setSelected(true);
      setRows([...rows, Math.floor(pos / c) + 1]);
      setCols([...cols, (pos % c) + 1]);
      selectSeat(rows.length + 1);
    } else {
      setSelect((item) => item.filter((select) => select !== pos));
      setRows(rows.filter((item) => item === pos));
      setSelected(false);
      selectSeat(rows.length + 1);
    }
  };

  return (
    <div>
      {/* Seats */}
      <div className="content pt-3 pb-[40px] text-black">
        <div className="bg-[#d8d0d042] py-2 px-4 mb-4 rounded-[7px]">Auditorium 3 4DX</div>
        <div className="flex items-center flex-col pb-4">
          <h2>
            <strong>Select your seat(s)</strong>{' '}
          </h2>
          <p className="text-[12px]">{135 - cols.length} free seats</p>
        </div>
        <div className="w-full md:px-[60px] rounded-[15px] p-3 overflow-hidden border-solid border-[1px] border-gray-500">
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: 'repeat(15, 1fr)',
              gridTemplateRows: 'repeat(9, 1fr)',
            }}
          >
            {cells.map((_, i) => (
              <div
                key={i}
                className="cursor-pointer bg-blue-400 h-[30px] flex items-center justify-center bg-transparent"
              >
                <Sofa
                  className={`w-4 h-4  lg:w-8 lg:h-8
                            ${
                              occupied.length > 0
                                ? occupied.includes(i)
                                  ? 'text-gray-600 cursor-not-allowed'
                                  : select.length > 0
                                    ? select.includes(i)
                                      ? 'text-red-500'
                                      : 'text-blue-600'
                                    : 'text-blue-600'
                                : select.length > 0
                                  ? select.includes(i)
                                    ? 'text-red-500'
                                    : 'text-blue-600'
                                  : 'text-blue-600'
                            }`}
                  onClick={() => getInfo(i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-around pt-2 lg:hidden">
          <div className="btn !bg-[#d8d0d042] px-4">Pinch out to zoom</div>
          <div className="btn !bg-[#d8d0d042] px-4">Tap to selet seat</div>
        </div>
        <div className="content mb-4 ">
          <div className="my-2">
            <strong>Legend</strong>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex gap-1 mb-3">
                  <Sofa className="text-red-500" /> My seats
                </div>
                <div className="flex gap-1 mb-3">
                  <Sofa className="text-blue-500" /> Free seats
                </div>
                <div className="flex gap-1 mb-3">
                  <Sofa className="text-gray-600" /> Occupied seats
                </div>
              </div>
              <div className="bg-[#d8d0d042] py-2 px-4 mb-4 rounded-[7px]">My consents</div>
            </div>
          </div>
        </div>
      </div>
      {/* Reserved */}
      <div className={`${selected ? 'fixed bottom-0 w-full ' : 'hidden'}  `}>
        <div className="flex py-3 text-black bg-white border-t-[1px]">
          <div className="mx-3">{rows.length} reserved seat </div>
          <div className="flex">
            {rows?.map((item, i) => {
              return (
                <div key={i}>                
                    R{item}C{cols[i]}
                    {rows.length - 1 > i && ','}{' '}
                 
                </div>
              );
            })}
          </div>
        </div>
        <Link to={`/booking/ticket/${id}`}>
          <div className="flex justify-center items-center bg-yellow-500 w-full h-[50px] text-black">
            <strong>Continue</strong>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Booking;
