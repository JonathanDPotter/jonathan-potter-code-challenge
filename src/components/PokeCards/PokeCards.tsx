import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Iresult } from "../../utils/interfaces/allPokemon";
import PokeCard from "../PokeCard/PokeCard";

interface Iprops {
  listedPokemon: Iresult[];
}

const PokeCards: FC<Iprops> = ({ listedPokemon }) => {
  const { favorites } = useAppSelector((state) => state.favorites);

  const [favoritesList, setFavoritesList] = useState<string[]>([]);

  useEffect(() => {
    favorites && setFavoritesList(favorites);
  }, [favorites]);

  return (
    <div className="poke-cards">
      {favoritesList &&
        listedPokemon.map((result: Iresult) => (
          <PokeCard
            pokeData={result}
            key={result.name}
            favorite={favoritesList?.includes(result.name)}
          />
        ))}
    </div>
  );
};

export default PokeCards;
