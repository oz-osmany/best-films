import { InfoPeli } from '@/types/type';
import { create } from 'zustand';

type Film = {
  selectedFilm: InfoPeli | null;
  films: InfoPeli[];
  selectFilm: (film: InfoPeli) => void;
};

export const useFilms = create<Film>((set) => ({
  selectedFilm: {
    adult: true,
    backdrop_path: '',
    genre_ids: [1, 2, 3],
    id: 1,
    original_language: 'en',
    original_title: '',
    overview: '',
    popularity: 12,
    poster_path: '',
    title: '',
    video: false,
    vote_average: 11,
    vote_count: 33,
    release_date: new Date(),
  },
  films: [],
  selectFilm: (film) => set({ selectedFilm: film }),
}));
