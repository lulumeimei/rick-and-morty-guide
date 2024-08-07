// pages/_app.tsx
import "@/styles/globals.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Layout from "@/src/components/shared/Layout";
import { FetchCharactersUseCase } from "@/src/domain/useCases/fetchCharactersUseCase";
import { CharacterApiDataSource } from "@/src/data/dataSources/character/CharacterApiDataSource";
import { UseCaseProvider } from "@/src/context/useCaseContext";
import { CharacterRepositoryImpl } from "@/src/data/repositories/character/characterRepositoryImpl";

export default function App({ Component, pageProps }: AppProps) {
  const characterDataSource = new CharacterApiDataSource();
  const characterRepository = new CharacterRepositoryImpl(characterDataSource);
  const fetchCharactersUseCase = new FetchCharactersUseCase(
    characterRepository
  );

  return (
    <UseCaseProvider fetchCharactersUseCase={fetchCharactersUseCase}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UseCaseProvider>
  );
}
