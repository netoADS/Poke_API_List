import { AxiosResponse } from "axios";
import { PokemonListInterface } from "../types/AppInterface";
import api from "./api";

interface PokemonServicesListarParams {
  itensPorPagina: number;
  pagina: number;
}

const PokemonServices = {
  listarPokemons: async (
    params: PokemonServicesListarParams
  ): Promise<PokemonListInterface> => {
    const { itensPorPagina, pagina } = params;

    const requestParams = `/?offset=${
      (pagina - 1) * itensPorPagina
    }&limit=${itensPorPagina}`;

    try {
      const response: AxiosResponse<PokemonListInterface> = await api.get(
        requestParams
      );
      return response.data;
    } catch (err) {
      throw new Error("Erro ao consultar a api");
    }
  },
};

export default PokemonServices;
