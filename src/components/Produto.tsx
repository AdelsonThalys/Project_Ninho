import Image, { StaticImageData } from "next/image"
import Logo from "@/assets/logo.png"

type Props ={
    NomeProduto: string,
    Preço: string,
    ImagemProduto: StaticImageData
}

export default function Produto({NomeProduto, Preço, ImagemProduto}: Props) {
    return (
        <div className=" p-4 bg-white mx-4 ">
            <a href="" className="block relative h-48 rounded overflow-hidden ">
                <Image className="object-cover object-center block" width={220} height={160} src={ImagemProduto} alt="Produto" />
            </a>
            <div className="mt-4 container w-52">
                <h1 className="text-black text-sm title-font mb-1">{NomeProduto}</h1>
                
                <p className="mt-1">${Preço}</p>
            </div>
        </div>
    )
}