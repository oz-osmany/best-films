import React from 'react';
import { Button } from './ui/button';
import { Ticket } from 'lucide-react';

const MovieBanner = () => {
  return (
    <div
      className="relative bottom-[70px] md:bottom-0 z-10 flex flex-col items-center
            justify-end md:justify-center h-full text-center"
    >
      <div className="show__content lg:w-[90%] lg:mx-auto">
        <div className="flex w-full">
          <div className="">
            <h1 className="text-amber-500 text-shadow-lg text-4xl md:text-5xl font-bold mb-6">
              Explore New Movies
            </h1>
            <p className="text-amber-500 text-shadow-lg text-md md:text-xl mb-6">
              Enjoy the best movies wherever you are.
            </p>
            <div className="flex">
              <Button className="h-[50px] px-[20px] w-full max-w-[400px] bg-yellow-400 text-black  font-semibold rounded">
                <Ticket /> Book now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
