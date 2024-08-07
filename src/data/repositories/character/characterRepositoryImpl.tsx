// data/repositories/characterRepositoryImpl.ts
import { Character, CharacterResponse } from "@/src/domain/entities/character";
import { ICharacterRepository } from "./characterRepository";
import { ICharacterDataSource } from "../../dataSources/character/ICharacterDataSources";

export class CharacterRepositoryImpl implements ICharacterRepository {
  constructor(private dataSource: ICharacterDataSource) {}
  async getCharacterById(id: number): Promise<Character> {
    return this.dataSource.getCharacterById(id);
  }

  async fetchCharacters(
    page: number,
    searchTerm: string
  ): Promise<CharacterResponse> {
    return this.dataSource.fetchCharacters(page, searchTerm);
  }
}
