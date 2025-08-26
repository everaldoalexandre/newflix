import FilmeEmAlta from "./FilmeEmAlta";
import type {Filme} from "@/types/filme";

export default async function FilmesEmAlta () {
  const response = await fetch('http://localhost:3000/api/filmes')
  const {filmes} = await response.json() as {filmes: Filme[]}
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