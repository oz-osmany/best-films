import { cinemas } from '@/api/cinemas';

export const assignMoviesToCinemas = (movies: any[]) => {
  return cinemas.map((cinema) => {
    // mix movies
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    // choose 5
    const assigned = shuffled.slice(0, 10);

    return {
      ...cinema,
      movies: assigned,
    };
  });
};
