import { ICharacterRepository } from "@/src/data/repositories/character/characterRepository";
import { Character } from "../entities/character";

export class FetchCharacterByIdUseCase {
  constructor(private characterRepository: ICharacterRepository) {}

  async execute(id: number): Promise<Character> {
    return await this.characterRepository.getCharacterById(id);
  }
}
