import { Episode } from "@/src/domain/entities/episode";
import { IEpisodeDataSource } from "../../dataSources/episode/IEpisodeDataSources";
import { IEpisodeRepository } from "./episodeRepository";

export class EpisodeRepositoryImpl implements IEpisodeRepository {
  constructor(private dataSource: IEpisodeDataSource) {}

  async fetchEpisodesByIds(ids: number[]): Promise<Episode[]> {
    return this.dataSource.fetchEpisodesByIds(ids);
  }
}
