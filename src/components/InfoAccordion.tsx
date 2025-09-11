import React from 'react';
import { days } from '@/api/days';
import { useCinemaStore } from '@/store/cinemaStore';
import { useSchedule } from '@/store/schedule';

const InfoAccordion = () => {
  const { selectedCinema } = useCinemaStore();
  const { selectedDay } = useSchedule();
  return (
    <div className="w-full">
      <div className="btn text-center text-[25px]">{selectedCinema?.name}</div>
      <div className="btn text-center mt-2 text-[20px]">{selectedDay}</div>
    </div>
  );
};

export default InfoAccordion;
