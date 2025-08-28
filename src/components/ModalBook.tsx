import { useCinemaStore } from '@/store/cinemaStore';
import { useFilms } from '@/store/film';
import BookNow from './BookNow';
import { Link } from 'react-router-dom';

type ModalBookProps = {
  closeMod: () => void;
  time: string;
  datum: string | null;
};

const ModalBook = ({ time, closeMod, datum }: ModalBookProps) => {
  const { selectedFilm } = useFilms();
  const { selectedCinema } = useCinemaStore();
  
  return (
    <div className="w-full h-[50px] bg-black">
      <div className="flex justify-between items-center">
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
      <div className="relative w-full h-[100vh]">
        <div className="h-[70%]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedFilm?.poster_path}`}
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-[20%] content">
            <div className="flex justify-center">
              <div className="flex flex-col pb-8">
                <p>{datum}</p>
                <h2 className="text-[35px] font-bold"> {time} </h2>
                <p> {selectedCinema?.name} </p>
              </div>
            </div>
            <div className="w-full">
              <Link to={`/booking/${selectedFilm?.id}`}>
                  <BookNow plus={false} />
              </Link>
            </div>
          </div>
        </div>
        <div className="separador !bottom-[-53px] !md:bottom-[9px]"></div>
        <div className="h-[30%] bg-black"></div>
      </div>
    </div>
  );
};

export default ModalBook;
