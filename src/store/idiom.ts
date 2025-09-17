
import { create } from "zustand"

type Idiom = {
    idioms: string;
    selectedIdiom: string;
    selectIdiom: (idiom:string)=>void
}

export const useIdiom = create<Idiom>((set)=>({
    idioms:'en',
    selectedIdiom: '',
    selectIdiom: (idiom)=>(set({selectedIdiom:idiom}))
}))