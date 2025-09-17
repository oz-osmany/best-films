import Carousels from './Carousels';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

import { Pelis } from '@/api/api';
import { assignMoviesToCinemas } from '@/helpers/mixer';
import { CinemaWithMovies } from '@/types/typeCinema';
import { useCinemaStore } from '@/store/cinemaStore';
import { useTranslation } from 'react-i18next';


const Now = () => {
  const [showing, setShowing] = useState<CinemaWithMovies[]>([]);
  const { selectedCinema } = useCinemaStore();
  const { t, i18n } = useTranslation("home"); 

  useEffect(() => {
    const chargeMovies = async () => {
      const resp = await Pelis(1,"de");
      const mixer = assignMoviesToCinemas(resp);
      setShowing(mixer);
    };

    chargeMovies();
  }, []);

  return (
    <div className="pt-[20px]">
      <h1 className="title mb-[8px]">{t("now")}</h1>
      <p className="movie__sub text-[15px] text-gray-500 font-medium">in {selectedCinema?.name} </p>
      <Carousels showing={showing[0]} />
      <div>
        <Button className="w-full h-[48px] my-[25px] bg-[#bdabab42] lg:hidden">
          {t("all")}
        </Button>
      </div>
    </div>
  );
};

export default Now;
