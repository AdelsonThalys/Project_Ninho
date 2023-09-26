import Image from "next/image"
import Logo from "@/assets/logo.png"
import { ItemMenu } from "./ItemMenu"
import { Pesquisa } from "./Pesquisa"


export function Header() {
    return (
        <header className="w-full h-20 bg-green-950">
            <nav>
                <div className="flex items-center justify-between gap-6 w-full px-[15px] mx-auto">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Image src={Logo} alt="logo" height={80} />
                            <ul className="flex items-center gap-6">
                                
                                <ItemMenu name="Quero alugar" rota="/"/>
                                <ItemMenu name="Login" rota="/cadastro"/>
                                <ItemMenu name="Tire suas duvidas" rota="/about"/>
                                <ItemMenu name="Quero alugar" rota="/a"/>
                            </ul>
                        </div>
                            <Pesquisa/>
                    </div>
                    <button className="flex items-center bg-red-400 h-20 font-bold"><span>Acessar Conta</span></button>
                    <button className="flex items-center bg-red-400 h-20 font-bold"><span>Criar Conta</span></button>
                </div>
            </nav>
        </header>
    )
}

