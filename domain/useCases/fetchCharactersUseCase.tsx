// domain/useCases/fetchCharactersUseCase.ts
import { ICharacterRepository } from "@/data/repositories/characterRepository";
import { Character } from "../entities/character";

export class FetchCharactersUseCase {
  constructor(private characterRepository: ICharacterRepository) {}

  async execute(
    page: number,
    searchTerm: string
  ): Promise<{ results: Character[]; info: { count: number } }> {
    return this.characterRepository.fetchCharacters(page, searchTerm);
  }
}
