import Image from "next/image";


const SaibaMais = () => {
    return (
        <div className="flex flex-row gap-4 pt-10 justify-center items-center hover:scale-105 transition-transform duration-300 pr-30 pl-30">
            <div className="">
                <Image
                src="/img/pipoca.png"
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
    )
}

export default SaibaMais;