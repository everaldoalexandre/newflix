import Image from "next/image";
import type {Filme} from "@/types/filme"

type Props = {filme: Filme}

export default function FilmeEmAlta ({filme} : Props) {

    return(
      <li className="list-none relative flex justify-end w-65 h-55 hover:scale-105 transition-transform duration-300">
          <Image src={filme.image} alt="Em Alta 1" width={140} height={100} className="rounded-md"/>
        <span className="absolute bottom-0 right-24">
          <Image src={filme.numero} alt="Em Alta 1" width={100} height={100}/>
        </span>
      </li>
    );
}