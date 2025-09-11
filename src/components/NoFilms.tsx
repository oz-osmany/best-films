import React from 'react';
import { Button } from './ui/button';

const NoFilms = () => {
  return (
    <div className="flex justify-center mb-[80px] mt-[85px] px-16">
      <div className="flex flex-col items-center">
        <div className="my-8">
          <img src="../assets/icons8-boleto-50.png" className="w-[120px]" alt="" />
        </div>
        <div>
          <h3>No screening on this day</h3>
        </div>
        <div className="py-4">
          <p>
            There are no screenings scheduled on this date. View the calendar to find performances
            for another day.
          </p>
        </div>
        <div className="w-full">
          <Button className="btn h-[50px] w-full"> View screenings on Wednesday 13 August</Button>
        </div>
      </div>
    </div>
  );
};

export default NoFilms;
