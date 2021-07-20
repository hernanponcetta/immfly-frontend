import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface Results {
  status: "loading" | "loaded" | "error";
  data?: {
    count: number;
    next: string;
    previous: null | string;
    results: Pokemon[];
  };
  error?: Error;
}

const usePokemonList = () => {
  const [result, setResult] = useState<Results>({
    status: "loading",
  });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", data: response }))
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default usePokemonList;
