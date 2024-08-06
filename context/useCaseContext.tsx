// context/useCaseContext.tsx
import React, { createContext, useContext } from "react";
import { FetchCharactersUseCase } from "@/domain/useCases/fetchCharactersUseCase";

const UseCaseContext = createContext<FetchCharactersUseCase | null>(null);

export const UseCaseProvider = ({
  children,
  fetchCharactersUseCase,
}: {
  children: React.ReactNode;
  fetchCharactersUseCase: FetchCharactersUseCase;
}) => {
  return (
    <UseCaseContext.Provider value={fetchCharactersUseCase}>
      {children}
    </UseCaseContext.Provider>
  );
};

export const useFetchCharactersUseCase = () => {
  const context = useContext(UseCaseContext);
  if (!context) {
    throw new Error(
      "useFetchCharactersUseCase must be used within a UseCaseProvider"
    );
  }
  return context;
};
