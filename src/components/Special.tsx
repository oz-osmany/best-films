import React, { useEffect, useState } from 'react';
import Carousels from './Carousels';
import { Button } from './ui/button';
import { Trend } from '@/api/api';
import { CinemaWithMovies } from '@/types/typeCinema';
import { assignMoviesToCinemas } from '@/helpers/mixer';
import { useCinemaStore } from '@/store/cinemaStore';
import { useTranslation } from 'react-i18next';

const Special = () => {
  const [showing, setShowing] = useState<CinemaWithMovies[]>([]);
  const { selectedCinema } = useCinemaStore();
    const { t } = useTranslation("home"); 
  

  useEffect(() => {
    const chargeMovies = async () => {
      const resp = await Trend();
      const mixer = assignMoviesToCinemas(resp);
      setShowing(mixer);
    };

    chargeMovies();
  }, []);
  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[8px]">{ t("special")}</h1>
      <p className="movie__sub text-[15px] text-gray-500 font-medium">in {selectedCinema?.name} </p>
      <Carousels showing={showing[0]} />
      <div>
        <Button className="w-full h-[48px] my-[25px] bg-[#bdabab42] lg:hidden">{t("all")}</Button>
      </div>
    </div>
  );
};

export default Special;
