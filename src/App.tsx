import React, { FC } from "react";
import "./App.scss";
// components
import Home from "./components/pages/Home";
import { useAppSelector } from "./store/hooks";
// utils
import { useGetAllPokemonQuery } from "./store/slices/pokeSlice";

const App = () => {
  const { data, error, isLoading } = useGetAllPokemonQuery("");
  error && console.log(error);

  const Display: FC = () => {
    return isLoading ? <p>Loading...</p> : <Home data={data} />;
  };

  const state = useAppSelector((state) => state)

  return (
    <div>
      <Display />
    </div>
  );
};

export default App;
