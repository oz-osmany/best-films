import { type Credits } from '../types/credits';
import type { UnionTypes } from '../types/Information';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Details = ({ film, credit }: { film: UnionTypes; credit: Credits }) => {
  return (
    <div className="content py-8">
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
                <div className="persons__card">
                  <Link to={`/persons/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                      alt=""
                      className="w-full"
                    />
                  </Link>
                  <div className="jf-center">{item.original_title}</div>
                  <div className="jf-center">{item.character}</div>
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
