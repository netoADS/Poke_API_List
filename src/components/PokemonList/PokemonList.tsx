import React, { useEffect, useState } from "react";
import PokemonServices from "../../services/PokemonServices";
import {PokemonListInterface} from "../../types/AppInterface"

const PokemonList: React.FC = () => {
  const [pagina, setPagina] = useState<number>(1);
  const [itensPorPagina, setItensPorPagina] = useState<number>(20);

  const handleListarDados = async () => {
    const responseData: PokemonListInterface = await PokemonServices.listarPokemons({
      itensPorPagina: itensPorPagina,
      pagina: pagina,
    });
  };

  useEffect(() => {
    handleListarDados();
  }, [handleListarDados]);

  return <React.Fragment></React.Fragment>;
};

export default PokemonList;
