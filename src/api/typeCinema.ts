export type DayName = 'today' | 'tomorrow' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

// 2) Horarios por día
export type Schedule = Record<DayName, string[]>;

// 3) Tipos de apoyo
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ContactInfo {
  phone: string;
  website: string;
}

// 4) El cine
export interface Cinema {
  id: string;
  name: string;
  city: string;
  address: string;
  coordinates: Coordinates;
  chain: string;
  contact: ContactInfo;
  list: Schedule;
}

// 5) Objeto tipado
export const cinema: Cinema = {
  id: 'cinema_1',
  name: 'Filmpalast Berlin',
  city: 'Berlin',
  address: 'Hauptstraße 66, Berlin',
  coordinates: { lat: 50.0, lng: 8.0 },
  chain: 'Cineplex',
  contact: {
    phone: '+49 30 1234056',
    website: 'https://www.cinemaxx.de/berlin',
  },
  list: {
    today: ['13h', '15h', '17h'],
    tomorrow: ['14h', '16h', '18h'],
    day1: ['10h', '12h', '17h'],
    day2: ['09h', '11h', '13h'],
    day3: ['13h', '15h', '17h'],
    day4: ['11h', '15h', '16h'],
    day5: ['13h', '15h', '17h'],
    day6: ['13h', '15h', '17h'],
  },
};

// 6) Helper seguro para leer horarios por día
export function getShowtimes(c: Cinema, day: DayName): string[] {
  return c.list[day];
}
