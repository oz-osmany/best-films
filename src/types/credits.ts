export interface Creditos {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: DepartmentType;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: DepartmentType;
  job?: string;
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

export type DepartmentType = (typeof Department)[keyof typeof Department];
