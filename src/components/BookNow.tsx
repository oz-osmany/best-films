import React from 'react';
import { Button } from './ui/button';
import { Plus, Ticket } from 'lucide-react';
import { useFilms } from '@/store/film';
interface Props {
  plus: boolean;
}

const BookNow = ({ plus }: Props) => {    
  return (
    <div className="flex">
      <Button className="btn__booking h-[48px] px-[20px] w-full max-w-[1000px] bg-yellow-400 text-black  font-semibold rounded">
        <Ticket /> Book now
      </Button>
      {plus && (
        <Button className="h-[48px] ml-2 btn">
          <Plus />
        </Button>
      )}
    </div>
  );
};

export default BookNow;
