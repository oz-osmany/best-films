export interface Movie {
  id: string; // ID local o TMDb
  tmdb_id: number;
  title: string;
  release_day: string;
  duration: number;
  genre: string[];
  description: string;
  poster_url: string;
  backdrop_url: string;
  cast: string[];
  crew: {
    director: string;
    writer?: string;
  };
  language: string;
  rating: string;
  in_cinemas: boolean;
  streaming_available: boolean;
  streaming_links?: {
    platform: string;
    url: string;
    type: 'subscription' | 'free' | 'rent' | 'buy';
  }[];
  cinema_showtimes?: {
    cinema_id: string;
    dates: {
      date: string;
      times: string[];
    }[];
  }[];
}
interface Cinema {
  id: string;
  name: string;
  city: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  chain: string; // CinemaxX, Cineplex, UCI, etc.
  contact?: {
    phone?: string;
    website?: string;
  };
}
