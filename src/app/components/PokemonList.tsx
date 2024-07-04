"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center ">
      {pokemons.map((pokemon) => (
        <div
          className="w-36 h-40 flex justify-center items-center bg-white  m-2 p-2 border border-solid rounded-md "
          key={pokemon.id}
        >
          <Link href={`/pokemon/${pokemon.id}`}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.korean_name}
              width={96}
              height={96}
            />
            <p>{pokemon.korean_name}</p>
            <p>도감번호: {pokemon.id}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
