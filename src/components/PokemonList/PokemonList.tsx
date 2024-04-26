import React, { useEffect, useState } from "react";
import PokemonServices from "../../services/PokemonServices";
import {
  PokemonItemListInterface,
  PokemonListInterface,
} from "../../types/AppInterface";

const PokemonList: React.FC = () => {
  const [pagina, setPagina] = useState<number>(1);
  const [itensPorPagina, setItensPorPagina] = useState<number>(20);
  const [pokemonItens, setPokemonItens] = useState<PokemonItemListInterface[]>(
    []
  );

  const handleListarDados = async () => {
    const responseData: PokemonListInterface =
      await PokemonServices.listarPokemons({
        itensPorPagina: itensPorPagina,
        pagina: pagina,
      });
    if (responseData.results.length > 0) {
      setPokemonItens(responseData.results);
    }
  };

  useEffect(() => {
    handleListarDados();
  }, [handleListarDados]);

  return <React.Fragment></React.Fragment>;
};

export default PokemonList;
