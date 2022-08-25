import React, { FC, FormEvent } from "react";
// comoponents
import LabelInput from "./LabelInput";
// utils
import pokeGeneration from "../../utils/enums/pokeGeneration";
import pokeType from "../../utils/enums/pokeType";
// styles
import "./SearchForm.scss";

interface Iprops {
  name: string;
  names: string[];
  type: pokeType | null;
  generation: pokeGeneration | null;
  handleChange: (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  clearForm: () => void;
}

const SearchForm: FC<Iprops> = ({
  name,
  names,
  type,
  generation,
  handleChange,
  clearForm,
}) => {
  return (
    <form autoComplete="off">
      <h2>Filter by:</h2>
      <LabelInput>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          className="autocomplete"
        />
      </LabelInput>
      <LabelInput>
        <label htmlFor="type">Type: </label>
        <select name="type" id="type" onChange={handleChange}>
          <option value={" "}></option>
          {Object.values(pokeType).map((thisType) => (
            <option value={thisType} key={thisType}>
              {thisType}
            </option>
          ))}
        </select>
      </LabelInput>
      <LabelInput>
        <label htmlFor="generation">Generation: </label>
        <select name="generation" id="generation" onChange={handleChange}>
          <option value={" "}></option>
          {Object.values(pokeGeneration).map((thisGeneration) => (
            <option value={thisGeneration} key={thisGeneration}>
              {thisGeneration}
            </option>
          ))}
        </select>
      </LabelInput>
      <button onClick={clearForm}>Clear Filters</button>
    </form>
  );
};

export default SearchForm;
