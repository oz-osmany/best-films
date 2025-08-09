import React from 'react';
import Carousels from './Carousels';
import { showing } from '@/api/movies';
import { Button } from './ui/button';
import { specials } from '../api/movies';

const Special = () => {
  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[5px]">Special&Events</h1>
      <Carousels data={showing} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">All specials</Button>
      </div>
    </div>
  );
};

export default Special;
