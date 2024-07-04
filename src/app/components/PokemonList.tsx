"use client";

import React, { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);
  return <div>PokemonList</div>;
};

export default PokemonList;
