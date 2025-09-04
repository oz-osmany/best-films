import { create } from 'zustand';

type Time = {
  time: string;
  day: string;
  selectedDay: string;
  selectDay: (day: string) => void;
  selectedTime: string;
  selectTime: (time: string) => void;
};

export const useSchedule = create<Time>((set) => ({
  time: '19:00',
  day: 'FRI 01 AGU',
  selectedDay: '',
  selectDay: (day) => set({ selectedDay: day }),
  selectedTime: '',
  selectTime: (time) => set({ selectedTime: time }),
}));
