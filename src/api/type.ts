//Movies

export interface Type {
    id:      number;
    results: Resultado[];
}

export interface Resultado {
    iso_639_1:    string;
    iso_3166_1:   string;
    name?:         string;
    key:          string;
    site:         string;
    size:         number;
    type:         string;
    official:     boolean;
    published_at: Date;
    id:           string;
}

export interface InfoPeli {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    
}

export interface InfoDetail {
    id:             string;
    author:         string;
    author_details: AuthorDetails;
    content:        string;
    created_at:     Date;
    iso_639_1:      string;
    media_id:       number;
    media_title:    string;
    media_type:     string;
    updated_at:     Date;
    url:            string;
}

export interface AuthorDetail {
    name:        string;
    username:    string;
    avatar_path: string;
    rating:      number;
}
export interface Genre {
    id: number;
    name: string;
}


//Tendencia
export interface Trend {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    title?:            string;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    genre_ids:         number[];
    popularity:        number;
    release_date?:     Date;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    name?:             string;
    original_name?:    string;
    first_air_date?:   Date;
    origin_country?:   string[];
}

export type MediaType = "movie" | "tv"




export type Resultados = Resultado []
export type Results = Result []
export type Genres = Genre []
export type InfoDetails = InfoDetail[]
export type AuthorDetails = AuthorDetail[]
export type InfoPelis = InfoPeli[];
export type OriginalLanguage = "en" | "ja" | "ko" | "zh";
   

//Para tipar la API copio la info que viene de la API y en otro archivo >Past Json as Code. Pego la Info y le doy un nombre 