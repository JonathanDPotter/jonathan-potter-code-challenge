export interface IallPokemon {
  count: number;
  next: string;
  previous: null;
  results: Iresult[];
}

export interface Iresult {
  name: string;
  url: string;
}
