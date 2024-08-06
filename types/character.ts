import { Info } from "./info";
import { Origin } from "./origin";
import { Location } from './location';


export interface Character {
    id: number;
    name: string;
    status: 'Dead' | 'Alive' | 'unknown'
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharacterResponse {
    info: Info;
    results: Character[];
}