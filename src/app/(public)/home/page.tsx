import Image from 'next/image'
import Produto from '@/components/Produto'

import Imagem1 from "@/assets/Imagem1.jpg"
import Logo from "@/assets/logo.png"
export default function Home() {
  return (
    <section className='text-gray-800 bg-corFundo'>
      <div className="h-10 w-full bg-gradient-to-b from-white to-corFundo"></div>
      <div className='h-12 bg-white flex items-center'><p className='ml-12'>Mais Populares</p></div>
      <div className='container px-5 py-24'>
        <div className='flex flex-wrap flex-row -m-4'>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Imagem1}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
          <Produto NomeProduto='capacete' Preço='99' ImagemProduto={Logo}/>
        </div>
      </div>
    </section>
  )
}
