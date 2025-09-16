import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { Sofa } from 'lucide-react';
import { useTicket } from '@/store/ticket';

const ROWS = 9;
const COLS = 15;
const TOTAL_SEATS = ROWS * COLS;

const toRC = (i: number) => ({ r: Math.floor(i / COLS) + 1, c: (i % COLS) + 1 });

const Booking: React.FC = () => {
  const { id } = useParams();
  const [select, setSelect] = useState<number[]>([]);
  const [selected, setSelected] = useState(false);
  const [occupied, setOccupied] = useState<number[]>([35, 36]);
  const { selectSeat } = useTicket();

  const cells = useMemo(() => Array.from({ length: TOTAL_SEATS }, (_, i) => i), []);

  const getInfo = (pos: number) => {
    if (!select.includes(pos)) {
      setSelect([...select, pos]);
      setSelected(true);
      selectSeat(select.length + 1);
    } else {
      setSelect((item) => item.filter((select) => select !== pos));
      selectSeat(select.length + 1);
      select.length === 0 && setSelected(false);
      setSelected(false);
    }
  };
  const freeSeats = TOTAL_SEATS - occupied.length - select.length;

  const reservedLabels = useMemo(() => {
    // Labels like R3C7 from current selection, sorted
    return Array.from(select)
      .sort((a, b) => a - b)
      .map((i) => {
        const { r, c } = toRC(i);
        return `R${r}C${c}`;
      });
  }, [select]);

  return (
    <div>
      {/* Seats */}
      <div className="content pt-3 pb-[40px] text-black">
        <div className="bg-[#d8d0d042] py-2 px-4 mb-4 rounded-[7px]">Auditorium 3 4DX</div>
        <div className="flex items-center flex-col pb-4">
          <h2>
            <strong>Select your seat(s)</strong>{' '}
          </h2>
          <p className="text-[12px]">{freeSeats} free seats</p>
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
      <div className={`${selected ? 'absolute bottom-[50px] lg:bottom-0 w-full ' : 'hidden'}  `}>
        <div className="flex py-3 text-black bg-white border-t-[1px]">
          <div className="mx-3">{reservedLabels.length} reserved seat </div>
          <div className="flex">
            {reservedLabels?.map((item, i) => {
              return (
                <div key={i}>
                  {item}
                  {reservedLabels.length - 1 > i && ','}{' '}
                </div>
              );
            })}
          </div>
        </div>
        <Link to={`/booking/ticket/${id}`}>
          <div className="flex justify-center items-center bg-yellow-500 w-full h-[56px] lg:h-[100px] text-black">
            <strong className='text-[18px] lg:text-[25px]'>Continue</strong>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Booking;
