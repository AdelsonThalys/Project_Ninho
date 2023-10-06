import Image from "next/image"
import Logo from "@/assets/logo.png"
import { ItemMenu } from "@/components/ItemMenu"
import { Pesquisa } from "@/components/Pesquisa"
import { FaPercent, FaTag, FaQuestionCircle, FaStoreAlt, FaTruck, FaHeadset, FaUserAlt, FaShoppingCart } from 'react-icons/fa';


export function Header() {
    return (
        <header className="w-full  bg-White">
            <nav>
                <div className="flex items-center justify-between gap-6 w-full px-[15px] mx-auto">
                    <div className="flex flex-col  justify-between">
                        
                        <div className="flex gap-6 bg-slate-200 w-full overflow-hidden">
                        <p className="flex items-center gap-1 text-sm min-w-fit"><FaPercent/>outlet</p>
                        <p className="flex items-center gap-1 text-sm min-w-fit"><FaTag/>Todas as Marcas</p>
                        <p className="flex items-center gap-1 text-sm min-w-fit"><FaQuestionCircle/>Tire Suas Duvidas</p>
                        <p className="flex items-center gap-1 text-sm min-w-fit"><FaStoreAlt/>Compre na Loja</p>
                        <p className="flex items-center gap-1 text-sm min-w-fit"><FaTruck/>Frete Gratis Para Todo Brasil</p>
                        
                        <div className="flex gap-4 bg-white pl-2">
                            <p className="flex items-center gap-2 text-xl"><FaHeadset/>Quer ajuda?</p>
                            <p className="flex items-center gap-2 text-xl"><FaUserAlt/>olá Visitante </p>
                            <p className="flex items-center gap-2 text-xl"><FaShoppingCart/>0 items</p>
                        </div>
                   </div>
                             
                        <div className="flex items-center gap-6">
                            
                            <Image src={Logo} alt="logo" height={140} />

                            <p className="ml-3">O equipamento que você precisa para a segurança da sua obra</p>
                            
                            <Pesquisa/>
                        </div>
                        <div className="-mt-6">
                        <ul className="flex ml-48 mb-4 gap-5">
                                
                                <ItemMenu name="Altura" rota="/home"/>
                                <ItemMenu name="Botas" rota="/auth/login"/>
                                <ItemMenu name="Capacete" rota="/sac"/>
                                <ItemMenu name="Luvas" rota="/home"/>
                                <ItemMenu name="Protetores de ouvido" rota="/auth/login"/>
                                <ItemMenu name="Jaleco" rota="/sac"/>
                                <ItemMenu name="Proteção respiratoria" rota="/a"/>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
                
            </nav>
        </header>
    )
}

