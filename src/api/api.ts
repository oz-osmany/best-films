import axios from "axios";

const API_KEY='5a6504da9f668e20142f1c9708e5f356';
const URL= 'https://api.themoviedb.org/3/movie/popular';
const URL_G= 'https://api.themoviedb.org/3/genre/movie/list';
const URL_SERIE= 'https://api.themoviedb.org/3/tv/popular';
const URL_TREND= 'https://api.themoviedb.org/3/trending/all/week';
const URL_TRAILER= 'https://api.themoviedb.org/3/movie';
const URL_SEARCH= 'https://api.themoviedb.org/3/search/multi';
const URL_PERSON= 'https://api.themoviedb.org/3/person';

export const Pelis = async (i:number= 1) =>{

    const respuesta = await axios( `${URL}?api_key=${API_KEY}&language=en-EN&page=${i}` )
    return respuesta.data.results;
}   
export const PelisId = async (id: number) =>{
    const respuesta = await axios( `${URL_TRAILER}/${id}?api_key=${API_KEY}&language=en-EN` )
    return respuesta.data;
}   
export const Genero = async () =>{

    const respuesta = await axios( `${URL_G}?api_key=${API_KEY}&language=en-EN&page=1` )
    return respuesta.data;
}   
export const Credit = async (id:number) =>{

    const respuesta = await axios( `${URL_TRAILER}/${id}/credits?api_key=${API_KEY}&language=en-EN&page=1` )
    return respuesta.data;
}   
export const Series = async (i:number= 1) =>{
    const respuesta = await axios( `${URL_SERIE}?api_key=${API_KEY}&language=en-EN&page=${i}` )

    return respuesta.data.results;
}   
export const Trend = async () =>{

    const respuesta = await axios( `${URL_TREND}?api_key=${API_KEY}&language=en-EN&page=1` )
    return respuesta.data.results;
}   
export const Trailer = async (id:number) =>{

    const respuesta = await axios( `${URL_TRAILER}/${id}/videos?api_key=${API_KEY}&language=en-EN&page=1` )
    return respuesta.data.results;
}   
export const Personas = async (id:number) =>{
    const respuesta = await axios( `${URL_PERSON}/${id}?api_key=${API_KEY}&language=en-US` )
    console.log(respuesta.data)
    return respuesta.data;
}   
export const SearchPelis = async () =>{

    const respuesta = await axios( `${URL_SEARCH}?api_key=${API_KEY}&language=en-EN` )
    return respuesta.data.results;
}   
export const MovieCredit = async (id:number) =>{

    const respuesta = await axios( `${URL_PERSON}/${id}/movie_credits?api_key=${API_KEY}&language=en-EN` )
    // console.log(respuesta.data)
    return respuesta.data;
}   



// const url = [
//   'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/s94NjfKkcSczZ1FembwmQZwsuwY.jpg',
//   'https://media.themoviedb.org/t/p/w300_and_h450_multi_faces/qerflS8AU23XopttgDFBsbe1L0D.jpg',
//   'https://media.themoviedb.org/t/p/w600_and_h900_multi_faces/qerflS8AU23XopttgDFBsbe1L0D.jpg',
// ];
// export default url;

// <img class="poster w-full" src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qerflS8AU23XopttgDFBsbe1L0D.jpg" srcset="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qerflS8AU23XopttgDFBsbe1L0D.jpg 1x,
//  https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qerflS8AU23XopttgDFBsbe1L0D.jpg 2x" alt="The Fantastic 4: First Steps">
