import { Episode } from "@/src/domain/entities/episode";

export interface IEpisodeRepository {
  fetchEpisodesByIds(ids: number[]): Promise<Episode[]>;
}
