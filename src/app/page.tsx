import FilmesEmAlta from "../componentes/FilmesEmAltaClient";
import SaibaMais from "@/componentes/SaibaMais";
import React from 'react';
import MaisMotivos from "@/componentes/MaisMotivos";
import BannerPrincipal from "@/componentes/BannerPrincipal";
import DropdownMenu from "@/componentes/MenuDrop";



const Home = () => {
  return (
    <div className="font-sans w-full items-center justify-items-center bg-cover bg-fixed bg-[url('/bg-site-netflix.jpg')]">
      <main className=" pb-300 bg-black/60 w-full">
        <BannerPrincipal/>
        <SaibaMais/>
        <FilmesEmAlta/>
        <MaisMotivos/>
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
          <DropdownMenu />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}

export default Home;