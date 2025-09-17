import { useEffect, useState } from 'react';
import BookNow from './BookNow';
import { Pelis } from '@/api/api';
import TripleBanner from './TripleBanner';
import { Result } from '@/types/type';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  
  const [movie, setMovie] = useState<Result[]>([]);
      const { t, i18n } = useTranslation("home");
  
  useEffect(() => {
    const Films = async () =>{
      const res = await Pelis();
      setMovie(res)
    }

    Films();
  }, [])
  
  return (    
      <div
        className="relative bottom-[43px] md:bottom-0 z-10 flex flex-col items-center
              justify-end md:justify-center h-full text-center translate-y-[30px]"
      >
        <div className="show__content lg:w-[90%] lg:mx-auto">
          <div className="flex w-full">
            <div className="">
              <h1 className="text-amber-400 text-shadow-lg text-4xl md:text-5xl font-bold mb-6">
                {t("bTitle")}
              </h1>
              <p className="text-amber-500 text-shadow-lg text-md md:text-xl mb-6">
                {t("sbTitle")}
              </p>
              <Link to={`/movies/617126`}>
                <BookNow plus={true} />
              </Link>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Banner;
