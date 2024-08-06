import { Info } from "./info";
import { Origin } from "./origin";
import { Location } from './location';


export class Character {
    constructor(
        public id: number,
        public name: string,
        public status: string,
        public species: string,
        public type: string,
        public gender: string,
        public origin: Origin,
        public location: Location,
        public image: string,
        public episode: string[],
        public url: string,
        public created: string,
    ) { }
}



export interface CharacterResponse {
    info: Info;
    results: Character[];
}