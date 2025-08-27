import React, { useState } from 'react';
import { Button } from './ui/button';
import { days } from '@/api/days';
import { cinemas } from '../api/cinemas';
import { useCinemaStore } from '@/store/cinemaStore';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

type Props = {
  setCheck: (check: string[]) => void;
  setShowSchedule: (showSchedule: string[]) => void;
};

const Days = ({ setShowSchedule, setCheck }: Props) => {
  const { selectedCinema } = useCinemaStore();

  const [selected, setSelected] = useState<string | null>(null);
  const [datum, setDatum] = useState<string | null>(null);

  const parseCustomDate = (input: string): string => {
    const monthMap: Record<string, string> = {
      ENE: '01',
      FEB: '02',
      MAR: '03',
      ABR: '04',
      MAY: '05',
      JUN: '06',
      JUL: '07',
      AGU: '08',
      SEP: '09',
      OCT: '10',
      NOV: '11',
      DIC: '12',
    };
    const parts = input.split(' ');
    const day = parts[1];
    const month = monthMap[parts[2]];

    return `2025-${month}-${day}`;
  };

  const checkDay = (datum: string) => {
    setDatum(datum);

    const found = cinemas.find((c) => c.name === selectedCinema?.name);
    const item = parseCustomDate(datum);
    // I tell TS: “Trust me, this string is a valid key.
    const resp = found?.list[item as keyof typeof found.list] ?? [];
    setCheck(resp);
    setShowSchedule(resp);
  };
  return (
    <Swiper
      className="swiper"
      modules={[Navigation]}
      breakpoints={{
        640: { slidesPerView: 2 }, // sm
        1024: { slidesPerView: 3 }, // lg
      }}
    >
      {days.map((item, index) => (
        <SwiperSlide key={index}>
          <Button
            className={
              selected === item ? 'btn movie__selected movie_setting' : 'btn movie__setting'
            }
            onClick={() => checkDay(item)}
          >
            {' '}
            {item}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Days;
