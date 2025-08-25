import { EmailForm } from "./EmailForm";

const Assinatura = () => {
    return (
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
            <EmailForm/>
        </div>
    )
}

export default Assinatura;