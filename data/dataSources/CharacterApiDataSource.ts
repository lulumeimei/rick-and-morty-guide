// data/datasources/CharacterApiDataSource.ts
import { Character, CharacterResponse } from "@/domain/entities/character";
import { ICharacterDataSource } from "./ICharacterDataSources";

export class CharacterApiDataSource implements ICharacterDataSource {
    async fetchCharacters(page: number, searchTerm: string): Promise<CharacterResponse> {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}`);
        const data = await response.json();
        return {
            results: data.results,
            info: data.info,
        };
    }
}