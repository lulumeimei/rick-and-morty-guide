import { Character, CharacterResponse } from "@/src/domain/entities/character";

export interface ICharacterDataSource {
  fetchCharacters(page: number, searchTerm: string): Promise<CharacterResponse>;

  getCharacterById(id: number): Promise<Character>;
}
