import { Episode } from "@/src/domain/entities/episode";
import { IEpisodeDataSource } from "./IEpisodeDataSources";

export class EpisodeApiDataSource implements IEpisodeDataSource {
  async fetchEpisodesByIds(ids: number[]): Promise<Episode[]> {
    const response = fetch(`https://rickandmortyapi.com/api/episode/[${ids}]`);
    return response.then((res) => res.json());
  }
}
