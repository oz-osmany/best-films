import { create } from 'zustand';

type Infoticket = {
  seat: number;
  selectedSeat: number;
  selectSeat: (seat: number) => void;
  kind: string;
  total: number;
  selectedTotal: number;
  selectTotal: (total: number) => void;
};

export const useTicket = create<Infoticket>((set) => ({
  seat: 0,
  selectedSeat: 0,
  selectSeat: (seat) => {
    set({ selectedSeat: seat });
  },
  kind: '',
  total: 0,
  selectedTotal: 0,
  selectTotal: (total) => {
    set({ selectedTotal: total });
  },
}));
