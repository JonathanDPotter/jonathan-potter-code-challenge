import React, { FC, FormEvent, useEffect, useState } from "react";
import pokeGeneration from "../../utils/enums/pokeGeneration";
import pokeType from "../../utils/enums/pokeType";
import { IallPokemon, Iresult } from "../../utils/interfaces/allPokemon";
import PokeCards from "../PokeCards/PokeCards";
import SearchForm from "../SearchForm/SearchForm";

interface Iprops {
  data: IallPokemon;
}

interface IformData {
  name: string;
  type: pokeType | null;
  generation: pokeGeneration | null;
}

const Home: FC<Iprops> = ({ data }) => {
  const initialFormData = { name: "", type: null, generation: null };

  const [listedPokemon, setListedPokemon] = useState(data.results);

  const [formData, setFormData] = useState<IformData>(initialFormData);
  const { name, type, generation } = formData;

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.currentTarget;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const clearForm = () => {
    setFormData(initialFormData);
  };

  const SearchFormProps = {
    name,
    names: data.results.map((result) => result.name),
    type,
    generation,
    handleChange,
    clearForm,
  };

  useEffect(() => {
    name
      ? setListedPokemon(data.results.filter((pokemon) => pokemon.name == name))
      : setListedPokemon(data.results);
  }, [formData]);

  return (
    <div>
      <SearchForm {...SearchFormProps} />
      <PokeCards listedPokemon={listedPokemon} />
    </div>
  );
};

export default Home;
