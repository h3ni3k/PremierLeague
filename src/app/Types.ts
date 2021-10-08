export interface ResponseBody {
  status: boolean;
  data: Data;
}

export interface Data {
  name: string;
  abbreviation: string;
  seasonDisplay: string;
  season: number;
  standings: Standing[];
}

export interface Standing {
  team: Team;
  note?: Note;
  stats: Stat[];
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  type: string;
  value?: number;
  displayValue: string;
  id?: string;
  summary?: string;
}

export interface Note {
  color: string;
  description: string;
  rank: number;
}

export interface Team {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
  logos: Logo[];
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: string;
}
