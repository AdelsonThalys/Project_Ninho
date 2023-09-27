import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Sac() {
    return (
        <section className="text-gray-400 bg-gray-900 relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb12">
                    <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-white">Entre em contato</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Digite seu nome e email para que possamos respondelo</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Nome</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700  focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                        

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Mensagem</label>
                                <textarea name="message" id="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                            <a className="text-indigo-400">EmailEmpresa@gmail.com</a>
                            <p className="leading-normal my-5">49 Smith St. Saint Cloud, MN 56301</p>

                            <span className= 'inline-flex gap-4'>
                            <a><FaFacebookF/></a>
                            <a><FaTwitter/></a>
                            <a><FaInstagram/></a>
                            <a><FaWhatsapp/></a>
                        </span>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </section>
    )
}