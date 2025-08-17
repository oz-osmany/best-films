import { Movie } from './info';

export const showing: Movie[] = [
  {
    id: '872585',
    tmdb_id: 872585,
    title: 'Oppenheimer',
    release_day: '2023-07-19',
    duration: 180,
    genre: ['Drama', 'History'],
    description: 'The story of J. Robert Oppenheimer and the atomic bomb...',
    poster_url: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/original/nsbYceUzdWlCzzJCL0nZCBZzvpf.jpg',
    cast: ['Cillian Murphy', 'Emily Blunt'],
    crew: { director: 'Christopher Nolan' },
    language: 'en',
    rating: 'PG-13',
    in_cinemas: true,
    streaming_available: false,
  },
  {
    id: '603',
    tmdb_id: 603,
    title: 'The Matrix',
    release_day: '1999-03-31',
    duration: 136,
    genre: ['Action', 'Science Fiction'],
    description: 'A computer hacker learns about the true nature of reality...',
    poster_url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_url:
      'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/8K9qHeM6G6QjQN0C5XKFGvK5lzM.jpg',
    cast: ['Keanu Reeves', 'Laurence Fishburne'],
    crew: { director: 'The Wachowskis' },
    language: 'en',
    rating: 'R',
    in_cinemas: false,
    streaming_available: true,
    streaming_links: [
      { platform: 'Netflix', url: 'https://netflix.com/matrix', type: 'subscription' },
    ],
  },
  {
    id: '27205',
    tmdb_id: 27205,
    title: 'Inception',
    release_day: '2010-07-16',
    duration: 148,
    genre: ['Action', 'Science Fiction', 'Thriller'],
    description: 'A thief who steals corporate secrets through dreaming...',
    poster_url: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
    crew: { director: 'Christopher Nolan' },
    language: 'en',
    rating: 'PG-13',
    in_cinemas: false,
    streaming_available: true,
    streaming_links: [
      { platform: 'HBO Max', url: 'https://hbomax.com/inception', type: 'subscription' },
    ],
  },
  {
    id: '24428',
    tmdb_id: 24428,
    title: 'The Avengers',
    release_day: '2012-04-25',
    duration: 143,
    genre: ['Action', 'Adventure', 'Science Fiction'],
    description: 'Earth’s mightiest heroes must come together to stop Loki...',
    poster_url: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPdT9DB4JL78.jpg',
    backdrop_url:
      'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
    cast: ['Robert Downey Jr.', 'Chris Evans'],
    crew: { director: 'Joss Whedon' },
    language: 'en',
    rating: 'PG-13',
    in_cinemas: false,
    streaming_available: true,
    streaming_links: [
      { platform: 'Disney+', url: 'https://disneyplus.com/avengers', type: 'subscription' },
    ],
  },
  {
    id: '299536',
    tmdb_id: 299536,
    title: 'Avengers: Infinity War',
    release_day: '2018-04-25',
    duration: 149,
    genre: ['Action', 'Adventure', 'Science Fiction'],
    description: 'The Avengers and their allies must be willing to sacrifice...',
    poster_url: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/original/lAXONuqg41NwUMuzMiFvicDET9Y.jpg',
    cast: ['Robert Downey Jr.', 'Chris Hemsworth'],
    crew: { director: 'Anthony Russo' },
    language: 'en',
    rating: 'PG-13',
    in_cinemas: false,
    streaming_available: true,
    streaming_links: [
      { platform: 'Disney+', url: 'https://disneyplus.com/infinitywar', type: 'subscription' },
    ],
  },
  {
    id: 'm_24',
    tmdb_id: 200013,
    title: 'Film 14',
    release_day: '2025-07-31',
    duration: 147,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 14 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200013.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200013.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 23',
      writer: 'Drehbuchautor 23',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.disney.com/watch/200013',
        type: 'subscription',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '21:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_25',
    tmdb_id: 200014,
    title: 'Film 15',
    release_day: '2025-08-14',
    duration: 94,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 15 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200014.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200014.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 24',
      writer: 'Drehbuchautor 24',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.disney.com/watch/200014',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '21:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_26',
    tmdb_id: 200015,
    title: 'Film 16',
    release_day: '2025-08-11',
    duration: 113,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 16 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200015.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200015.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 25',
      writer: 'Drehbuchautor 25',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.plutotv.com/watch/200015',
        type: 'subscription',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '17:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_27',
    tmdb_id: 200016,
    title: 'Film 17',
    release_day: '2025-08-11',
    duration: 97,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 17 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200016.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200016.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 26',
      writer: 'Drehbuchautor 26',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.amazonprime.com/watch/200016',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '19:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '13:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_28',
    tmdb_id: 200017,
    title: 'Film 18',
    release_day: '2025-08-02',
    duration: 141,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 18 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200017.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200017.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 27',
      writer: 'Drehbuchautor 27',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.plutotv.com/watch/200017',
        type: 'buy',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '21:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '13:00'],
          },
        ],
      },
    ],
  },
];

