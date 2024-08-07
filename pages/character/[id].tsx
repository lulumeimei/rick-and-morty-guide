import { GetServerSideProps } from "next";

import { Container, Typography, Box } from "@mui/material";
import SEO from "../../src/components/shared/SEO";
import { Character } from "@/src/domain/entities/character";
import { CharacterApiDataSource } from "@/src/data/dataSources/character/CharacterApiDataSource";
import { FetchCharacterByIdUseCase } from "@/src/domain/useCases/fetchCharacterByIdUseCase";
import ContactInformationSection from "@/src/components/character/ContactInformationSection";
import PersonalInformationSection from "@/src/components/character/PersonalInformationSection";
import EpisodeAppearancesSection from "@/src/components/character/EpisodeAppearancesSection";
import { CharacterRepositoryImpl } from "@/src/data/repositories/character/characterRepositoryImpl";
import { Episode } from "@/src/domain/entities/episode";
import { EpisodeApiDataSource } from "@/src/data/dataSources/episode/EpisodeApiDataSource";
import { EpisodeRepositoryImpl } from "@/src/data/repositories/episode/episodeRepositoryImpl";
import { FetchEpisodesByIdsUseCase } from "@/src/domain/useCases/fetchEpisodesByIdsUseCase";

interface CharacterDetailProps {
  character: Character | null;
  error?: string;
  episodes: Episode[];
  errorFetchingEpisodes?: string;
}

const CharacterDetailPage = ({
  character,
  error,
  episodes,
  errorFetchingEpisodes,
}: CharacterDetailProps) => {
  if (error) {
    return (
      <Container>
        <SEO
          title="Character Not Found - Rick and Morty"
          description="Character details not found"
        />
        <Typography variant="h4" align="center" marginTop={4}>
          {error}
        </Typography>
      </Container>
    );
  }

  if (!character) {
    return (
      <Container>
        <SEO title="Loading..." description="Loading character details" />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h4">Loading...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <SEO
        title={`${character.name} - Rick and Morty`}
        description={`Details about ${character.name}`}
      />
      <ContactInformationSection
        name={character.name}
        image={character.image}
      />
      <PersonalInformationSection character={character} />
      <EpisodeAppearancesSection episodes={episodes} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const characterDataSource = new CharacterApiDataSource();
  const characterRepository = new CharacterRepositoryImpl(characterDataSource);
  const fetchCharacterByIdUseCase = new FetchCharacterByIdUseCase(
    characterRepository
  );

  const episodeDataSource = new EpisodeApiDataSource();
  const episodeRepository = new EpisodeRepositoryImpl(episodeDataSource);
  const fetchEpisodesByIdsUseCase = new FetchEpisodesByIdsUseCase(
    episodeRepository
  );
  let character: Character | null = null;

  try {
    character = await fetchCharacterByIdUseCase.execute(parseInt(id as string));

    if (!character) {
      return {
        props: {
          character: null,
          error: "Character not found",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        character: null,
        error: "Failed to fetch character details",
      },
    };
  }

  try {
    const episodes = await fetchEpisodesByIdsUseCase.execute(
      character.episode.map((ep) => {
        const urlParts = ep.split("/");
        return parseInt(urlParts[urlParts.length - 1]);
      })
    );
    return {
      props: {
        character,
        episodes,
      },
    };
  } catch (error) {
    return {
      props: {
        character,
        episodes: [],
        errorFetchingEpisodes: "Failed to fetch episodes",
      },
    };
  }
};

export default CharacterDetailPage;
