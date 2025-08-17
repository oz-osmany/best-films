import { Cinema } from "@/api/typeCinema";
import { create } from "zustand";

// State
type CinemaState = {
  selectedCinema: Cinema | null;     // Currently selected movie
  cinemas: Cinema[];                 // List of loaded cinemas
  setCinemas: (cinemas: Cinema[]) => void; 
  selectCinema: (cinema: Cinema) => void;
  clearCinema: () => void;
};

// Create store
export const useCinemaStore = create<CinemaState>((set) => ({
  selectedCinema: {
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
  },
  cinemas: [],
  setCinemas: (cinemas) => set({ cinemas }),
  selectCinema: (cinema) => set({ selectedCinema: cinema }),
  clearCinema: () => set({ selectedCinema: null }),
}));
