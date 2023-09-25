import Link from "next/link"
type Props = {
    name: string
    rota: string
}

export function ItemMenu({ name, rota }: Props) {
    return(
        <li> <Link href={rota}><span className="text-black font-bold">{name}</span></Link>
        
            
       
        </li>
    )
}

//<button className="flex items-center gap-6">  </button>