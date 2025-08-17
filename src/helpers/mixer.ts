import { cinemas } from "@/api/cinemas";

export const assignMoviesToCinemas =(movies: any[]) =>{
  return cinemas.map(cinema => {
    // mezclar películas
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    // elegir 5
    const assigned = shuffled.slice(0, 10);

    return {
      ...cinema,
      movies: assigned
    };
  });
}

// Uso
// export async function getCinemasWithMovies() {
//   const { results } = await getNowPlaying();
//   return assignMoviesToCinemas(results);
// }
