export interface Credits {
  id: number;
  cast: Cast[];
  crew: Cast[]
}

export interface Cast extends Person{
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguageType;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    character?:        string;
    credit_id:         string;
    order?:            number;
    department?:       DepartmentType;
    job?:              string;
}

export const Department = {
  Acting: 'Acting',
  Art: 'Art',
  Camera: 'Camera',
  CostumeMakeUp: 'Costume & Make-Up',
  Crew: 'Crew',
  Directing: 'Directing',
  Editing: 'Editing',
  Lighting: 'Lighting',
  Production: 'Production',
  Sound: 'Sound',
  VisualEffects: 'Visual Effects',
  Writing: 'Writing',
} as const;

export interface Person {
    adult:                boolean;
    also_known_as:        string[];
    biography:            string;
    birthday:             Date;
    deathday:             null;
    gender:               number;
    homepage:             null;
    id:                   number;
    imdb_id:              string;
    known_for_department: string;
    name:                 string;
    place_of_birth:       string;
    popularity:           number;
    profile_path:         string;
}
export const OriginalLanguage ={
    De : "de",
    En : "en",
    Fr : "fr",
    It : "it",
}


export type DepartmentType = (typeof Department)[keyof typeof Department];
export type OriginalLanguageType  = (typeof OriginalLanguage)[keyof typeof OriginalLanguage];
