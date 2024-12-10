import WorldIcon from "@/components/icon/worl";
import DeployIcon from "@/components/icon/deploy";
import PhoneIcon from "@/components/icon/phone";
import DesktopIcon from "@/components/icon/desktop";

const Servicio = ()=>{
    return(
        <>
        <div className='w-full h-full absolute px-5 lg:flex lg:flex-col lg:justify-center'>
            <div className="mt-20 lg:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="p-4 border-b-4 border-cyan-900">
                    <h1 className=" text-4xl text-outline font-extrabold">01</h1>
                    <div className="flex items-center justify-start mt-5">
                        <WorldIcon height={45} width={45}/>
                        <h2 className="ml-3 text-3xl font-extrabold">Páginas y aplicaciones web</h2>
                    </div>
                    <p className="text-lg font-light mt-2">Desarrollo de páginas web estaticas y aplicaciones web con React, Next.JS, Flet de python,
                        Tailwind CSS, CSS y JavaScripts.
                    </p>
                </div>

                <div className="p-4 border-b-4 border-cyan-900">
                    <h1 className="text-4xl text-outline font-extrabold">02</h1>
                    <div className="flex items-center justify-start mt-5">
                        <DeployIcon height={45} width={45}/>
                        <h2 className="ml-3 text-3xl font-extrabold">Despliegue de páginas y app's web</h2>
                    </div>
                    <p className="text-lg font-light mt-2">Despliegue de páginas y aplicaciones web con Vercel y Render. 
                        <br /><a href="https://next-app-pink-mu.vercel.app/" className="hover:text-cyan-border-cyan-900 text-bcyan-border-cyan-900 mt-2" target="_blank">Ejemplo con Vercel</a>
                        <a href="https://cristian-p57x.onrender.com" className="hover:text-cyan-border-cyan-900 text-bcyan-border-cyan-900 mt-2 mx-5" target="_blank">Ejemplo con Render</a>
                    </p>    
                </div>
                
                <div className="p-4 border-b-4 border-cyan-900">
                    <h1 className="text-4xl text-outline font-extrabold">03</h1>
                    <div className="flex items-center justify-start mt-5">
                        <PhoneIcon height={45} width={45}/>
                        <h2 className="ml-3 text-3xl font-extrabold">Aplicaciones móviles</h2>
                    </div>
                    <p className="text-lg font-light">Desarrollo de aplicaciones para dispositivos móviles con diferentes tecnologías, como Python y Java.</p>
                </div>

                <div className="p-4 border-b-4 border-cyan-900">
                    <h1 className="text-4xl text-outline font-extrabold">04</h1>
                    <div className="flex items-center justify-start mt-5">
                        <DesktopIcon height={45} width={45}/>
                        <h2 className="ml-3 text-3xl font-extrabold">Aplicaciones de escritorio</h2>
                    </div>
                    <p className="text-lg font-light">Desarrollo de aplicaciones de escritorio con distintos frameworks como flet y tkinter de Python y Java</p>
                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default Servicio;