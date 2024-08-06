// pages/_app.tsx
import "@/styles/globals.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Layout from "@/components/Layout";
import { UseCaseProvider } from "@/context/useCaseContext";
import { FetchCharactersUseCase } from "@/domain/useCases/fetchCharactersUseCase";
import { CharacterRepositoryImpl } from "@/data/repositories/characterRepositoryImpl";
import { CharacterApiDataSource } from "@/data/dataSources/CharacterApiDataSource";

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
