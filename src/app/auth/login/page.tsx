import { BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from 'react-icons/bi'
import Link from "next/link"

export default function Login() {
    return (
        <section className=" py-5 h-full bg-gradient-to-r from-gradientPurple to-gradientBlue">
            <div className="h-full py-5">
                <div className="flex  flex-row  justify-center items-center h-full">
                    <div className="justify-center">

                        <div className="bg-dark text-white rounded-2xl">
                            <div className="text-center p-5">

                                <div className="pb-5 mt-6 mb-5">

                                    <h2 className="mb-14 mt-4 font-bold uppercase text-3xl">Login</h2>
                                    <p className="text-neutral-300 mb-12 px-8">Preencha as informações da sua conta abaixo</p>


                                    <div className="outline-neutral-300 mb-4 ">
                                        <input className="w-11/12 outline outline-1 mb-2 outline-white rounded-md p-2 bg-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:placehol" type="email" id="typeEmailX" placeholder="Email" />

                                    </div>

                                    <div className="outline-neutral-300 mb-6">
                                        <input className="w-11/12 outline outline-1 outline-white rounded-md p-2 bg-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white" type="password" id="typePasswordX" placeholder="Senha"/>

                                    </div>

                                    <Link href="/auth/UpdatePassword"><button className=" outline outline-2 rounded-sm px-14 py-2 outline-white px5 w-lg hover:bg-slate-50 hover:bg-opacity-10" type="submit">esqueceu</button></Link>
                                    
                                    <Link href="/home"><button className=" outline outline-2 rounded-sm px-14 py-2 outline-white px5 w-lg hover:bg-slate-50 hover:bg-opacity-10" type="submit">Logar</button></Link>
                                   

                                </div>

                                <div className='mb-4'>
                                    <p className='font-medium'>Ou faça login com:</p>
                                </div>
                                <div className='flex items-center justify-center text-3xl gap-3 mb-16'>
                                
                                <p className='hover:bg-gradientBlue rounded-3xl p-1'><BiLogoFacebook/></p>
                                <p className='hover:bg-gradientBlue rounded-3xl p-1'><BiLogoTwitter/></p>
                                <p className='hover:bg-gradientBlue rounded-3xl p-1'><BiLogoGoogle/></p>
                                </div>

                                <p>Não possui conta? <a href="/authentication/cadastro" className='text-blue-400' >Cadastre-se</a></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

