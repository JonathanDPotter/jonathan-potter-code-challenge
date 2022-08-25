import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Iresult } from "../../utils/interfaces/allPokemon";
import "./PokeCard.scss";
import { useAppDispatch } from "../../store/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/favoritesSlice";
import axios from "axios";
import { IonePokemon } from "../../utils/interfaces/onePokemon";

interface Iprops {
  pokeData: Iresult;
  favorite: boolean;
}

const PokeCard: FC<Iprops> = ({ pokeData, favorite }) => {
  const dispatch = useAppDispatch();

  const [img, setImg] = useState("");

  const handleFavorite = () => {
    favorite
      ? dispatch(removeFromFavorites(pokeData.name))
      : dispatch(addToFavorites(pokeData.name));
  };

  return (
    <div className="poke-card">
      <h2>{pokeData.name}</h2>
      <FontAwesomeIcon
        icon={faStar}
        onClick={handleFavorite}
        className={favorite ? "star favorite" : "star"}
      />
    </div>
  );
};

export default PokeCard;
