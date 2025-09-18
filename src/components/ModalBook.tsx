import { useCinemaStore } from '@/store/cinemaStore';
import { useFilms } from '@/store/film';
import BookNow from './BookNow';
import { Link } from 'react-router-dom';
import { useSchedule } from '@/store/schedule';
import { useEffect } from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

type ModalBookProps = {
  closeMod: () => void;
  time: string;
  datum: string | null;
};

const ModalBook = ({ time, closeMod, datum }: ModalBookProps) => {
  const { selectedFilm } = useFilms();
  const { selectedCinema } = useCinemaStore();
  const { selectTime } = useSchedule();
  const { t} = useTranslation("movie"); 

  useEffect(() => {
    const select = () => {
      selectTime(time);
    };

    select();
  }, []);
  return (
    <div className="w-full h-screen bg-black border">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] p-[5px]">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedFilm?.poster_path}`}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-[15px]"> {selectedFilm?.original_title} </h2>
            <p className="text-[10px]"> {selectedCinema?.name} </p>
          </div>
        </div>
        <div className="mr-4">
          <button onClick={closeMod} className="text-white hover:text-gray-700">
            ✕
          </button>
        </div>
      </div>
      <div className="relative w-full h-[100vh] ">
        <div className="h-[60%]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedFilm?.poster_path}`}
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-[20%] md:top-[30%] content">
            <div className="flex justify-center">
              <div className="flex flex-col pb-8">
                <h1 className="text-[40px]">{datum}</h1>
                <h1 className="text-[55px] font-bold"> {time} </h1>
                <p className="text-[30px]"> {selectedCinema?.name} </p>
              </div>
            </div>
            <div className="w-full">
              <Link to={`/booking/seat/${selectedFilm?.id}`}>
                <BookNow plus={false} />
              </Link>
            </div>
            <div className="block mt-4 px-[20px] btn">
              <div className="flex items-center gap-8">
                <div className="w-[80px] h-auto">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${selectedFilm?.poster_path}`}
                    alt=""
                  />
                </div>
                <div>
                  <p>RELAX SEAT</p>
                </div>
              </div>
              <div>
                <p>
                  {t("relax")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separador bottom-[-53px] !md:bottom-[150px]"></div>
        <div className="h-[30%] bg-black"></div>
      </div>
    </div>
  );
};

export default ModalBook;
