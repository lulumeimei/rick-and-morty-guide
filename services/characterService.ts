import axios from 'axios';
import { CharacterResponse } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page: number, name?: string): Promise<CharacterResponse> => {
    const params: { page: number; name?: string } = { page };
    if (name) {
        params.name = name;
    }

    const response = await axios.get(`${BASE_URL}/character`, { params });
    return response.data;
};