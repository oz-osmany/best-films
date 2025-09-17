import BookNow from '@/components/BookNow';
import Footer from '@/components/Footer';
import NoFilms from '@/components/NoFilms';
import Search from '@/components/Search';
import { HeartPlus, ListTodo, SlidersHorizontal, ThumbsUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Credit, PelisId } from '@/api/api';
import { UnionTypes } from '@/types/Information';
import { useCinemaStore } from '@/store/cinemaStore';
import ModalBook from '@/components/ModalBook';
import { useFilms } from '@/store/film';
import ReactModal from 'react-modal';
import { Credits } from '@/types/credits';
import Details from '@/components/Details';
import Days from '@/components/Days';
import { useSchedule } from '@/store/schedule';
import { useTranslation } from 'react-i18next';
import { useIdiom } from '@/store/idiom';

const Movies = () => {
  const { id } = useParams();
  const { selectedCinema } = useCinemaStore();
  const [film, setFilm] = useState<UnionTypes>();
  const [check, setCheck] = useState<string[] | null>(null);
  const [showSchedule, setShowSchedule] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [time, setTime] = useState<string>('');
  const [credit, setCredit] = useState<Credits>();
  const { t} = useTranslation("movie");
  const { selectedIdiom} = useIdiom();
    // Talking about the crew
  const jobNames = ['Director', 'Screenplay', 'Producer', 'Writer'] as const;
  type JobName = typeof jobNames[number];

// 2) Mapping von Jobname -> i18n-Key (fürs UI)
type JobKey = 'jobs.director' | 'jobs.screenplay' | 'jobs.producer' | 'jobs.writer';
const JOB_KEY_BY_JOB: Record<JobName, JobKey> = {
  Director: 'jobs.director',
  Screenplay: 'jobs.screenplay',
  Producer: 'jobs.producer',
  Writer: 'jobs.writer',
};
  // const filteredCrew = credit?.crew.filter((person) => person.job && jobNames.includes(person.job));
const filteredCrew = credit?.crew.filter(
  (p): p is typeof credit.crew[number] & { job: JobName } =>
    jobNames.includes(p.job as JobName)
);

  const { selectFilm } = useFilms();
  const { selectedDay } = useSchedule();

  useEffect(() => {
    const detailMovie = async () => {
      if (id) {
        const resp = await PelisId(parseInt(id),selectedIdiom);
        const respuesta = await Credit(parseInt(id));
        setCredit(respuesta);
        setFilm(resp);
        selectFilm(resp);
      }
    };
    detailMovie();
  }, [id,selectedIdiom]);
  const openMod = (item: string) => {
    setTime(item);
    setModalIsOpen(true);
  };
  const closeMod = () => {
    document.body.classList.remove('overflow-hidden');
    setModalIsOpen(false);
  };
  return (
    <div className="relative z-0 h-[56%] md:h-[400px] lg:h-[580px] w-full pt-[120px] md:pt-[250px] lg:pt-[70px]">
      <div
        className="absolute top-0 right-0 w-full lg:w-[65%] h-[300px] lg:h-[600px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${film?.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="gradient"></div>
      <div className="movie !pb-0 !md:pb-[64px]">
        <div className="flex flex-col w-full lg:w-[50%]">
          <div className="mb-8">
            <h1 className="text-[2.5rem] lg:text-[4.5rem] font-bold">{film?.title}</h1>
          </div>
          <div className="flex justify-between lg:justify-start w-full">
            <button className="movie__btn lg:mr-2">
              <ListTodo className="mr-2 w-[20px]" />
              <span className="text-[16px] lg:text-[18px] font-bold"> My watchlist</span>
            </button>
            <button className="movie__btn">
              <ThumbsUp className="mr-2 w-[20px]" />
              <span className="text-[16px] lg:text-[18px] font-bold">Rate</span>
            </button>
          </div>
          <div className="flex flex-col items-start w-full">
            <div className='py-3'>
              <span className="genre">
                {film?.genres.map((item, index) => {
                  return (
                    <a
                      href=""
                      className="mt-0 text-sm md:text-lg lg:text-lg text-yellow-200"
                      key={index}
                    >
                      {item.name}
                      {index < film.genres.length - 1 && ',' + ' '}
                    </a>
                  );
                })}
              </span>
            </div>
            <div className="content !px-0">
              <p className="text-sm md:text-lg lg:text-lg mb-2">
                {t("release")}: {film?.release_date.toString()}{' '}
              </p>
              <p className="text-[12px] md:text-lg lg:text-lg line-clamp-3"> {film?.overview} </p>
              <div className="flex gap-[5px] overflow-x-auto scrollbar-none pt-4">
                {filteredCrew?.map((item) => {
                  return (
                    <div style={{ color: 'white' }} key={item.id}>
                      <div className="max-w-[80px] w-full mr-3">
                        <p className="text-yellow-200 text-sm md:text-lg lg:text-lg">
                          {' '}
                          { t(JOB_KEY_BY_JOB[item.job]) }{' '}
                        </p>
                        <p className="text-sm md:text-md"> {item.name} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separador top-[170px] lg:bottom-[-290px] lg:top-[470px]"></div>
      <div className="relative top-[50px] md:top-[185px] lg:top-[85px]">
        {/* Search */}
        <div className="content  mb-4">
          <Search />
        </div>
        <div className="content relative block md:hidden">
          <BookNow plus={false} />
        </div>
        {film && credit && <Details {...{ film, credit }} />}
        {/* Schedule */}
        <div className="content flex items-center w-[720px] gap-[3px] p-3 ">
          <div className="flex items-center btn h-[40px] px-4">
            <SlidersHorizontal />
          </div>
          <div className="content !px-0 overflow-hidden">
            <Days setShowSchedule={setShowSchedule} setCheck={setCheck} />
          </div>
        </div>
      </div>
      {/* Screen on this day */}
      <section className="content relative block lg:bottom-[100px]">
        {showSchedule?.length !== 0 && (
          <div className="flex mt-[60px] mb-[30px]">
            <HeartPlus className="btn w-[40px] h-[40px]" />
            <div className="ml-4">
              <p>{selectedCinema?.name}</p>
              <p className="text-[13px]">{selectedCinema?.address}</p>
            </div>
          </div>
        )}

        <div className="flex gap-4 md:mt-[185px]">
          {check?.map((item, index) => {
            return (
              <div className="btn__schedule" onClick={() => openMod(item)} key={index}>
                {' '}
                {item}{' '}
              </div>
            );
          })}
        </div>
        {/* If there are not schedules show Ticket */}
        {showSchedule?.length === 0 && <NoFilms />}
        {/* Modal for booking */}
        {modalIsOpen && (
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeMod}
            overlayClassName="test fixed inset-0 lg:inset-auto lg:right-0 lg:top-0 lg:w-[400px] bg-black/50 flex justify-center items-center z-40"
            className="modal__schedule "
            bodyOpenClassName="overflow-hidden"
          >
            <ModalBook time={time} closeMod={closeMod} datum={selectedDay} />
          </ReactModal>
        )}
      </section>
      <section className="w-full h-auto">
        <Footer />
      </section>
    </div>
  );
};

export default Movies;
