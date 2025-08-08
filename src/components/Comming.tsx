import React from 'react';
import Carousels from './Carousels';
import { showing } from '@/api/movies';
import { Button } from './ui/button';

const Comming = () => {
  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[5px]">Comming soon</h1>
      <Carousels data={showing} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">
          All upcoming movies
        </Button>
      </div>
    </div>
  );
};

export default Comming;
