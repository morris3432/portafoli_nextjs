const Estudios=()=>{
    return(
    <>
        <div className="h-40 flex flex-col justify-center items-center">
                <h1 className="text-center text-cyan-900 text-4xl font-extrabold">Mis Estudios</h1>
                <p className="p-4">Aquí podrás encontrar una lista de mis estudios a nivel primario, basico y medio.</p>
        </div >

        <div className="mt-14 lg:mt-0 w-full h-96 flex flex-col items-start justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full p-2 ">
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2.5 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">2013 - 2019 </h1>
                        <p className="text-lg font-semibold">Liceo Cristiano Monte Sinaí</p>
                        <p className="text-base font-light">Estudios de nivel preprimario y primario</p>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2.5 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">2020 - 2022</h1>
                        <p className="text-lg font-semibold">Liceo Cristiano Monte Sinaí</p>
                        <p className="text-base font-light">Estudios de nivel basicos</p>
                    </div>
                </div>
                
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2.5 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">2023 - 2024 </h1>
                        <p className="text-lg font-semibold">Tecnologico Industrial André Ampere</p>
                        <p className="text-base font-light">Estudios de nivel medio como Bachiller en Ciencias y Letras con Orientación en Computación</p>
                    </div>
                </div>

                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-3 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">Año</h1>
                        <p className="text-lg font-semibold">Institución</p>
                        <p className="text-base font-light">Descripcion</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Estudios;