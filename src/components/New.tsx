import React, { useEffect, useState } from 'react';
import { news } from '@/api/movies';
import { Button } from './ui/button';
import { Series } from '@/api/api';
import { Result } from '@/types/type';

const New = () => {
  const [showing, setShowing] = useState<Result[]>([]);

  useEffect(() => {
    const chargeMovies = async () => {
      const resp = await Series();
      setShowing(resp);
    };

    chargeMovies();
  }, []);
  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[20px] mt-[25px]">New</h1>
      <div className="w-full overflow-x-auto xl:overflow-x-hidden">
        <div className="flex gap-4 ">
          {showing.slice(0, 4).map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-[324px] h-[324px] xl:w-[350px] xl:h-[350px] 
                          flex-shrink-0 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt=""
                  className="w-full h-full"
                />
                <div className="absolute bottom-[20px] w-full p-[20px]">
                  <h2 className="mb-3 font-bold">
                    {' '}
                    {item.original_title || item.name || item.original_name}{' '}
                  </h2>
                  <Button className="bg-[#feb91e] w-full h-[48px] text-black text-base rounded-[10px]">
                    See the offers
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default New;
