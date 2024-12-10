const Resumen=()=>{
    return(
    <>
        <div className="h-40 flex flex-col justify-center items-center">
                <h1 className="text-center text-cyan-900 text-4xl font-extrabold">Mi Experiencia</h1>
                <p className="p-4">Aquí podrás encontrar una breve descripción de mi experiencia profesional y el trabajo que he realizado en diferentes proyectos.</p>
        </div >
        <div className="mt-14 lg:mt-0 w-full h-96 flex flex-col items-start justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full p-2">
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20  rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">Julio - Agosto 2024 </h1>
                        <p className="text-lg font-semibold">Tecnologico Industrial André Ampere</p>
                        <p className="text-base font-light">Desarrolle una aplicación que toma la asistencia por medio  de un codigo de barra</p>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-2xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2.5 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2 ">
                        <h1 className="text-xl font-bold">Septiembre - Octubre 2024</h1>
                        <p className="text-lg font-semibold">VIA Asesores S.A</p>
                        <p className="text-base font-light">Hice mis practicas profesionales</p>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2.5 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">Año</h1>
                        <p className="text-lg font-semibold">Empresa o institución</p>
                        <p className="text-base font-light">Descripcion</p>
                    </div>
                </div>
                <div className="flex items-center hover:scale-110 transition-all rounded-r-3xl rounded-l-2xl">
                    <div className="bg-cyan-900 w-2.5 h-full rounded-l-full"></div>
                    <div className="h-full w-full bg-gray-400 bg-opacity-20 rounded-r-3xl p-2">
                        <h1 className="text-xl font-bold">Año</h1>
                        <p className="text-lg font-semibold">Empresa o institución</p>
                        <p className="text-base font-light">Descripcion</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Resumen