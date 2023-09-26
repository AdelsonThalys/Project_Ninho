import { BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from 'react-icons/bi'


export default function Login() {
    return (
        <section className=" pb-5 pt-5 h-screen bg-gradient-to-r from-gradientPurple to-gradientBlue">
            <div className="h-full py-5">
                <div className="flex  flex-row  justify-center items-center h-full">
                    <div className="justify-center">

                        <div className="bg-dark text-white rounded-2xl">
                            <div className="text-center p-5">

                                <div className="pb-5 mt-4 mb-5">

                                    <h2 className="mb-2 mt-6 font-bold uppercase text-3xl">Login</h2>
                                    <p className="text-neutral-300 mb-12 px-8">Preencha as informações da sua conta abaixo</p>


                                    <div className="outline-neutral-300 mb-4 ">
                                        <input className="w-11/12 outline outline-1 mb-2 outline-white rounded-md p-2 bg-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:placehol" type="email" id="typeEmailX" placeholder="Email" />

                                    </div>

                                    <div className="outline-neutral-300 mb-6">
                                        <input className="w-11/12 outline outline-1 outline-white rounded-md p-2 bg-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white" type="password" id="typePasswordX" placeholder="Senha"/>

                                    </div>

                                    <p className="mb-10"> esqueceu sua senha?</p>

                                    <button className=" outline outline-2 rounded-sm px-14 py-2 outline-white px5 w-lg hover:bg-slate-50 hover:bg-opacity-10" type="submit">Logar</button>

                                </div>
                                <div className='flex items-center justify-center text-3xl gap-6 mb-16'>
                                
                                <p><BiLogoFacebook/></p>
                                <p><BiLogoTwitter/></p>
                                <p><BiLogoGoogle/></p>
                                </div>

                                <p>Não possui conta? <a href="#!" className='text-blue-400' >Cadastre-se</a></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

