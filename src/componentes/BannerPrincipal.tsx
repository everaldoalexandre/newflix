import Image from "next/image";
import Assinatura from "./Assinatura";
import MenuDrop from "./MenuDrop";

const BannerPrincipal = () => {
    return (
        <div className="w-full overflow-hidden relative pb-20">
            <div className="absolute inset-0 bg-[url('/bg-banner-inicio.jpg')] bg-cover bg-center opacity-20 z-0"></div>
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,1)_100%)]">
            
            </div>
            <div className="relative z-10 flex flex-row w-full items-center justify-between pl-30 pr-30">
            <div className="w-1/2">
                <Image
                src="/img/netflix-logo.png"
                alt="Newflix Logo"
                width={200}
                height={100}
                className=""
                />
            </div>
            <div className="w-1/2 flex justify-end gap-4">
                <MenuDrop />
                <button className="bg-red-600 text-1xl pt-1 pb-1 pl-4 pr-4 rounded-md text-white font-bold hover:bg-red-700">Entrar</button>
            </div>
            </div>
            <Assinatura/>
        </div>
    )
}

export default BannerPrincipal;