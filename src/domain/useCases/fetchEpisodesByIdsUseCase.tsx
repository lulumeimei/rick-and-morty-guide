import { IEpisodeRepository } from "@/src/data/repositories/episode/episodeRepository";
import { Episode } from "../entities/episode";

export class FetchEpisodesByIdsUseCase {
  constructor(private episodeRepository: IEpisodeRepository) {}

  async execute(ids: number[]): Promise<Episode[]> {
    return this.episodeRepository.fetchEpisodesByIds(ids);
  }
}