export const specials = [
  {
    id: 'm_11',
    tmdb_id: 200000,
    title: 'Film 1',
    release_day: '2025-08-09',
    duration: 126,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 1 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200000.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200000.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 10',
      writer: 'Drehbuchautor 10',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.plutotv.com/watch/200000',
        type: 'subscription',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '21:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_12',
    tmdb_id: 200001,
    title: 'Film 2',
    release_day: '2025-08-02',
    duration: 137,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 2 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200001.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200001.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 11',
      writer: 'Drehbuchautor 11',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.plutotv.com/watch/200001',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_13',
    tmdb_id: 200002,
    title: 'Film 3',
    release_day: '2025-08-02',
    duration: 94,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 3 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200002.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200002.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 12',
      writer: 'Drehbuchautor 12',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.netflix.com/watch/200002',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '19:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '17:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_14',
    tmdb_id: 200003,
    title: 'Film 4',
    release_day: '2025-07-31',
    duration: 139,
    genre: ['Action', 'Drama'],
    description: 'Film 4 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200003.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200003.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 13',
      writer: 'Drehbuchautor 13',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.amazonprime.com/watch/200003',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '15:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '19:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '17:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_15',
    tmdb_id: 200004,
    title: 'Film 5',
    release_day: '2025-08-24',
    duration: 95,
    genre: ['Action', 'Drama'],
    description: 'Film 5 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200004.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200004.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 14',
      writer: 'Drehbuchautor 14',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.netflix.com/watch/200004',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '17:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_16',
    tmdb_id: 200005,
    title: 'Film 6',
    release_day: '2025-08-09',
    duration: 128,
    genre: ['Animation', 'Family'],
    description: 'Film 6 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200005.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200005.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 15',
      writer: 'Drehbuchautor 15',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.plutotv.com/watch/200005',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '21:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '13:00', '17:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_17',
    tmdb_id: 200006,
    title: 'Film 7',
    release_day: '2025-08-15',
    duration: 139,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 7 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200006.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200006.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 16',
      writer: 'Drehbuchautor 16',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.plutotv.com/watch/200006',
        type: 'buy',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_18',
    tmdb_id: 200007,
    title: 'Film 8',
    release_day: '2025-07-27',
    duration: 131,
    genre: ['Action', 'Drama'],
    description: 'Film 8 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200007.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200007.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 17',
      writer: 'Drehbuchautor 17',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.amazonprime.com/watch/200007',
        type: 'subscription',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '21:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_19',
    tmdb_id: 200008,
    title: 'Film 9',
    release_day: '2025-08-12',
    duration: 108,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 9 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200008.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200008.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 18',
      writer: 'Drehbuchautor 18',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.plutotv.com/watch/200008',
        type: 'subscription',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '17:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '17:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_20',
    tmdb_id: 200009,
    title: 'Film 10',
    release_day: '2025-07-30',
    duration: 115,
    genre: ['Action', 'Drama'],
    description: 'Film 10 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200009.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200009.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 19',
      writer: 'Drehbuchautor 19',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.amazonprime.com/watch/200009',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '21:00', '19:00'],
          },
        ],
      },
    ],
  },
];
export const news: Movie[] = [
  {
    id: 'm_21',
    tmdb_id: 200010,
    title: 'Film 11',
    release_day: '2025-07-28',
    duration: 99,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 11 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200010.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 20',
      writer: 'Drehbuchautor 20',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.disney.com/watch/200010',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '17:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '15:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '21:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_22',
    tmdb_id: 200011,
    title: 'Film 12',
    release_day: '2025-08-23',
    duration: 150,
    genre: ['Animation', 'Family'],
    description: 'Film 12 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200011.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 21',
      writer: 'Drehbuchautor 21',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.disney.com/watch/200011',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '17:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_23',
    tmdb_id: 200012,
    title: 'Film 13',
    release_day: '2025-08-21',
    duration: 119,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 13 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200012.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 22',
      writer: 'Drehbuchautor 22',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.plutotv.com/watch/200012',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_23',
    tmdb_id: 200012,
    title: 'Film 13',
    release_day: '2025-08-21',
    duration: 119,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 13 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200012.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 22',
      writer: 'Drehbuchautor 22',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.plutotv.com/watch/200012',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_23',
    tmdb_id: 200012,
    title: 'Film 13',
    release_day: '2025-08-21',
    duration: 119,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 13 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200012.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 22',
      writer: 'Drehbuchautor 22',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.plutotv.com/watch/200012',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '21:00'],
          },
        ],
      },
    ],
  },
];
export const comming = [
  {
    id: 'm_29',
    tmdb_id: 200018,
    title: 'Film 19',
    release_day: '2025-08-08',
    duration: 91,
    genre: ['Animation', 'Family'],
    description: 'Film 19 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200018.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200018.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 28',
      writer: 'Drehbuchautor 28',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.amazonprime.com/watch/200018',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '17:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '13:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_30',
    tmdb_id: 200019,
    title: 'Film 20',
    release_day: '2025-08-09',
    duration: 121,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 20 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200019.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200019.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 29',
      writer: 'Drehbuchautor 29',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.plutotv.com/watch/200019',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_31',
    tmdb_id: 200020,
    title: 'Film 21',
    release_day: '2025-07-29',
    duration: 96,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 21 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200020.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200020.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 30',
      writer: 'Drehbuchautor 30',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.netflix.com/watch/200020',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_32',
    tmdb_id: 200021,
    title: 'Film 22',
    release_day: '2025-08-18',
    duration: 90,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 22 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200021.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200021.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 31',
      writer: 'Drehbuchautor 31',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.disney.com/watch/200021',
        type: 'buy',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '13:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '13:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '21:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '13:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_33',
    tmdb_id: 200022,
    title: 'Film 23',
    release_day: '2025-08-03',
    duration: 130,
    genre: ['Action', 'Drama'],
    description: 'Film 23 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200022.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200022.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 32',
      writer: 'Drehbuchautor 32',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.netflix.com/watch/200022',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_34',
    tmdb_id: 200023,
    title: 'Film 24',
    release_day: '2025-08-09',
    duration: 140,
    genre: ['Action', 'Drama'],
    description: 'Film 24 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200023.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200023.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 33',
      writer: 'Drehbuchautor 33',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.disney.com/watch/200023',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_35',
    tmdb_id: 200024,
    title: 'Film 25',
    release_day: '2025-08-07',
    duration: 140,
    genre: ['Animation', 'Family'],
    description: 'Film 25 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200024.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200024.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 34',
      writer: 'Drehbuchautor 34',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.netflix.com/watch/200024',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '19:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '13:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_36',
    tmdb_id: 200025,
    title: 'Film 26',
    release_day: '2025-08-03',
    duration: 141,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 26 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200025.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200025.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 35',
      writer: 'Drehbuchautor 35',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.plutotv.com/watch/200025',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '13:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_37',
    tmdb_id: 200026,
    title: 'Film 27',
    release_day: '2025-07-26',
    duration: 116,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 27 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200026.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200026.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 36',
      writer: 'Drehbuchautor 36',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.plutotv.com/watch/200026',
        type: 'subscription',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '17:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '19:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '13:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_38',
    tmdb_id: 200027,
    title: 'Film 28',
    release_day: '2025-08-04',
    duration: 123,
    genre: ['Action', 'Drama'],
    description: 'Film 28 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200027.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200027.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 37',
      writer: 'Drehbuchautor 37',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.amazonprime.com/watch/200027',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_39',
    tmdb_id: 200028,
    title: 'Film 29',
    release_day: '2025-08-23',
    duration: 130,
    genre: ['Action', 'Drama'],
    description: 'Film 29 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200028.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200028.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 38',
      writer: 'Drehbuchautor 38',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.netflix.com/watch/200028',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '15:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_40',
    tmdb_id: 200029,
    title: 'Film 30',
    release_day: '2025-07-31',
    duration: 121,
    genre: ['Animation', 'Family'],
    description: 'Film 30 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200029.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200029.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 39',
      writer: 'Drehbuchautor 39',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.amazonprime.com/watch/200029',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '21:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '21:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '21:00', '17:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_41',
    tmdb_id: 200030,
    title: 'Film 31',
    release_day: '2025-08-18',
    duration: 129,
    genre: ['Fantasy', 'Romance'],
    description: 'Film 31 ist ein spannender Film mit einem Hauch von Fantasy und Romance.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200030.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200030.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 40',
      writer: 'Drehbuchautor 40',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.disney.com/watch/200030',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '21:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '13:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '19:00', '13:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_42',
    tmdb_id: 200031,
    title: 'Film 32',
    release_day: '2025-07-29',
    duration: 104,
    genre: ['Action', 'Drama'],
    description: 'Film 32 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200031.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200031.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 41',
      writer: 'Drehbuchautor 41',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Amazon Prime',
        url: 'https://www.amazonprime.com/watch/200031',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '15:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '13:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_43',
    tmdb_id: 200032,
    title: 'Film 33',
    release_day: '2025-08-01',
    duration: 129,
    genre: ['Action', 'Drama'],
    description: 'Film 33 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200032.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200032.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 42',
      writer: 'Drehbuchautor 42',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.netflix.com/watch/200032',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '13:00', '21:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_44',
    tmdb_id: 200033,
    title: 'Film 34',
    release_day: '2025-07-28',
    duration: 109,
    genre: ['Action', 'Drama'],
    description: 'Film 34 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200033.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200033.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 43',
      writer: 'Drehbuchautor 43',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.disney.com/watch/200033',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '17:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '17:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_45',
    tmdb_id: 200034,
    title: 'Film 35',
    release_day: '2025-08-14',
    duration: 124,
    genre: ['Animation', 'Family'],
    description: 'Film 35 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200034.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200034.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 44',
      writer: 'Drehbuchautor 44',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.plutotv.com/watch/200034',
        type: 'free',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_2',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '17:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_7',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '17:00', '13:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_46',
    tmdb_id: 200035,
    title: 'Film 36',
    release_day: '2025-08-16',
    duration: 104,
    genre: ['Animation', 'Family'],
    description: 'Film 36 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200035.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200035.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 45',
      writer: 'Drehbuchautor 45',
    },
    language: 'de',
    rating: 'FSK 12',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'PlutoTV',
        url: 'https://www.disney.com/watch/200035',
        type: 'buy',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_1',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['21:00', '19:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '13:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '15:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_47',
    tmdb_id: 200036,
    title: 'Film 37',
    release_day: '2025-08-18',
    duration: 129,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 37 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200036.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200036.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 46',
      writer: 'Drehbuchautor 46',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.plutotv.com/watch/200036',
        type: 'buy',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '13:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '17:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '15:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '13:00', '17:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_48',
    tmdb_id: 200037,
    title: 'Film 38',
    release_day: '2025-08-17',
    duration: 134,
    genre: ['Adventure', 'Sci-Fi'],
    description: 'Film 38 ist ein spannender Film mit einem Hauch von Adventure und Sci-Fi.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200037.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200037.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 47',
      writer: 'Drehbuchautor 47',
    },
    language: 'de',
    rating: 'FSK 18',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.disney.com/watch/200037',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '15:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '19:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['19:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['15:00', '21:00', '19:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '21:00', '17:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '13:00', '19:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '21:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_3',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '21:00', '17:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_49',
    tmdb_id: 200038,
    title: 'Film 39',
    release_day: '2025-08-18',
    duration: 117,
    genre: ['Animation', 'Family'],
    description: 'Film 39 ist ein spannender Film mit einem Hauch von Animation und Family.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200038.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200038.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 48',
      writer: 'Drehbuchautor 48',
    },
    language: 'de',
    rating: 'FSK 6',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Disney+',
        url: 'https://www.netflix.com/watch/200038',
        type: 'rent',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_9',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['19:00', '15:00', '13:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_5',
        dates: [
          {
            date: '2025-07-25',
            times: ['13:00', '17:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['15:00', '19:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '17:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_4',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '15:00', '21:00'],
          },
          {
            date: '2025-07-26',
            times: ['17:00', '13:00', '15:00'],
          },
          {
            date: '2025-07-27',
            times: ['21:00', '15:00', '19:00'],
          },
        ],
      },
    ],
  },
  {
    id: 'm_50',
    tmdb_id: 200039,
    title: 'Film 40',
    release_day: '2025-08-11',
    duration: 124,
    genre: ['Action', 'Drama'],
    description: 'Film 40 ist ein spannender Film mit einem Hauch von Action und Drama.',
    poster_url: 'https://image.tmdb.org/t/p/w500/poster_200039.jpg',
    backdrop_url: 'https://image.tmdb.org/t/p/w780/backdrop_200039.jpg',
    cast: ['Schauspieler 1', 'Schauspieler 2', 'Schauspieler 3'],
    crew: {
      director: 'Regisseur 49',
      writer: 'Drehbuchautor 49',
    },
    language: 'de',
    rating: 'FSK 16',
    in_cinemas: true,
    streaming_available: true,
    streaming_links: [
      {
        platform: 'Netflix',
        url: 'https://www.plutotv.com/watch/200039',
        type: 'buy',
      },
    ],
    cinema_showtimes: [
      {
        cinema_id: 'cinema_6',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '21:00', '13:00'],
          },
          {
            date: '2025-07-26',
            times: ['13:00', '15:00', '17:00'],
          },
          {
            date: '2025-07-27',
            times: ['13:00', '19:00', '21:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_10',
        dates: [
          {
            date: '2025-07-25',
            times: ['17:00', '21:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['19:00', '13:00', '21:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '13:00', '15:00'],
          },
        ],
      },
      {
        cinema_id: 'cinema_8',
        dates: [
          {
            date: '2025-07-25',
            times: ['15:00', '17:00', '19:00'],
          },
          {
            date: '2025-07-26',
            times: ['21:00', '17:00', '13:00'],
          },
          {
            date: '2025-07-27',
            times: ['17:00', '21:00', '19:00'],
          },
        ],
      },
    ],
  },
];
