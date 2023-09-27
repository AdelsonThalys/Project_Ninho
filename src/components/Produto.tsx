import Image from "next/image"
import Logo from "@/assets/logo.png"

type Props ={
    produto: string,
    Descrição: string,
    Preço: string
}

export default function Produto({produto, Descrição, Preço}: Props) {
    return (
        <div className="lg:1/4 md:w1/2 p-4 ">
            <a href="" className="block relative h-48 rounded overflow-hidden ">
                <Image className="object-cover object-center block" width={220} height={160} src={Logo} alt="Produto" />
            </a>
            <div className="mt-4">
                <h1 className="text-gray-500 text-xs tracking-widest mb-1">{produto}</h1>
                <h3 className="text-white title-font text-lg font-medium">{Descrição}</h3>
                <p className="mt-1">${Preço}</p>
            </div>
        </div>
    )
}