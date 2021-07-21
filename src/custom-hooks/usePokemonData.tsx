import { useState, useEffect } from "react";

interface Abilitie {
  ability: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  height: number;
  name: string;
  abilities: Abilitie[];
  types: Type[];
}

export interface Results {
  status: "loading" | "loaded" | "error";
  data?: Pokemon;
  error?: Error;
}

const usePokemonData = (url: string) => {
  const [result, setResult] = useState<Results>({
    status: "loading",
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", data: response }))
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default usePokemonData;
