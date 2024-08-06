import { Character, CharacterResponse } from "@/domain/entities/character";

export interface ICharacterDataSource {
  fetchCharacters(page: number, searchTerm: string): Promise<CharacterResponse>;
}
