import React from 'react';
import { news } from '@/api/movies';
import { Button } from './ui/button';

const New = () => {
  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[20px] mt-[25px]">New</h1>
      <div className="w-full overflow-x-auto xl:overflow-x-hidden">
        <div className="flex gap-4 ">
          {news.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-[324px] h-[324px] xl:w-[350px] xl:h-[350px] 
                          flex-shrink-0 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md"
              >
                <img src={item.poster_url} alt="" className="w-full h-full" />
                <div className="absolute bottom-[20px] w-full p-[20px]">
                  <Button className="bg-[#feb91e] text-black w-full h-[48px] text-base">
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
