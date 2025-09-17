import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = 'https://api.themoviedb.org/3/movie/popular';
const URL_G = 'https://api.themoviedb.org/3/genre/movie/list';
const URL_SERIE = 'https://api.themoviedb.org/3/discover/tv';
const URL_TREND = 'https://api.themoviedb.org/3/trending/all/week';
const URL_TRAILER = 'https://api.themoviedb.org/3/movie';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/multi';
const URL_PERSON = 'https://api.themoviedb.org/3/person';

export const Pelis = async (i: number = 1,l:string) => {
  const respuesta = await axios(`${URL}?api_key=${API_KEY}&language=${l}-DE&page=${i}`);
  return respuesta.data.results;
};
export const PelisId = async (id: number,l:string) => {
  const respuesta = await axios(`${URL_TRAILER}/${id}?api_key=${API_KEY}&language=${l}-${l.toUpperCase}`);
  return respuesta.data;
};
export const Genero = async () => {
  const respuesta = await axios(`${URL_G}?api_key=${API_KEY}&language=en-EN&page=1`);
  return respuesta.data;
};
export const Credit = async (id: number) => {
  const respuesta = await axios(
    `${URL_TRAILER}/${id}/credits?api_key=${API_KEY}&language=en-EN&page=1`
  );
  return respuesta.data;
};
export const Series = async () => {
  const respuesta = await axios(`${URL_SERIE}?api_key=${API_KEY}&language=en-EN`);
  return respuesta.data.results;
};
export const Trend = async () => {
  const respuesta = await axios(`${URL_TREND}?api_key=${API_KEY}&language=en-EN&page=1`);
  return respuesta.data.results;
};
export const Trailer = async (id: number) => {
  const respuesta = await axios(
    `${URL_TRAILER}/${id}/videos?api_key=${API_KEY}&language=en-EN&page=1`
  );
  return respuesta.data.results;
};
export const Personas = async (id: number) => {
  const respuesta = await axios(`${URL_PERSON}/${id}?api_key=${API_KEY}&language=en-US`);
  return respuesta.data;
};
export const SearchPelis = async () => {
  const respuesta = await axios(`${URL_SEARCH}?api_key=${API_KEY}&language=en-EN`);
  return respuesta.data.results;
};
export const MovieCredit = async (id: number) => {
  const respuesta = await axios(
    `${URL_PERSON}/${id}/movie_credits?api_key=${API_KEY}&language=en-EN`
  );
  // console.log(respuesta.data)
  return respuesta.data;
};
