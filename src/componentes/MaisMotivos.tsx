import Image from "next/image";

const MaisMotivos = () => {
    return (
        <div className="flex flex-col w-full pl-30 pr-30 pt-10">
            <h2 className="text-2xl font-bold">Mais motivos para assinar</h2>
            <div className="pt-3">
            <ul className="flex flex-row gap-4">
                <li className="flex flex-col bg-[radial-gradient(ellipse_at_center,_rgba(99,33,99,4)_40%,_rgba(4,0,0,5)_100%)] pt-4 pr-4 pl-4 pb-4 rounded-md justify-between">
                <div className="flex flex-col justi-between">
                    <h2 className="text-2xl font-bold">Aproveite na TV</h2>
                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
                <span className="pt-30 justify-items-end">
                    <Image
                    src="/img/2.png"
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    />
                </span>
                </li>
                <li className="flex flex-col bg-[radial-gradient(ellipse_at_center,_rgba(99,33,99,4)_40%,_rgba(4,0,0,5)_100%)] p-3 rounded-md">
                <div className="flex flex-col justi-between">
                    <h2 className="text-2xl font-bold">Aproveite na TV</h2>
                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
                <span className="pt-30 justify-items-end">
                    <Image
                    src="/img/2.png"
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    />
                </span>
                </li>
                <li className="flex flex-col bg-[radial-gradient(ellipse_at_center,_rgba(99,33,99,4)_40%,_rgba(4,0,0,5)_100%)] p-3 rounded-md">
                <div className="flex flex-col justi-between">
                    <h2 className="text-2xl font-bold">Aproveite na TV</h2>
                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
                <span className="pt-30 justify-items-end">
                    <Image
                    src="/img/2.png"
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    />
                </span>
                </li>
                <li className="flex flex-col bg-[radial-gradient(ellipse_at_center,_rgba(99,33,99,4)_40%,_rgba(4,0,0,5)_100%)] p-3 rounded-md">
                <div className="flex flex-col justi-between">
                    <h2 className="text-2xl font-bold">Aproveite na TV</h2>
                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                </div>
                <span className="pt-30 justify-items-end">
                    <Image
                    src="/img/2.png"
                    alt=""
                    width={70}
                    height={70}
                    className=""
                    />
                </span>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default MaisMotivos;