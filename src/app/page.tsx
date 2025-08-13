import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans w-ful items-center justify-items-center bg-cover bg-fixed bg-[url('/bg-site-netflix.jpg')]">
      <main className=" pb-300 bg-black/60 min-w-screen min-h-screen">
        <div className="w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/bg-banner-inicio.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,1)_100%)]">
          
          </div>
          <div className="relative z-10 flex flex-row w-full items-center justify-between pl-30">
            <div className="w-1/2">
              <Image
                src="/netflix-logo.png"
                alt="Newflix Logo"
                width={200}
                height={100}
                className=""
              />
            </div>
            <div className="w-1/2 flex justify-end gap-4 pr-30">
              <button className="text-white text-1xl font-bold border-2 border-gray-500 bg-black/40 rounded-md pt-1 pb-1 pl-4 pr-4">Português v</button>
              <button className="bg-red-600 text-1xl pt-1 pb-1 pl-4 pr-4 rounded-md text-white font-bold hover:bg-red-700">Entrar</button>
            </div>
          </div>
          <div className="relative z-10 flex flex-col w-full items-center justify-center">
            <h1 className="text-white text-5xl font-extrabold text-center mt-20 w-180">
              Filmes, séries e muito mais, sem limites.
            </h1>
            <h2 className="text-white text-2xl font-bold text-center mt-5">
              A partir de R$ 20,90. Cancele quando quiser.
            </h2>
            <p className="text-white font-bold text-center mt-7">
              Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
            </p>
            <div className="flex mt-4 gap-2 pt-2">
              <input
                type="email"
                placeholder="Email"
                className="p-4 focus:outline-none border-2 border-gray-300 rounded-md w-120 bg-black/40"
              />
              <button className="bg-red-600 text-white p-4 rounded-md font-extrabold hover:bg-red-700">
                Vamos lá &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 pt-10 justify-center items-center hover:scale-105 transition-transform duration-300">
          <div className="">
            <Image
            src="/pipoca.png"
            alt="Devices Image"
            width={70}
            height={50}
            className=""
            />
          </div>
            
          <div className="flex flex-row justify-between bg-purple-600/10 p-4 rounded-md w-230 hover:bg-purple-600/30 transition-colors duration-300">
            <p>
              <h2 className="text-white font-bold text-2xl">A Netflix que você adora por apenas R$ 20,90.</h2>
              <h3 className="text-white text-1xl">Aproveite nossa opção mais acessível, o plano com anúncios.</h3>
            </p>
            <button className="text-white font-bold bg-gray-500 pl-3 pr-3 rounded-md hover:bg-gray-600 transition-colors duration-300">Saiba mais</button>
          </div>
        </div>
        <div className="flex flex-col pt-20 ">
          <h2 className=" text-white font-bold text-3xl">Em Alta</h2>
          <div className="flex flex-row justify-center items-center pt-4 overflow-scroll-x overflow-visible-x scroll-snap-type-x-mandatory">
            <li className="list-none relative flex justify-end w-45 h-55 hover:scale-105 transition-transform duration-300">
              <Image
                src="/filme-1.jpeg"
                alt="Em Alta 1"
                width={200}
                height={300}
                className="rounded-md"
              />
              <div className="absolute bottom-0 right-25">
                <Image
                  src="/1.png"
                  alt="Em Alta 1"
                  width={120}
                  height={100}
                  className=""
                />
              </div>            
            </li>
            <li className="list-none relative w-65 flex justify-end h-75 hover:scale-105 transition-transform duration-300">
              <Image
                src="/Bird Box.jpeg"
                alt="Em Alta 1"
                width={200}
                height={50}
                className="rounded-md"
              />
              <div className="absolute bottom-0 right-35">
                <Image
                  src="/2.png"
                  alt="Em Alta 1"
                  width={120}
                  height={100}
                  className=""
                />
              </div>
            </li>
            <li className="list-none relative w-65 flex justify-end h-75 hover:scale-105 transition-transform duration-300">
              <Image
                src="/stranger.jpeg"
                alt="Em Alta 1"
                width={200}
                height={50}
                className="rounded-md"
              />
              <div className="absolute bottom-0 right-35">
                <Image
                  src="/3.png"
                  alt="Em Alta 1"
                  width={120}
                  height={100}
                  className=""
                />
              </div>
            </li>
            <li className="list-none relative flex justify-end w-65 h-75 hover:scale-105 transition-transform duration-300">
              <Image
                src="/titans.jpeg"
                alt="Em Alta 1"
                width={200}
                height={50}
                className="rounded-md"
              />
              <div className="absolute bottom-0 right-35">
                <Image
                src="/4.png"
                alt="Em Alta 1"
                width={120}
                height={100}
                className=""
                />
              </div>
            </li>
            <li className="list-none relative w-65 flex justify-end h-75 hover:scale-105 transition-transform duration-300">
              <Image
                src="/iron.jpeg"
                alt="Em Alta 1"
                width={200}
                height={50}
                className="rounded-md"
              />
              <div className="absolute bottom-0 right-35">
                <Image
                  src="/5.png"
                  alt="Em Alta 1"
                  width={120}
                  height={100}
                  className=""
                />
              </div>
            </li>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
