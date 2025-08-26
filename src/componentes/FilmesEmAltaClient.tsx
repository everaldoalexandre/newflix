'use client'

import FilmeEmAlta from "./FilmeEmAlta";
import {useState, useEffect} from 'react';
import type {Filme} from "@/types/filme"

function FilmesEmAlta () {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null> (null);

  const carregarFilmes = () => {
    setLoading(true);
    setError(null);

    fetch('/api/filmes')
    .then(response => response.json())
    .then(data => { 
      if (Array.isArray(data)) {
        setFilmes(data);
      } else if (Array.isArray(data.filmes)) {
        setFilmes(data.filmes);
      } else {
        throw new Error("A API não retornou um array de filmes.");
      }
      setError(null);
    })

    .catch(err => {
      console.error("Erro ao buscar filmes:", err);
      setError("Erro ao carregar filmes. Tente novamente mais tarde.");
      setFilmes([]);
    })
    .finally(() => setLoading(false));
  };
  
  useEffect(() => {
    carregarFilmes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10 text-white">
        Carregando filmes...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center p-10 text-white">
        <p>{error}</p>
        <button onClick={carregarFilmes} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Tentar novamente
        </button>
      </div>
    )
  }
  
  return(
    <div className="flex flex-col pt-20 pl-30 pr-30">
      <h2 className=" text-white font-bold text-3xl">Em Alta</h2>
      <div className="overflow">
        <ul className="flex w-full justify-center items-center pt-3">
          {filmes.map((filme, index) => (<FilmeEmAlta
          key = {index}
          filme = {filme}/>))}
        </ul>
      </div>
    </div>
  )
}

export default FilmesEmAlta;