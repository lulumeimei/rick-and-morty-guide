import { Character, CharacterResponse } from "@/src/domain/entities/character";

export interface ICharacterRepository {
  fetchCharacters(page: number, searchTerm: string): Promise<CharacterResponse>;

  getCharacterById(id: number): Promise<Character>;
}
