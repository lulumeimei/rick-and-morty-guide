import { CharacterResponse } from "../../domain/entities/character";

export interface ICharacterRepository {
  fetchCharacters(page: number, searchTerm: string): Promise<CharacterResponse>;
}
