import { Character, CharacterResponse } from "@/src/domain/entities/character";
import { ICharacterDataSource } from "./ICharacterDataSources";

export class CharacterApiDataSource implements ICharacterDataSource {
  async getCharacterById(id: number): Promise<Character> {
    const response = fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return response.then((res) => res.json());
  }
  async fetchCharacters(
    page: number,
    searchTerm: string
  ): Promise<CharacterResponse> {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchTerm}`
    );
    const data = await response.json();
    return {
      results: data.results,
      info: data.info,
    };
  }
}
