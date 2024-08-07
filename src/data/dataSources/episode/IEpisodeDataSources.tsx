import { Episode } from "@/src/domain/entities/episode";

export interface IEpisodeDataSource {
  fetchEpisodesByIds(ids: number[]): Promise<Episode[]>;
}
