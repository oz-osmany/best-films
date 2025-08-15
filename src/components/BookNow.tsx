import React from 'react';
import { Button } from './ui/button';
import { Plus, Ticket } from 'lucide-react';
interface Props {
  plus: boolean;
}

const BookNow = ({ plus }: Props) => {
  return (
    <div className="flex">
      <Button className="h-[48px] px-[20px] w-full max-w-[400px] bg-yellow-400 text-black  font-semibold rounded">
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
