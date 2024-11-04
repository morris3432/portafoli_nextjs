import WorldIcon from "@/components/icon/worl";
import DeployIcon from "@/components/icon/deploy";
import PhoneIcon from "@/components/icon/phone";

const Servicio = ()=>{
    return(
        <>
        <div className='w-full h-full absolute px-5 lg:flex lg:flex-col lg:justify-center'>
            <div className="mt-20 lg:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="p-4 border-b-4 border-red-800">
                        <h1>01</h1>
                        <div className="flex items-center justify-start">
                            <WorldIcon height={45} width={45}/>
                            <h2 className="ml-3 text-3xl font-extrabold">Páginas y aplicaciones web</h2>
                        </div>
                        <p className="text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id earum fugiat nostrum, vitae recusandae ab voluptate similique sapiente soluta qui, praesentium nisi alias iste facere ad architecto dolores, quae velit?</p>
                </div>
                <div className="p-4 border-b-4 border-red-800">
                    <h1>02</h1>
                    <div className="flex items-center justify-start">
                        <DeployIcon height={45} width={45}/>
                        <h2 className="ml-3 text-3xl font-extrabold">Despliegue de página y app's web</h2>
                    </div>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id earum fugiat nostrum, vitae recusandae ab voluptate similique sapiente soluta qui, praesentium nisi alias iste facere ad architecto dolores, quae velit?</p>    
                </div>
                <div className="p-4 border-b-4 border-red-800">
                    <h1>03</h1>
                    <div className="flex items-center justify-start">
                        <PhoneIcon height={45} width={45}/>
                        <h2 className="ml-3 text-3xl font-extrabold">Aplicaciones móviles</h2>
                    </div>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id earum fugiat nostrum, vitae recusandae ab voluptate similique sapiente soluta qui, praesentium nisi alias iste facere ad architecto dolores, quae velit?</p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Servicio;