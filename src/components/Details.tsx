import { type Credits } from '../types/credits';
import type { UnionTypes } from '../types/Information';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Details = ({ credit }: { credit: Credits }) => {
  return (
    <div className="content pt-8 md:py-8 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 }, // sm
          1024: { slidesPerView: 3 }, // lg
        }}
      >
        {credit.cast?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {item.profile_path && (
                <div className="persons__card group relative overflow-hidden">
                  <Link to={`/persons/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                      alt=""
                      className="w-full object-cover transition-transform duration-500 ease-out transform-gpu will-change-transform group-hover:scale-110"
                    />
                  </Link>
                  <div className="jf-center">{item.original_title}</div>
                  <div className="jf-center pt-2">{item.character}</div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Details;
