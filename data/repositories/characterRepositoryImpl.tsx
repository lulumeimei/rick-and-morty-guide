// data/repositories/characterRepositoryImpl.ts
import { CharacterResponse } from "@/domain/entities/character";
import { ICharacterRepository } from "./characterRepository";
import { ICharacterDataSource } from "../dataSources/ICharacterDataSources";

export class CharacterRepositoryImpl implements ICharacterRepository {
  constructor(private dataSource: ICharacterDataSource) {}

  async fetchCharacters(
    page: number,
    searchTerm: string
  ): Promise<CharacterResponse> {
    return this.dataSource.fetchCharacters(page, searchTerm);
  }
}
