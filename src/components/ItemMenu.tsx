type Props = {
    name: string
}

export function ItemMenu({ name }: Props) {
    return(
        <li>
        <button className="flex items-center gap-6">
            <span className="text-black font-bold">{name}</span>
        </button>
        </li>
    )
}